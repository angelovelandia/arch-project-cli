import chalk from 'chalk';

export const logger = {
  info: (msg) => console.log(chalk.cyan(`ℹ️  ${msg}`)),
  success: (msg) => console.log(chalk.green(`✅  ${msg}`)),
  warn: (msg) => console.warn(chalk.yellow(`⚠️  ${msg}`)),
  error: (msg) => console.error(chalk.red(`❌  ${msg}`)),
  title: (msg) => console.log(chalk.bold.magenta(`\n🔧  ${msg}`)),
};
