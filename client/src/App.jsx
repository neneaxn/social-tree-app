import { Route, Routes } from 'react-router-dom';
import { AuthProvider} from './contexts/authContext';

import Home from './components/home/Home';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Register from './components/register/Register'
import Create from './components/event/create/Create';
import Events from './components/event/all-events/Events';
import EventDetails from './components/event/details/Detials';
import Logout from './components/logout/Logout';

import Path from './lib/paths';

function App() {

  return (
    <AuthProvider>
    <div>
        <Header/>
        <Routes>
            <Route path={Path.Home} element={<Home/>}/>
            <Route path={Path.AllEvents} element={<Events/>}/>
            <Route path={Path.Login} element={<Login/>}/>
            <Route path={Path.Register} element={<Register/>}/>
            <Route path={Path.CreateEvent} element={<Create/>}/>
            <Route path={Path.EventDetails} element={<EventDetails/>}/>
            <Route path={Path.Logout} element={<Logout/>}/>
        </Routes> 
    </div>
    </AuthProvider>
  )
}

export default App
