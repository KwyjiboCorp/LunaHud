import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
const root = import.meta.dirname;
http.createServer(async (req, res) => {
  const pathname = new URL(req.url, 'http://localhost').pathname;
  const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
  if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
  try {
    if (!['.html','.css','.js','.svg','.webmanifest'].includes(path.extname(file))) throw Error();
    const body = await readFile(file);
    res.setHeader('Content-Type', ({'.html':'text/html','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.webmanifest':'application/manifest+json'})[path.extname(file)]);
    res.end(body);
  } catch { res.writeHead(404).end('Not found'); }
}).listen(Number(process.env.PORT) || 3000, '0.0.0.0');
