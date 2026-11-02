import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("schemeUser"));
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState(() => localStorage.getItem("schemeToken"));

  const login = (userData, tokenValue) => {
    localStorage.setItem("schemeUser", JSON.stringify(userData));
    localStorage.setItem("schemeToken", tokenValue);
    setUser(userData);
    setToken(tokenValue);
  };

  const logout = () => {
    localStorage.removeItem("schemeUser");
    localStorage.removeItem("schemeToken");
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);