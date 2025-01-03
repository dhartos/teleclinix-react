import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";

//style
import './PatientDashboard.css'
import "react-datepicker/dist/react-datepicker.css"; 
import topleft from '../../../src/assets/topleft.svg';
import bookdp from '../../../src/assets/bookdp.svg';

const PatientDashboard = () => {

    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div className="container-fluid p-0">
            <div className="dashboard m-5 align-items-center">
                <div className="">
                    <div className=" top-leftdash mb-3 d-flex flex-wrap justify-content-center">
                        <div className="topright-leftdash">
                            <div className="row1 d-flex justify-content-between ">
                                <div className="image-container">
                                    <img src={topleft} height={'250px'} alt="dr image" className="pl-2" />
                                </div>
                                <div className="row1-text">
                                    <h3 className="m-2">Hi No Trouble ; to be generated</h3>
                                    <p className="p-2">Find a Doctor and make an appointment Online</p>
                                    <div className="goals">
                                        <h3 className="p-2">Keep these goals in mind</h3>
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
                            <div className="date mt-3">
                            <h1>Today's Date</h1>
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                placeholderText="Select a date"
                            />
                            {selectedDate && <p>Selected Date: {selectedDate.toDateString()}</p>}
                            </div>
                            <div className="booking mt-3 d-flex">
                                <div className="booking-text m-3">
                                    <h3>Book an Appointment</h3>
                                    <p className="text-wrap mt-3 p-2">Book your medical appointment conveniently and quickly through our user friendly web app. <br />
                                        Schedule your appointment now and get the care you need, when you need it.</p>
                                    <NavLink to='/schedule-patient'>
                                        <button type="submit">Schedule an appointment</button>
                                    </NavLink>
                                </div>
                                <div className="image-containe">
                                    <img src={bookdp} alt="dr image" width={'150px'} height={'240px'} />
                                </div>
                            </div>
                        </div>
                        <div className="topleft-leftdash">
                            <div className="column1 ">
                                <div className="dp m-4">
                                    <div className="name align-items-center">
                                        <h3>No Trouble ; to be generated</h3>
                                        <p>Patient; to be generated</p>
                                    </div>
                                </div>
                                <div className="details m-2">
                                    <h4>Details</h4>
                                    <div className="det d-flex justify-content-between mb-2">
                                        <p className="">Age</p>
                                        <input type="number" placeholder="0yrs"
                                        id="age" className="p-1 w-50" />
                                    </div>
                                    <div className="det d-flex justify-content-between">
                                        <p>Blood Group</p>
                                        <input type="text" placeholder="O+" className="p-1 w-50" />
                                    </div>
                                    <div className="det d-flex justify-content-between">
                                        <p>Height (m)</p>
                                        <input type="text" placeholder="0m" className="p-1 w-50" />
                                    </div>
                                    <div className="det d-flex justify-content-between">
                                        <p>Weight (kg)</p>
                                        <input type="text" placeholder="Okg" className="p-1 w-50" />
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="m-2 w-25">Save</button>
                                </div>
                            </div>
                            <div className="column2 mt-3">
                                <h3>MY APPOINTMENTS</h3>
                                <div className="appointment ">
                                    <p className="p-2">No appointments at the moment (You have 5 appointmnet); auto generate</p>
                                    <div className="scheduled-appointment m-2">
                                        <p className="p-2">Schedule appointment/consultation will appear here; auto generate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="patient-activity d-flex flex-wrap justify-content-between m-5">
                        <div className="count mb-3 d-flex">
                            <div className="countdp">
                                <img src="" alt="img" className=" pic my-3" />
                            </div>
                            <div className="count-text p-2">
                                <h3>15</h3>
                                <p>Available Doctors</p>
                            </div>
                        </div>
                        <div className="countp mb-3 d-flex">
                            <div className="countdp">
                                <img src="" alt="img" className="pic my-3" />
                            </div>
                            <div className="count-text p-2">
                                <h3>15</h3>
                                <p>Patients in Session</p>
                            </div>
                        </div>
                        <div className="countpc mb-3 d-flex">
                            <div className="countdp">
                                <img src="" alt="img" className="pic my-3" />
                            </div>
                            <div className="count-text p-2">
                                <h3>15</h3>
                                <p>Current Patient Count</p>
                            </div>
                        </div>
                    </div>
                    <div className="activity d-flex flex-wrap justify-content-between mt-5">
                        <div className="count1">
                            <h3>My Activity</h3>
                            <div className="countbox">
                                <div className="count-text1 m-4 p-1">
                                    <p>Login Sessions displays here to ensure account privacy</p>
                                </div>
                            </div>
                        </div>
                        <div className="count1">
                            <h3>Join a Community Today</h3>
                            <div className="countbox">
                                <div className="count-text1 m-4 p-1">
                                    <p>Ladies Wings</p>
                                    <button type="submit" className="mt-5">Join</button>
                                </div>
                            </div>
                        </div>
                        <div className="count1">
                            <h3>Doctors</h3>
                            <div className="countbox">
                                <div className="count-text1 mb-2">
                                    <div className="countdp">
                                        <img src="" alt="doctor image" />
                                    </div>
                                    <div className="count-text m-4 p-1">
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
    )
}

export default PatientDashboard