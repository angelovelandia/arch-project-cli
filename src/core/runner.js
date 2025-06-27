import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { execa } from 'execa';
import minimist from 'minimist';

import { logger } from '../utils/logger.js';
import { MESSAGES } from '../utils/messages.js';

import { createAtomicStructure } from '../generators/atomic.js';
import { createAuthContext } from '../generators/auth.js';
import { createRoutes } from '../generators/routes.js';
import { installLibraries } from '../generators/libraries.js';
import { createMainFile } from '../utils/writeMain.js';

export async function run(flagsFromPrompt) {
  logger.info(MESSAGES.welcome);

  const argv = minimist(process.argv.slice(2));
  const flags = {
    name: argv.name || flagsFromPrompt?.name,
    arch: argv.arch || flagsFromPrompt?.arch,
    auth: argv.auth ?? flagsFromPrompt?.auth ?? false,
    routes: argv.routes ?? flagsFromPrompt?.routes ?? false,
    libraries: argv.libraries ?? flagsFromPrompt?.libraries ?? false
  };

  if (!flags.name) {
    logger.error(MESSAGES.missingProjectName);
    process.exit(1);
  }

  if (!flags.arch || flags.arch !== 'atomic') {
    logger.error(MESSAGES.invalidArch);
    process.exit(1);
  }

  const projectPath = path.join(process.cwd(), flags.name);

  if (await fs.pathExists(projectPath)) {
    logger.error(MESSAGES.projectExists(flags.name));
    process.exit(1);
  }

  logger.info(MESSAGES.creatingProject(flags.name));

  // Create Vite project
  await execa('npm', ['create', 'vite@latest', flags.name, '--', '--template', 'react'], {
    stdio: 'inherit'
  });

  if (flags.arch === 'atomic') {
    logger.info(MESSAGES.settingUpStructure);
    await createAtomicStructure(projectPath);

    logger.info(MESSAGES.installingBase);
    await execa('npm', ['install'], { cwd: projectPath, stdio: 'inherit' });

    if (flags.auth) {
      logger.info(MESSAGES.creatingAuthContext);
      await createAuthContext(projectPath);
    }

    if (flags.routes) {
      logger.info(MESSAGES.creatingRoutes);
      await createRoutes(projectPath, flags.auth);
    }

    await createMainFile(projectPath, flags.auth, flags.routes);

    if (flags.libraries) {
      logger.info(MESSAGES.installingLibraries);
      await installLibraries(projectPath);
    }
  }

  logger.success(MESSAGES.done(flags.name));
}
