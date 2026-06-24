import fs from 'fs';
import path from 'path';

const links = JSON.parse(fs.readFileSync('drive-links.json', 'utf-8'));
const outDir = 'public'; // or wherever your build picks up static files

for (const [slug, url] of Object.entries(links)) {
  const dir = path.join(outDir, slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, 'index.html'),
    `<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="refresh" content="0; url=${url}" />
    <link rel="canonical" href="${url}" />
  </head>
  <body>Redirecting…</body>
</html>`
  );
}

console.log(`Generated ${Object.keys(links).length} redirect pages.`);