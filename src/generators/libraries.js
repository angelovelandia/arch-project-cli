import { execSync } from 'child_process';

export async function installLibraries(projectPath) {
  execSync(`npm install chalk@5.3.0 inquirer@9.0.0 fs-extra@11.1.1`, {
    cwd: projectPath,
    stdio: 'inherit'
  });
}
