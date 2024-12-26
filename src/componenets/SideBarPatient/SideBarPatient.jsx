import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


//style
import './SideBarPatient.css'
import teleclinix from '../../../src/assets/teleclinixlogo.svg'

function SideBarPatient() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768); // Adjust breakpoint as needed
        };

        // Set initial value
        handleResize();

        // Listen for resize events
        window.addEventListener("resize", handleResize);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
            {isSmallScreen && (
                <span
                    className={`toggle-btn ${isOpen ? "close-icon" : "hamburger-icon"}`}
                    onClick={toggleSidebar}
                >
                    {isOpen ? "✖" : "☰"}
                </span>
            )}
            <div className={`side ${isOpen || !isSmallScreen ? "visible" : ""}`}>
                <div className="logo ps-2">
                    <img src={teleclinix} alt="logo" width={90} height={90} />
                </div>
                <div className="info m-3">
                    <div className="topmenu">
                        <div className="user m-5">
                            <div>
                                <img src={teleclinix} alt="user" />
                            </div>
                            {/* <h7 className="">No Trouble</h7> */}
                            <p>Patient</p>
                        </div>
                        <div className="menu m-4">
                            <NavLink to='/patient-dashboard'> <div className="menulist d-flex">
                                <p>🏠 <span> My Dashboard</span></p>
                            </div>
                            </NavLink>
                            <div className="menulist d-flex">
                                <p> 🩺 <span>Doctors</span></p>
                            </div>
                            <div className="menulist d-flex">
                                <p>📅 <span>Appointments</span></p>
                            </div>
                            <NavLink to='/chatbox-patient'>
                                <div className="menulist d-flex">
                                    <p>💬 <span>Message/Chatroom</span></p>
                                </div>
                            </NavLink>
                            <div className="menulist d-flex">
                                {/* <img src="" alt="icon" /> */}
                                <p>👥 <span>Communities</span></p>
                            </div>
                            <div className="menulist d-flex">
                                {/* <img src="" alt="icon" /> */}
                                <p>💳 <span>Payments Record</span></p>
                            </div>
                            <div className="menulist d-flex">
                                {/* <img src="" alt="icon" /> */}
                                <p>👤 <span>Profile</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="bottommenu">
                        <div className="menulist d-flex">
                            {/* <img src="" alt="icon" /> */}
                            <p>⚙️ <span>Settings</span></p>
                        </div>
                        <div className="menulist d-flex">
                            {/* <img src="" alt="icon" /> */}
                            <p>❓ <span>Help Center</span></p>
                        </div>
                        <div className="menulist d-flex">
                            {/* <img src="" alt="icon" /> */}
                            <p>↩️ <span>Sign-Out</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBarPatient