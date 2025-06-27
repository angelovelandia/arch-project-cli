import fs from 'fs-extra';
import path from 'path';

export async function createAuthContext(projectPath) {
  const authContextPath = path.join(projectPath, 'src/context/AuthContext.jsx');

  const content = `import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
`;

  await fs.outputFile(authContextPath, content);
}
