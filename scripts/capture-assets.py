from pathlib import Path
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 1000}, device_scale_factor=1)
    page.goto('https://macrointel-web.onrender.com/integrations', wait_until='networkidle', timeout=90000)
    heading = page.get_by_role('heading', name='Account metrics', exact=True)
    page.evaluate('(y) => window.scrollTo(0,y)', heading.bounding_box()['y'] + page.evaluate('scrollY') - 100)
    page.wait_for_timeout(1000)
    page.screenshot(path='public/images/macrointel.jpg', type='jpeg', quality=85, clip={'x':270,'y':60,'width':1120,'height':760})
    page.set_viewport_size({'width':1200,'height':630})
    page.goto('http://localhost:3000/social-card.svg', wait_until='load')
    page.screenshot(path='public/social-card.png')
    page.set_viewport_size({'width':180,'height':180})
    page.goto('http://localhost:3000/favicon.svg', wait_until='load')
    page.screenshot(path='public/apple-touch-icon.png')
    browser.close()
    print('Captured public MacroIntel metrics, social card, and branded touch icon.')
