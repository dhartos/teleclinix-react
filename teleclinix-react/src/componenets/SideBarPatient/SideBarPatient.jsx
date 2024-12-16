import React from "react";


//style
import './SideBarPatient.css'

function SideBarPatient () {
    return(
        <div className="container-fluid p-0">
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
                        <img src="" alt="icon" />
                        <p>My Dashboard</p>
                    </div>
                    <div className="menulist d-flex">
                        <img src="" alt="icon" />
                        <p>Doctors</p>
                    </div>
                    <div className="menulist d-flex">
                        <img src="" alt="icon" />
                        <p>Appointments</p>
                    </div>
                    <div className="menulist d-flex">
                        <img src="" alt="icon" />
                        <p>Message/Chatroom</p>
                    </div>
                    <div className="menulist d-flex">
                        <img src="" alt="icon" />
                        <p>Communities</p>
                    </div>
                    <div className="menulist d-flex">
                        <img src="" alt="icon" />
                        <p>Payments Record</p>
                    </div>
                    <div className="menulist d-flex">
                        <img src="" alt="icon" />
                        <p>Profile</p>
                    </div>
                </div>
                <div className="bottommenu">
                <div className="menulist d-flex">
                        <img src="" alt="icon" />
                        <p>Settings</p>
                    </div>
                    <div className="menulist d-flex">
                        <img src="" alt="icon" />
                        <p>Help Center</p>
                    </div>
                    <div className="menulist d-flex">
                        <img src="" alt="icon" />
                        <p>Sign-Out</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBarPatient