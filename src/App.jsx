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

const App = () => {
    return (
        <Router>
            <Layout />
        </Router>
    );
};

function Layout() {
    const location = useLocation();
    const [login, setLogin] = useState(false)

    const authRoutes = ['/', '/authentication/register', '/authentication/verify'];

    if (login && authRoutes.includes(location.pathname)) {
        return <Navigate to="/patient-dashboard" replace />;
    }

    if (!login && !authRoutes.includes(location.pathname)) {
        return <Navigate to="/" replace />;
    }

    const shouldShowSidebar = !authRoutes.includes(location.pathname);

    return (
        <div className='d-flex'>
            {shouldShowSidebar && <SideBarPatient setLogin={setLogin} />}
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
    )
}

export default App;