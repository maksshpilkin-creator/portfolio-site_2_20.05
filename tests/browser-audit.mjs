import assert from 'node:assert/strict';
import { createReadStream } from 'node:fs';
import { access, mkdir } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, resolve, sep } from 'node:path';
import test from 'node:test';
import { chromium, firefox, webkit } from 'playwright';

const root = resolve(import.meta.dirname, '..');
const outputDirectory = resolve(root, 'output', 'playwright');
const viewports = [
  { width: 320, height: 568 },
  { width: 375, height: 667 },
  { width: 390, height: 844 },
  { width: 412, height: 915 },
  { width: 768, height: 1024 },
  { width: 1024, height: 768 },
  { width: 1366, height: 768 },
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
];
const landscapeViewports = [
  { width: 568, height: 320 },
  { width: 667, height: 375 },
  { width: 844, height: 390 },
];

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
};

function createStaticServer() {
  return createServer(async (request, response) => {
    const pathname = new URL(request.url, 'http://localhost').pathname;
    const relativePath = pathname === '/' ? 'index.html' : decodeURIComponent(pathname).replace(/^\/+/, '');
    const filePath = resolve(root, relativePath);

    if (!filePath.startsWith(`${root}${sep}`) && filePath !== resolve(root, 'index.html')) {
      response.writeHead(403).end();
      return;
    }

    try {
      await access(filePath);
      response.writeHead(200, { 'content-type': mimeTypes[extname(filePath)] ?? 'application/octet-stream' });
      createReadStream(filePath).pipe(response);
    } catch {
      response.writeHead(404).end('Not found');
    }
  });
}

async function startServer() {
  const server = createStaticServer();
  await new Promise((resolveServer) => server.listen(0, '127.0.0.1', resolveServer));
  const { port } = server.address();
  return { server, url: `http://127.0.0.1:${port}/` };
}

async function assertViewport(page, viewport) {
  await page.setViewportSize(viewport);
  await page.goto(page.auditUrl, { waitUntil: 'networkidle' });

  const layout = await page.evaluate(() => {
    const hero = document.querySelector('.hero');
    const heroRect = hero?.getBoundingClientRect();
    return {
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      heroHeight: heroRect?.height ?? 0,
      heroBottomTop: document.querySelector('.hero__bottom')?.getBoundingClientRect().top ?? 0,
      heroTitleBottom: document.querySelector('.hero__title')?.getBoundingClientRect().bottom ?? 0,
      overflowingContent: [...document.querySelectorAll('main a, main button, input, textarea, h1, h2, h3, p')]
        .filter((element) => {
          const rect = element.getBoundingClientRect();
          return rect.right > document.documentElement.clientWidth + 1 || rect.left < -1;
        })
        .map((element) => element.className || element.tagName),
      viewportHeight: window.innerHeight,
    };
  });

  assert.equal(layout.scrollWidth, layout.clientWidth, `${viewport.width}px viewport must not scroll horizontally`);
  assert.ok(layout.heroHeight >= layout.viewportHeight - 1, 'hero must cover the initial viewport');
  assert.ok(layout.heroTitleBottom <= layout.heroBottomTop, 'hero title and primary content must not overlap');
  assert.deepEqual(layout.overflowingContent, [], `${viewport.width}px viewport must not clip interactive content`);
}

async function verifyMobileInteraction(page) {
  await page.setViewportSize(viewports[0]);
  await page.goto(page.auditUrl, { waitUntil: 'networkidle' });

  const burger = page.locator('#burger');
  await burger.click();
  assert.equal(await burger.getAttribute('aria-expanded'), 'true');
  assert.equal(await page.locator('#mobile-nav').getAttribute('aria-hidden'), 'false');
  await page.keyboard.press('Escape');
  assert.equal(await burger.getAttribute('aria-expanded'), 'false');

  await page.locator('.hero__buttons a[href="#portfolio"]').click();
  await page.waitForFunction(() => document.querySelector('#portfolio').getBoundingClientRect().top < window.innerHeight);
  assert.equal(await page.locator('#portfolio').evaluate((section) => section.getBoundingClientRect().top < window.innerHeight), true);

  const form = page.locator('[data-contact-form]');
  await form.locator('input[name="name"]').fill('Max');
  await form.locator('input[name="contact"]').fill('@devbymax');
  await form.locator('textarea[name="message"]').fill('Нужен сайт');
  await page.getByRole('button', { name: /Получить оценку проекта/i }).click();
  assert.match(await page.locator('[data-form-status]').textContent(), /Telegram/i);
}

async function auditBrowser(name, browserType, url) {
  const browser = await browserType.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  const consoleErrors = [];
  const failedRequests = [];
  page.auditUrl = url;

  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });
  page.on('requestfailed', (request) => failedRequests.push(`${request.method()} ${request.url()}`));

  try {
    for (const viewport of [...viewports, ...landscapeViewports]) await assertViewport(page, viewport);
    await verifyMobileInteraction(page);

    if (name === 'chromium') {
      for (const viewport of [viewports[0], viewports[6], viewports[7]]) {
        await page.setViewportSize(viewport);
        await page.goto(url, { waitUntil: 'networkidle' });
        await page.waitForTimeout(2200);
        await page.screenshot({ path: resolve(outputDirectory, `hero-${viewport.width}x${viewport.height}.png`) });
        await page.locator('.contact').scrollIntoViewIfNeeded();
        await page.waitForTimeout(800);
        await page.locator('.contact').screenshot({ path: resolve(outputDirectory, `contact-${viewport.width}x${viewport.height}.png`) });
      }
    }

    assert.deepEqual(consoleErrors, [], `${name} emitted console errors`);
    assert.deepEqual(failedRequests, [], `${name} emitted failed network requests`);
  } finally {
    await context.close();
    await browser.close();
  }
}

const { server, url } = await startServer();
await mkdir(outputDirectory, { recursive: true });

test.after(() => new Promise((resolveServer, rejectServer) => {
  server.close((error) => (error ? rejectServer(error) : resolveServer()));
}));

for (const [name, browserType] of Object.entries({ chromium, firefox, webkit })) {
  test(`${name}: responsive layout and primary interactions`, async () => {
    await auditBrowser(name, browserType, url);
  });
}
