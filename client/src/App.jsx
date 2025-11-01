import { Route, Routes } from 'react-router-dom';

import Home from './components/home/Home';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Register from './components/register/Register'
import Create from './components/event/create/Create';
import Events from './components/event/all-events/Events';
import EventDetails from './components/event/details/Detials';

function App() {

  return (
    <div>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/events' element={<Events/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/events/:eventId' element={<EventDetails/>}/>
        </Routes>
        
    </div>
  )
}

export default App
