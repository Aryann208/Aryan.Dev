"""Browser acceptance checks. Requires Python Playwright and its Chromium browser.
Usage: python scripts/visual-qa.py [http://localhost:3001]
"""
import json
import re
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

base = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:3001'
out = Path('docs/screenshots')
out.mkdir(parents=True, exist_ok=True)
report = {'base': base, 'viewports': [], 'consoleErrors': [], 'pageErrors': []}

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(reduced_motion='reduce', device_scale_factor=1)
    page = context.new_page()
    page.on('pageerror', lambda e: report['pageErrors'].append(str(e)))
    page.on('console', lambda m: report['consoleErrors'].append(m.text) if m.type == 'error' else None)

    for width in [320, 360, 375, 390, 430, 768, 1024, 1440]:
        page.set_viewport_size({'width': width, 'height': 900 if width >= 768 else 844})
        response = page.goto(base, wait_until='networkidle')
        assert response.status == 200
        page.evaluate('document.fonts.ready')
        assert page.get_by_role('heading', name='Aryan Trivedi.', exact=True).count() == 1
        # Load every deferred image and inspect the entire page, not only the hero.
        for img in page.locator('img').all():
            img.scroll_into_view_if_needed()
            img.evaluate('(e) => e.decode()')
        images = page.locator('img').evaluate_all('(imgs)=>imgs.map(e=>({alt:e.alt,loaded:e.complete&&e.naturalWidth>0}))')
        assert all(img['loaded'] for img in images), images
        anchors = page.locator('a[href^="#"]').evaluate_all('(links)=>links.map(e=>e.getAttribute("href"))')
        assert all(page.locator(a).count() for a in anchors), anchors
        assert page.locator('a[href^="mailto:www."]').count() == 0
        assert page.locator('a[target="_blank"]:not([rel*="noopener"])').count() == 0
        assert page.locator('a > button').count() == 0
        assert page.locator('a:not([href])').count() == 0
        for detail in page.locator('#projects details').all():
            summary = detail.locator('summary')
            summary.focus()
            page.keyboard.press('Enter')
            assert detail.get_attribute('open') is not None
            assert page.evaluate('document.documentElement.scrollWidth') <= width
            page.keyboard.press('Enter')
            assert detail.get_attribute('open') is None
        if width <= 768:
            toggle = page.locator('button[aria-controls="nav-links"]')
            toggle.click()
            assert toggle.get_attribute('aria-expanded') == 'true'
            page.keyboard.press('Escape')
            assert toggle.get_attribute('aria-expanded') == 'false'
            assert toggle.evaluate('(e)=>e===document.activeElement')
        for section in ['about','experience','projects','skills','contact']:
            if width <= 768:
                page.locator('button[aria-controls="nav-links"]').click()
            link = page.locator('nav a[href="#'+section+'"]')
            link.click()
            assert page.evaluate('location.hash') == '#'+section
            if width <= 768:
                assert page.locator('button[aria-controls="nav-links"]').get_attribute('aria-expanded') == 'false'
        overflow = page.evaluate('document.documentElement.scrollWidth')
        assert overflow <= width, {'width': width, 'scrollWidth': overflow}
        page.evaluate('window.scrollTo(0,0)')
        page.screenshot(path=str(out / ('after-' + str(width) + '.png')), full_page=True)
        if width in [390,1440]:
            name = 'mobile' if width == 390 else 'desktop'
            page.screenshot(path=str(out / ('after-' + name + '-hero.png')))
            page.locator('#projects').screenshot(path=str(out / ('after-' + name + '-projects.png')), style='header, .skip-link, .progress-bar { visibility: hidden !important; }')
        report['viewports'].append({'width': width, 'scrollWidth': overflow, 'imagesLoaded': len(images), 'navigation': 'pass', 'caseStudies': 'pass'})

    # Public Drive accessibility is separately recorded in resume-link-audit.json.
    resume_url = 'https://drive.google.com/file/d/1xyfVMh-k9vBhASWRcLaLL9mxcwkJp35L/view?usp=sharing'
    resume_links = page.locator('a[href="' + resume_url + '"]')
    assert resume_links.count() == 5
    for link in resume_links.all():
        assert link.get_attribute('target') == '_blank'
        assert {'noopener','noreferrer'}.issubset(set(link.get_attribute('rel').split()))
        assert link.get_attribute('download') is None
    report['resume'] = {'url':resume_url, 'links':5, 'opensInNewTab':True, 'type':'Google Drive viewer'}

    # A fresh page checks real sequential keyboard focus and explicit motion controls.
    keyboard = context.new_page()
    keyboard.set_viewport_size({'width':390,'height':844})
    keyboard.goto(base, wait_until='networkidle')
    keyboard.keyboard.press('Tab')
    assert keyboard.locator('.skip-link').evaluate('(e)=>e===document.activeElement')
    assert keyboard.locator('.skip-link').is_visible()
    keyboard.keyboard.press('Enter')
    assert keyboard.locator('#main').evaluate('(e)=>e===document.activeElement')
    report['keyboardSkipLink'] = 'pass'
    assert keyboard.locator('.stack-track').first.evaluate('(e)=>getComputedStyle(e).animationName') == 'none'
    assert keyboard.locator('html').evaluate('(e)=>getComputedStyle(e).scrollBehavior') == 'auto'
    report['reducedMotion'] = 'pass'

    motion_context = browser.new_context(reduced_motion='no-preference', viewport={'width':1440,'height':1000})
    motion = motion_context.new_page()
    motion.goto(base, wait_until='networkidle')
    pause = motion.get_by_role('button', name='Pause motion: technology animation')
    pause.click()
    assert motion.locator('.stack-track').first.evaluate('(e)=>getComputedStyle(e).animationPlayState') == 'paused'
    motion.get_by_role('button', name='Play motion: technology animation').click()
    motion.mouse.move(2,2)
    motion.get_by_role('link', name='aryan.dev/ — Aryan Trivedi, home').focus()
    assert motion.locator('.stack-track').first.evaluate('(e)=>getComputedStyle(e).animationPlayState') == 'running'
    report['motionPauseResume'] = 'pass'
    # Stress the native disclosures at small sizes with all case studies open.
    page.set_viewport_size({'width':320,'height':844})
    page.goto(base, wait_until='networkidle')
    for detail in page.locator('#projects details').all():
        detail.locator('summary').click()
    assert page.evaluate('document.documentElement.scrollWidth') <= 320
    page.locator('#projects').screenshot(path=str(out / 'after-320-case-studies-open.png'), style='header, .skip-link, .progress-bar { visibility: hidden !important; }')
    report['expandedCaseStudies320'] = 'pass'
    assert not report['consoleErrors'], report['consoleErrors']
    assert not report['pageErrors'], report['pageErrors']
    report['status'] = 'passed'
    browser.close()

Path('docs/visual-qa.json').write_text(json.dumps(report, indent=2), encoding='utf-8')
print(json.dumps(report, indent=2))
