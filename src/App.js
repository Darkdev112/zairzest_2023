import React from 'react'
import Register from './pages/auth/register/Register';
import Login from './pages/auth/Login/Login';
import {Routes,Route} from "react-router-dom";
import Profile from './pages/profile/Profile';
import Event from './pages/event/Event';
import StaticEvents from './pages/static_events/StaticEvents'
import "react-toastify/dist/ReactToastify.css";
import Main from './pages/Main/Main';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Main />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path='/tech-events' element={<Event/>} />
        <Route path='/events' element={<StaticEvents/>} />

      </Routes>
    
    </div>
  )
}

export default App