import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './App.css'

import LoginPage from './pages/Auth/LoginPage/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage/RegisterPage';
import Header from './componenets/Header/Header';
import PatientDashboard from './pages/PatientDashboard/PatientDashboard'


function App() {

 return (
  <Router>
  <Routes>
  {/* Authentication Routes */}
  {/* <Route path='/authentication/login' element={<LoginPage setLogin={setLogin} />} /> */}
  <Route path='/authentication/register' element={<RegisterPage />} />
  <Route path='/patientdashboard' element={<PatientDashboard />}/>
  </Routes>
  </Router>
 )
}

export default App;
