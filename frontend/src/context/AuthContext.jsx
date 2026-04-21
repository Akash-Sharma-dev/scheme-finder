import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("schemeUser")) || null
  );
  const [token, setToken] = useState(localStorage.getItem("schemeToken") || "");

  useEffect(() => {
    if (user) {
      localStorage.setItem("schemeUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("schemeUser");
    }

    if (token) {
      localStorage.setItem("schemeToken", token);
    } else {
      localStorage.removeItem("schemeToken");
    }
  }, [user, token]);

  const login = (userData, userToken) => {
    setUser(userData);
    setToken(userToken);
  };

  const logout = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("schemeUser");
    localStorage.removeItem("schemeToken");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);