import minimist from 'minimist';
import { run } from './core/runner.js';
import { showMenu } from './core/interactiveMenu.js';

const args = minimist(process.argv.slice(2));

if (Object.keys(args).length > 1) {
  run(args);
} else {
  showMenu();
}