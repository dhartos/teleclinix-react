import React, { useEffect, useState } from 'react';
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
import RegisterPageDr from './pages/Doctor/RegisterPageDr/RegisterPageDr'
import DashboardDr from './pages/Doctor/DashboardDr/DashboardDr'

const App = () => {
    return (
        <Router>
            <Layout />
        </Router>
    );
};

function Layout() {
    const location = useLocation();
    // const [login, setLogin] = useState(false)
    const [login, setLogin] = useState(() => {
        return JSON.parse(localStorage.getItem('login')) || false;
    });

    useEffect(() => {
        localStorage.setItem('login', JSON.stringify(login));
    }, [login]);

    const authRoutes = ['/', '/authentication/register', '/authentication/verify', '/authentication/register-doctor'];

    if (login && authRoutes.includes(location.pathname)) {
        return <Navigate to="/patient-dashboard" replace />;
    }

    if (!login && !authRoutes.includes(location.pathname)) {
        return <Navigate to="/" />;
    }

    const shouldShowSidebar = !authRoutes.includes(location.pathname);

    return (
        <div className='d-flex'>
            {login && shouldShowSidebar && <SideBarPatient setLogin={setLogin} />}
            <Routes>
                <Route path='/' element={<LoginPage setLogin={setLogin} />} />
                <Route path='/authentication/register' element={<RegisterPage />} />
                <Route path='/authentication/verify' element={<VerifyPage />} />
                <Route path='/authentication/register-doctor' element={<RegisterPageDr />} />
                <Route path='/patient-dashboard' element={<PatientDashboard />} />
                <Route path='/schedule-patient' element={<SchedulePatient />} />
                <Route path='/chatbox-patient' element={<Chatbox />} />
                <Route path='/videobox-patient' element={<Videobox />} />
                <Route path='/dashboard-doctor' element={<DashboardDr />} />
            </Routes>
        </div>
    )
}

export default App;