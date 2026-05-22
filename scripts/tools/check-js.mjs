import { readdir } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';

const roots = ['data', 'scripts'];

async function collectJavaScriptFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return collectJavaScriptFiles(path);
    return entry.isFile() && path.endsWith('.js') ? [path] : [];
  }));

  return files.flat();
}

const files = (await Promise.all(roots.map(collectJavaScriptFiles))).flat();

for (const file of files) {
  const result = spawnSync(process.execPath, ['--check', file], { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}
