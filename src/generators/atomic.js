import fs from 'fs-extra';
import path from 'path';

export async function createAtomicStructure(projectPath) {
  const folders = [
    'src/components/atoms',
    'src/components/icons',
    'src/components/molecules',
    'src/components/organisms',
    'src/components/templates',
    'src/context',
    'src/hooks',
    'src/middlewares',
    'src/pages/in',
    'src/pages/out',
    'src/routes/in',
    'src/routes/out',
    'src/utils'
  ];

  for (const folder of folders) {
    await fs.ensureDir(path.join(projectPath, folder));
  }
}
