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
      const email = values.email.trim();
      const password = values.password;

      if (!email || !password) {
          const error = "Both email and password fields are required.";
          alert(error);
          throw new Error(error);
      }

      try {
          const result = await authService.login(email, password)
          setAuth(result);
          localStorage.setItem('accessToken', result.accessToken);
          navigate(Path.Home);
      } catch(err) {
          alert(err.message);
          throw new Error(err.message)
      }

    };

    const registerSubmitHandler = async (values) => {

      if (values.password !== values['confirm-password']) {
            const passDontMatch = "Passwords don't match.";
            alert(`Registration failed: ${passDontMatch}`)
            throw new Error(passDontMatch);
      }

      try {
          const result = await authService.register(values.email, values.password);
          setAuth(result);
          localStorage.setItem('accessToken', result.accessToken);
          navigate(Path.Home);
      } catch(err) {
          alert(`Registration failed: ${err.message}`); 
            throw err;
      }

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