import { mkdir, writeFile } from 'fs/promises';
import path from 'path';

export async function setupStructure(projectName, structure) {
  const basePath = path.resolve(process.cwd(), projectName);

  for (const folder of structure.folders) {
    await mkdir(path.join(basePath, folder), { recursive: true });
  }

  for (const file of structure.files) {
    await writeFile(path.join(basePath, file.path), file.content);
  }
}