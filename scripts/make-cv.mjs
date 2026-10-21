// Renders the /cv page to public/cv.pdf with headless Edge or Chrome.
// Usage: npm run cv   (re-run whenever src/data/portfolio.json changes)
import { spawn, execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const browsers = [
  process.env.BROWSER,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);
const browser = browsers.find((b) => existsSync(b));
if (!browser) throw new Error('No Edge/Chrome found. Set BROWSER=/path/to/chrome and try again.');

const out = resolve('public/cv.pdf');
const base = (process.env.BASE || '/').replace(/\/?$/, '/');
const ok = async (u) => { try { return (await fetch(u)).ok; } catch { return false; } };

// Reuse a dev server that is already running (Astro allows only one per project), else start one.
// 127.0.0.1 rather than localhost so Node and the browser can't disagree on IPv4/IPv6.
let url = null, server = null;
for (const u of [`http://127.0.0.1:4321${base}cv/`, `http://localhost:4321${base}cv/`]) {
  if (await ok(u)) { url = u; break; }
}
if (!url) {
  server = spawn('npx astro dev --host 127.0.0.1 --port 4329', { shell: true, stdio: 'ignore' });
  const u = `http://127.0.0.1:4329${base}cv/`;
  for (let i = 0; i < 90 && !url; i++) {
    if (await ok(u)) url = u;
    else await new Promise((r) => setTimeout(r, 500));
  }
}

try {
  if (!url) throw new Error('Could not reach an Astro dev server for /cv/');
  execFileSync(browser, [
    '--headless', '--disable-gpu', '--no-pdf-header-footer', '--virtual-time-budget=8000',
    `--print-to-pdf=${out}`, url,
  ], { stdio: 'ignore' });
  if (!existsSync(out)) throw new Error('The browser did not write the PDF');
  console.log(`Saved ${out} from ${url}`);
} finally {
  if (server) {
    server.kill();
    if (process.platform === 'win32') try { execFileSync('taskkill', ['/pid', String(server.pid), '/T', '/F'], { stdio: 'ignore' }); } catch {}
  }
}
