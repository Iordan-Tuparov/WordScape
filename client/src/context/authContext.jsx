import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage("auth", {});
  const navigate = useNavigate();

  const userRegister = (user) => {
    setAuth(user);
  };

  const userLogin = (user) => {
    setAuth(user);
  };

  const userLogout = () => {
    setAuth({});
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user: auth,
        userRegister,
        userLogin,
        userLogout,
        isAuthenticated: !!auth.accessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
