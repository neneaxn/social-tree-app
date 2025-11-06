import { createContext } from "react";
import { useNavigate } from 'react-router-dom';
import * as authService from '../services/authService'
import Path from "../lib/paths";
import useLocalStorageState from "../hooks/useLocalStorageState";

const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useLocalStorageState('auth', {});

    const loginSubmitHandler = async (values) => {
      const result = await authService.login(values.email, values.password)
      setAuth(result);
      localStorage.setItem('accessToken', result.accessToken);
      navigate(Path.Home);
    };

    const registerSubmitHandler = async (values) => {
      const result = await authService.register(values.email, values.password);
      setAuth(result);
      localStorage.setItem('accessToken', result.accessToken);
      navigate(Path.Home);
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    }

    const values = {
      loginSubmitHandler,
      registerSubmitHandler,
      logoutHandler,
      email: auth.email,
      userId: auth._id,
      isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;