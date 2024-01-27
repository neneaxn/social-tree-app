import { Route, Routes } from 'react-router-dom';

import Home from './components/home/Home';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Events from './components/event/all-events/Events';

function App() {

  return (
    <div>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/events' element={<Events/>}/>
        </Routes>
        
        <Login/>
        
    </div>
  )
}

export default App
