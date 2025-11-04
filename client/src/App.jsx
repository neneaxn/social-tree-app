import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import * as authService from '../../client/src/services/authService'

import Home from './components/home/Home';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Register from './components/register/Register'
import Create from './components/event/create/Create';
import Events from './components/event/all-events/Events';
import EventDetails from './components/event/details/Detials';
import AuthContext from './contexts/authContext';
import Path from './lib/paths';

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = async (values) => {
      const result = await authService.login(values.email, values.password)
      setAuth(result);
      navigate(Path.Home);
    };

    const registerSubmitHandler = async (values) => {
      const result = await authService.register(values.email, values.password);
      setAuth(result);
      navigate(Path.Home);
    }

    const values = {
      loginSubmitHandler,
      registerSubmitHandler,
      email: auth.email,
      isAuthenticated: !!auth.email,
    }

  return (
    <AuthContext.Provider value={values}>
    <div>
        <Header/>
        <Routes>
            <Route path={Path.Home} element={<Home/>}/>
            <Route path={Path.AllEvents} element={<Events/>}/>
            <Route path={Path.Login} element={<Login/>}/>
            <Route path={Path.Register} element={<Register/>}/>
            <Route path={Path.CreateEvent} element={<Create/>}/>
            <Route path={Path.EventDetails} element={<EventDetails/>}/>
        </Routes> 
    </div>
    </AuthContext.Provider>
  )
}

export default App
