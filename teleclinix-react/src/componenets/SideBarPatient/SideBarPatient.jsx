import React from "react";
import { NavLink } from "react-router-dom";


//style
import './SideBarPatient.css'
import teleclinix from '../../../src/assets/teleclinixlogo.svg'

function SideBarPatient () {
    return(
        <div className="containe p-0">
            <div className="side p-3" >
            <div className="logo mt-3">
                <img src={teleclinix} alt="logo" 
                width={90} 
                height={90} />
            </div>
            <div className="info m-2">
                <div className="user p-3 m-5">
                    <img src="" alt="user image or dummy" />
                    <h5 className="mt-3">No Trouble; to be auto generated</h5>
                    <p>Patient</p>
                </div>
                <div className="menu">
                   <NavLink to='/'> <div className="menulist d-flex">
                        {/* <img src="" alt="icon" /> */}
                        <p>🏠 <span> My Dashboard</span></p>
                    </div>
                    </NavLink>
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