import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const root = new URL('..', import.meta.url);

async function readProjectFile(path) {
  return readFile(new URL(path, root), 'utf8');
}

function getKeyframeBody(css, name) {
  const start = css.indexOf(`@keyframes ${name}`);
  assert.notEqual(start, -1, `@keyframes ${name} must exist`);

  const openBrace = css.indexOf('{', start);
  let depth = 0;

  for (let index = openBrace; index < css.length; index += 1) {
    if (css[index] === '{') depth += 1;
    if (css[index] === '}') depth -= 1;
    if (depth === 0) return css.slice(openBrace + 1, index);
  }

  throw new Error(`@keyframes ${name} is not closed`);
}

test('continuous decorative animations do not animate box shadows', async () => {
  const [heroCss, ctaCss] = await Promise.all([
    readProjectFile('styles/sections/hero.css'),
    readProjectFile('styles/sections/cta.css'),
  ]);

  assert.doesNotMatch(getKeyframeBody(heroCss, 'kickerPulse'), /box-shadow/);
  assert.doesNotMatch(getKeyframeBody(ctaCss, 'proposalFloat'), /box-shadow/);
});

test('repeated cards do not reserve compositor layers while idle', async () => {
  const [conversionCss, processCss] = await Promise.all([
    readProjectFile('styles/sections/conversion.css'),
    readProjectFile('styles/sections/process.css'),
  ]);

  assert.doesNotMatch(conversionCss, /\.conversion-card\s*\{[^}]*will-change:\s*transform/);
  assert.doesNotMatch(conversionCss, /\.conversion-grid--dark \.conversion-card-shell\s*\{[^}]*will-change:\s*transform/);
  assert.doesNotMatch(processCss, /\.process__row > \*\s*\{[^}]*will-change:\s*transform/);
});

test('observer-driven effects release earlier observers before reinitializing', async () => {
  const [revealModule, countUpModule] = await Promise.all([
    readProjectFile('scripts/modules/reveal.js'),
    readProjectFile('scripts/modules/count-up.js'),
  ]);

  assert.match(revealModule, /revealObserver\?\.disconnect\(\)/);
  assert.match(countUpModule, /countObserver\?\.disconnect\(\)/);
});
