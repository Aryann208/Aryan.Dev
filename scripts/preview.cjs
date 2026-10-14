// Local production-build preview for browser and performance QA.
const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');
const { gzipSync } = require('node:zlib');

const root = path.resolve(__dirname, '../build');
const host = '127.0.0.1';
const port = 3001;
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
};

function acceptsGzip(header = '') {
  return header.split(',').some((entry) => {
    const [encoding, ...parameters] = entry.trim().toLowerCase().split(';');
    const quality = parameters.find((parameter) => parameter.trim().startsWith('q='));
    return encoding === 'gzip' && (!quality || Number(quality.trim().slice(2)) > 0);
  });
}

const server = http.createServer(async (request, response) => {
  const sendError = (status, message) => {
    const body = Buffer.from(message);
    response.writeHead(status, {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Length': body.length,
      'Cache-Control': 'no-cache',
      Vary: 'Accept-Encoding',
    });
    response.end(request.method === 'HEAD' ? undefined : body);
  };
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.setHeader('Allow', 'GET, HEAD');
    return sendError(405, 'Method not allowed');
  }
  let pathname;
  try {
    pathname = decodeURIComponent(request.url.split('?')[0]);
  } catch {
    return sendError(400, 'Invalid request path');
  }
  if (!pathname.startsWith('/') || pathname.includes('\0')) return sendError(400, 'Invalid request path');
  if (pathname.split(/[\\/]/).includes('..')) return sendError(403, 'Forbidden');
  const target = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
  const relative = path.relative(root, target);
  if (relative.startsWith('..') || path.isAbsolute(relative)) return sendError(403, 'Forbidden');
  try {
    const resolved = await fs.realpath(target);
    const resolvedRelative = path.relative(root, resolved);
    if (resolvedRelative.startsWith('..') || path.isAbsolute(resolvedRelative)) return sendError(403, 'Forbidden');
    if (!(await fs.stat(resolved)).isFile()) return sendError(404, 'Not found');
    let body = await fs.readFile(resolved);
    const contentType = mimeTypes[path.extname(resolved).toLowerCase()] || 'application/octet-stream';
    const compress = /^(text\/|application\/(javascript|json|xml)|image\/svg\+xml)/.test(contentType) && acceptsGzip(request.headers['accept-encoding']);
    if (compress) body = gzipSync(body);
    response.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': body.length,
      ...(compress ? { 'Content-Encoding': 'gzip' } : {}),
      Vary: 'Accept-Encoding',
      'Cache-Control': /^\/static\/.*\.[a-f\d]{8,}\./i.test(pathname) ? 'public, max-age=31536000, immutable' : 'no-cache',
    });
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch (error) {
    sendError(['ENOENT', 'ENOTDIR', 'EISDIR'].includes(error.code) ? 404 : 500, 'Not found');
  }
});

server.listen(port, host, () => {
  console.log(`Production preview: http://${host}:${port}`);
});
