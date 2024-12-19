import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

import SideBarPatient from './componenets/SideBarPatient/SideBarPatient';
import LoginPage from './pages/Auth/LoginPage/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage/RegisterPage';
import Header from './componenets/Header/Header';
import PatientDashboard from './pages/PatientDashboard/PatientDashboard'
import SchedulePatient from './pages/SchedulePatient/SchedulePatient';


function App() {

    const [login, setLogin] = useState(false)
    
 return (
  <Router>
  <Routes>
  {/* Authentication Routes */}
  <Route path='/' element={<LoginPage setLogin={setLogin} />} />
  <Route path='/authentication/register' element={<RegisterPage />} />
  <Route path='/patient-dashboard' element={<PatientDashboard />}/>
  <Route path='/schedule-patient' element={<SchedulePatient />}/>
  </Routes>
  </Router>
 )
}

export default App;
