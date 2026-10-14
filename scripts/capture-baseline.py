import json
from pathlib import Path
from playwright.sync_api import sync_playwright

out = Path('docs/screenshots')
out.mkdir(parents=True, exist_ok=True)
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 1000}, device_scale_factor=1)
    page.goto('https://aryan-dev.vercel.app/', wait_until='networkidle', timeout=90000)
    page.screenshot(path=str(out / 'before-desktop.png'), full_page=True)
    page.set_viewport_size({'width': 390, 'height': 844})
    page.screenshot(path=str(out / 'before-mobile.png'), full_page=True)
    print(json.dumps({'title': page.title(), 'mobileWidth': page.evaluate('document.documentElement.scrollWidth'), 'viewport': 390}))
    browser.close()
