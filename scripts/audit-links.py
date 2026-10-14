"""Read-only HTTP reachability audit. This does not prove SPA functionality."""
import concurrent.futures
import json
import urllib.request
import urllib.error
from pathlib import Path

urls = [
'https://macrointel-web.onrender.com/integrations',
'https://github.com/Aryann208/MacroIntel-Fullstack',
'https://tmdb-phi.vercel.app/', 'https://github.com/Aryann208/TMDB',
'https://react-recipes-mauve.vercel.app/', 'https://github.com/Aryann208/React-Recipes',
'https://metaverse-p92w.vercel.app/', 'https://github.com/Aryann208/Metaverse',
'https://crwn-clothing-jet.vercel.app/', 'https://github.com/Aryann208/Crwn-clothing',
'https://github.com/Aryann208',
'https://www.linkedin.com/in/aryan-trivedi-14279a190/',
]
def check(url):
    try:
        req = urllib.request.Request(url, headers={'User-Agent':'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=45) as response:
            return {'url':url, 'status':response.status, 'finalUrl':response.url}
    except urllib.error.HTTPError as error:
        return {'url':url, 'status':error.code}
    except Exception as error:
        return {'url':url, 'error':str(error)}
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:
    result = list(pool.map(check, urls))
Path('docs/link-audit.json').write_text(json.dumps(result, indent=2), encoding='utf-8')
print(json.dumps(result, indent=2))
