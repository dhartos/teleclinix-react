import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './App.css'

import LoginPage from './pages/Auth/LoginPage/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage/RegisterPage';
import Header from './componenets/Header/Header';


function App() {



 return (
  <Routes>
  {/* Authentication Routes */}
  <Route path='/authentication/login' element={<LoginPage setLogin={setLogin} />} />
        <Route path='/authentication/register' element={<RegisterPage />} />
  </Routes>
 )
}

export default App
