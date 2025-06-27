export const MESSAGES = {
  welcome: `🚀 Welcome to ${"create-project-cli"}!
This wizard will help you generate a new React project with the architecture of your choice.`,
  missingProjectName: 'You must specify the project name with the parameter --name',
  invalidArch: 'Architecture not supported. Currently only supported: --arch atomic',

  projectExists: (name) =>
    `A folder already exists with the name "${name}". Choose another name or delete the existing folder.`,

  creatingProject: (name) => `📦 Creating the project "${name}"...`,

  installingBase: '📦 Installing base dependencies for Atomic architecture...',

  settingUpStructure: '🏗️  Setting up project structure...',

  creatingAuthContext: '🔐 Adding authentication context...',

  creatingRoutes: '🧭 Adding basic protected and public routes...',

  installingLibraries: '📚 Installing optional libraries (mark --libraries)...',

  done: (name) => `🎉 Project "${name}" successfully created.

To start:
  cd ${name}
  npm run dev

Thank you for using me 🥵
`
};
