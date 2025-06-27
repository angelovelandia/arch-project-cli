// utils/writeMain.js
import fs from 'fs-extra';
import path from 'path';

export async function createMainFile(projectPath, includeAuth, includeRoutes) {
  let imports = [`import React from "react";`, `import ReactDOM from "react-dom/client";`];
  let bodyStart = `ReactDOM.createRoot(document.getElementById("root")).render(\n  <React.StrictMode>\n`;
  let bodyEnd = `  </React.StrictMode>\n);`;

  if (includeRoutes) {
    imports.push(`import { RouterProvider } from "react-router-dom";`);
    if (includeAuth) {
      imports.push(`import useAppRouter from "./routes";`);
      imports.push(`import { AuthProvider } from "./context/AuthContext";`);
      bodyStart += `    <AuthProvider>\n      <RouterProvider router={useAppRouter()} />\n`;
      bodyEnd = `    </AuthProvider>\n${bodyEnd}`;
    } else {
      imports.push(`import router from "./routes";`);
      bodyStart += `    <RouterProvider router={router} />\n`;
    }
  } else {
    bodyStart += `    <h1>¡Proyecto listo!</h1>\n`;
  }

  const content = `${imports.join('\n')}\n\n${bodyStart}${bodyEnd}\n`;

  await fs.outputFile(path.join(projectPath, 'src/main.jsx'), content);
}
