import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

import SideBarPatient from './componenets/SideBarPatient/SideBarPatient';
import LoginPage from './pages/Auth/LoginPage/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage/RegisterPage';
// import Header from './componenets/Header/Header';
import PatientDashboard from './pages/PatientDashboard/PatientDashboard'
import SchedulePatient from './pages/SchedulePatient/SchedulePatient';
import Chatbox from './pages/Chatbox/Chatbox';
import Videobox from './pages/Videobox/Videobox'
import VerifyPage from './pages/Auth/VerifyPage/VerifyPage';


function App() {
    const [login, setLogin] = useState(false)

    return (
        <Router>
            <div className='d-flex'>
                <SideBarPatient />
                <Routes>
                    <Route path='/' element={<LoginPage setLogin={setLogin} />} />
                    <Route path='/authentication/register' element={<RegisterPage />} />
                    <Route path='/authentication/verify' element={<VerifyPage />} />
                    <Route path='/patient-dashboard' element={<PatientDashboard />} />
                    <Route path='/schedule-patient' element={<SchedulePatient />} />
                    <Route path='/chatbox-patient' element={<Chatbox />} />
                    <Route path='/videobox-patient' element={<Videobox />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;
