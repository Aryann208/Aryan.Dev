"""Run axe-core in Chromium at mobile and desktop sizes; no runtime dependency."""
import json
import sys
import urllib.request
from pathlib import Path
from playwright.sync_api import sync_playwright

base = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:3001'
axe = urllib.request.urlopen('https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.10.3/axe.min.js', timeout=45).read().decode()
report = []
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(reduced_motion='reduce')
    for width in [390, 1440]:
        page.set_viewport_size({'width': width, 'height': 900})
        page.goto(base, wait_until='networkidle')
        for detail in page.locator('#projects details').all():
            detail.locator('summary').click()
        if width == 390:
            page.get_by_role('button', name='Menu', exact=True).click()
        page.add_script_tag(content=axe)
        result = page.evaluate("""async () => {
          const r = await axe.run(document, {runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa','best-practice']}});
          return {violations:r.violations, passes:r.passes.length, incomplete:r.incomplete.map(x=>({id:x.id,summary:x.description,nodes:x.nodes.map(n=>({target:n.target,html:n.html,summary:n.failureSummary}))}))};
        }""")
        report.append({'width':width, **result})
    browser.close()
Path('docs/accessibility-qa.json').write_text(json.dumps(report, indent=2), encoding='utf-8')
print(json.dumps(report, indent=2))
assert all(not r['violations'] for r in report), 'Accessibility violations found'
