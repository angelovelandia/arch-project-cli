import fs from 'fs-extra';
import path from 'path';

export async function createRoutes(projectPath, includeAuth = false) {
  const routesDir = path.join(projectPath, 'src/routes');

  // src/routes/out/index.jsx
  const contentOut = `
export default function OutHome() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">Home Pública</h1>
      <p>Bienvenido al sitio público.</p>
    </div>
  );
}
`;

  // src/routes/in/index.jsx
  const contentIn = `
export default function InHome() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">Área Privada</h1>
      <p>Bienvenido, estás autenticado.</p>
    </div>
  );
}
`;

  // src/routes/index.jsx
  const contentRouterWithAuth = `
import { createBrowserRouter } from "react-router-dom";
import OutHome from "./out";
import InHome from "./in";
import { useAuth } from "../context/AuthContext";

const useAppRouter = () => {
  const { isAuthenticated } = useAuth();

  const routes = [
    {
      path: "/",
      element: <OutHome />,
    },
  ];

  if (isAuthenticated) {
    routes.push({
      path: "/auth",
      element: <InHome />,
    });
  }

  return createBrowserRouter(routes);
};

export default useAppRouter;
`;

  // src/routes/index.jsx
  const contentRouterWithoutAuth = `
import { createBrowserRouter } from "react-router-dom";
import OutHome from "./out";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OutHome />,
  }
]);

export default router;
`;

  await fs.ensureDir(path.join(routesDir, 'in'));
  await fs.ensureDir(path.join(routesDir, 'out'));

  await fs.writeFile(path.join(routesDir, 'in/index.jsx'), contentIn.trimStart());
  await fs.writeFile(path.join(routesDir, 'out/index.jsx'), contentOut.trimStart());

  const routerContent = includeAuth ? contentRouterWithAuth : contentRouterWithoutAuth;
  await fs.writeFile(path.join(routesDir, 'index.jsx'), routerContent.trimStart());
}
