import React from "react";
import { Link } from "react-router-dom";

//style
import './PatientDashboard.css'
import SideBarPatient from '../../componenets/SideBarPatient/SideBarPatient'

function PatientDashboard () {

    return (
        <div className="container-fluid p-0">
            <div className="">
            <div className="dashboard d-flex flex-wrap justify-content-between align-items-center">
                <SideBarPatient/>
                <div className="leftdash m-3">
                    <div className=" top-leftdash mb-3 d-flex flex-wrap justify-content-center align-items-center">
                        <div className="topright-leftdash">
                            <div className="row1 d-flex">
                                <img src="" alt="dr image" />
                                <div className="row1-text">
                                    <h3 className="fw-bold">Hi No Trouble ; to be generated</h3>
                                    <p>Find a Doctor and make an appointment Online</p>
                                    <div className="goals">
                                        <h2 className="p-2">Keep these goals in mind</h2>
                                        <div className="daily p-2">
                                            <ul>
                                                <li>Improve wellness and mood</li>
                                                <li>Exercise twice a day</li>
                                                <li>Eat healthier</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="date">
                                <h3>Date: November 03, 2024</h3>
                            </div>
                            <div className="booking d-flex">
                                <div className="booking-text m-3">
                                    <h3>Book an Appointment</h3>
                                    <p className="text-wrap">Book your medical appointment conveniently and quickly through our user friendly web app. <br />
                                    Schedule your appointment now and get the care you need, when you need it.</p>
                                    <Link to='/schedule-patient'>
                                    <button type="submit" onClick={'handleSchedule'}>Schedule an appointment</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="topleft-leftdash">
                            <div className="column1">
                                <div className="dp">
                                    <img src="" alt="patient image or dummy" />
                                </div>
                                <div className="name">
                                    <h3>No Trouble ; to be generated</h3>
                                    <p>Patient; to be generated</p>
                                </div>
                                <div className="details">
                                    <p>Details</p>
                                    <div className="horizontal line"></div>
                                    <div className="info">
                                        <p>Age</p>
                                    </div>
                                    <div className="info">
                                        <p>Blood Group</p>
                                    </div>
                                    <div className="info">
                                        <p>Height (m)</p>
                                    </div>
                                    <div className="info">
                                        <p>Weight (kg)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="column2">
                                <h3>MY APPOINTMENTS</h3>
                                <div className="appointment">
                                    <p>No appointments at the moment(You have 5 appointmnet); auto generate</p>
                                    <div className="scheduled-appointment">
                                        <p>Schedule appointment/consultation will appear here; auto generate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="patient-activity d-flex flex-wrap justify-content-between">
                        <div className="count d-flex">
                            <div className="countdp">
                                <img src="" alt="image rep doctor" />
                            </div>
                            <div className="count-text">
                                <h1>15</h1>
                                <p>Available Doctors</p>
                            </div>
                        </div>
                        <div className="count d-flex">
                            <div className="countdp">
                                <img src="" alt="image rep patients" />
                            </div>
                            <div className="count-text">
                                <h1>15</h1>
                                <p>Patients in Session</p>
                            </div>
                        </div>
                        <div className="count d-flex">
                            <div className="countdp">
                                <img src="" alt="image rep patients" />
                            </div>
                            <div className="count-text">
                                <h1>15</h1>
                                <p>Current Patient Count</p>
                            </div>
                        </div>
                    </div>
                    <div className="activity d-flex flex-wrap justify-content-between">
                        <div className="count1">
                            <h3>My Activity</h3>
                            <div className="countbox">
                            <div className="count-text">
                                <p>Login Sessions displays here to ensure account privacy</p>
                            </div>
                            </div>
                        </div>
                        <div className="count1">
                            <h3>Join a Community Today</h3>
                            <div className="countbox">
                            <div className="count-text">
                                <p>Ladies Wings</p>
                                <button type="submit">Join</button>
                            </div>
                            <div className="count-text">
                                <p>Ladies Wings</p>
                                <button type="submit">Join</button>
                            </div>
                            </div>
                        </div>
                        <div className="count1">
                            <h3>Doctors</h3>
                            <div className="countbox">
                            <div className="counttext">
                            <div className="countdp">
                                <img src="" alt="doctor image" />
                            </div>
                            <div className="count-text">
                                <h3>Dr Enitan</h3>
                                <p>General Doctor</p>
                            </div>
                        </div>
                        <div className="counttext">
                            <div className="countdp">
                                <img src="" alt="doctor image" />
                            </div>
                            <div className="count-text">
                                <h3>Dr Enitan</h3>
                                <p>General Doctor</p>
                            </div>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                </div>
    )
}

export default PatientDashboard