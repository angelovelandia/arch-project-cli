import inquirer from 'inquirer';
import { run } from './runner.js';

export async function showMenu() {
  const answers = await inquirer.prompt([
    { name: 'name', message: 'Project name:', type: 'input' },
    {
      name: 'arch',
      message: 'Select the architecture:',
      type: 'list',
      choices: ['atomic'],
    },
    {
      name: 'auth',
      message: 'Include session context?',
      type: 'confirm',
    },
    {
      name: 'routes',
      message: 'Include basic routes (in/out)?',
      type: 'confirm',
    },
    {
      name: 'libraries',
      message: 'Install base libraries with tailwind?',
      type: 'confirm',
    },
  ]);

  await run(answers);
}