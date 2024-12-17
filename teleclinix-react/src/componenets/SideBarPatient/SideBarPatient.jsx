import React from "react";
import { Link } from "react-router-dom";


//style
import './SideBarPatient.css'

function SideBarPatient () {
    return(
        <div className="container-fluid p-0">
            <div className="side">
            <div className="logo">
                <img src="" alt="logo" />
            </div>
            <div className="info m-2">
                <div className="user">
                    <img src="" alt="user image or dummy" />
                    <h3>No Trouble; to be auto generated</h3>
                    <p>Patient</p>
                </div>
                <div className="menu">
                    <div className="menulist d-flex">
                        {/* <img src="🏠" alt="icon" /> */}
                        <p>🏠 <span> My Dashboard</span></p>
                    </div>
                    <div className="menulist d-flex">
                        {/* <img src="" alt="icon" /> */}
                        <p> 🩺 <span>Doctors</span></p>
                    </div>
                    <div className="menulist d-flex">
                        {/* <img src="" alt="icon" /> */}
                        <p>📅 <span>Appointments</span></p>
                    </div>
                    <div className="menulist d-flex">
                        {/* <img src="" alt="icon" /> */}
                        <p>💬 <span>Message/Chatroom</span></p>
                    </div>
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