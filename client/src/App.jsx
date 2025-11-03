import { Route, Routes } from 'react-router-dom';

import Home from './components/home/Home';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Register from './components/register/Register'
import Create from './components/event/create/Create';
import Events from './components/event/all-events/Events';
import EventDetails from './components/event/details/Detials';
import { useState } from 'react';
import AuthContext from './contexts/authContext';

function App() {
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = (values) => {
    console.log(values);
    
  }

  return (
    <AuthContext>
    <div>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/events' element={<Events/>}/>
            <Route path='/login' element={<Login loginSubmitHandler={loginSubmitHandler}/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/events/:eventId' element={<EventDetails/>}/>
        </Routes> 
    </div>
    </AuthContext>
  )
}

export default App
