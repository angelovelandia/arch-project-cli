export const atomicStructure = {
  folders: [
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
  ],
  files: [
    {
      path: 'src/App.jsx',
      content: `export default function App() { return <h1>Hello World</h1>; }`
    },
    {
      path: 'src/main.jsx',
      content: `
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
      `.trim()
    },
    {
      path: 'index.html',
      content: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Atomic Vite App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
      `.trim()
    },
    {
      path: 'src/index.css',
      content: `@tailwind base;\n@tailwind components;\n@tailwind utilities;`
    }
  ]
};
