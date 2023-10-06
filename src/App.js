import React from 'react'
import Register from './pages/auth/register/Register';
import Login from './pages/auth/Login/Login';
import {Routes,Route} from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import Main from './pages/Main/Main';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </div>
  )
}

export default App