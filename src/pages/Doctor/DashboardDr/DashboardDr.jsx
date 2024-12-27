import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";

//style
import './DashboardDr.css'
import "react-calendar/dist/Calendar.css"; 

const DashboardDr = () => {

    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate) => {
      setDate(newDate);
      console.log("Selected Date:", newDate);
    };
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    
    
    useEffect (() => {
        const interval = setInterval(() => {
          setCurrentDateTime(new Date());
        }, 1000);
        return () => clearInterval(interval); 
    }, []);

    const data = [
        {
          name: "John Doe",
          date: "2024-12-20",
          time: "10:00 AM",
          appointments: 2,
          healthIssue: "Flu",
          status: "Completed",
        },
        {
          name: "Jane Smith",
          date: "2024-12-21",
          time: "11:30 AM",
          appointments: 1,
          healthIssue: "Migraine",
          status: "Pending",
        },
        {
          name: "Mark Taylor",
          date: "2024-12-22",
          time: "2:00 PM",
          appointments: 3,
          healthIssue: "Back Pain",
          status: "In Progress",
        },
      ];

    return (
        <div className="container-fluid p-0">
            <div className="row">
            <div className="dashboard align-items-center">
            <div className="patient-activity d-flex flex-wrap justify-content-between m-5">
                        <div className="count mb-3 d-flex">
                            <div className="countdp">
                                <img src="" alt="img" className=" pic my-3" />
                            </div>
                            <div className="count-text p-2">
                                <h3>15</h3>
                                <p>Appointments</p>
                            </div>
                        </div>
                        <div className="countp mb-3 d-flex">
                            <div className="countdp">
                                <img src="" alt="img" className="pic my-3" />
                            </div>
                            <div className="count-text p-2">
                                <h3>15</h3>
                                <p>Patients</p>
                            </div>
                        </div>
                        <div className="countpc mb-3 d-flex">
                            <div className="countdp">
                                <img src="" alt="img" className="pic my-3" />
                            </div>
                            <div className="count-text p-2">
                                <h3>15</h3>
                                <p>Consultation <span>(hrs)</span></p>
                            </div>
                        </div>
                    </div>
                <div className="activity d-flex flex-wrap justify-content-center m-5">
                <div className="calendar-container">
                <h3>Calendar</h3>
                <Calendar onChange={handleDateChange} value={date} />
                <p>Selected Date: {date.toDateString()}</p>
                </div>
            <div className="count1">
                <h3>My Activity</h3>
                <div className="countbox">
                    <div className="count-text1 m-3 p-1">
                        <p>Login Sessions displays here to ensure account privacy</p>
                    </div>
                </div>
            </div>
            <div className="count1">
                <h3>Doctor List</h3>
                <div className="countbox">
                    <div className="count-text1 mb-2">
                        <p3>Active status</p3>
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
    <div className="leftdash m-5">
    <div className="d-flex ">
      <h3>Today's date and time:</h3>
      <p className="p-1">{currentDateTime.toLocaleString()}</p>
    </div>

        <div className="appointment">

            <div className="d-flex justify-content-between m-2">
            <h3 className="m-2">Upcoming Appointments</h3>
            <p>View all</p>
            </div>

             <div className="table-responsive m-1">
                <table className="table table-bordered" border="1" style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
                    <thead>
                    <tr>
                        <th>Patient Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Appointments</th>
                        <th>Health Issue</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                        <td>{row.name}</td>
                        <td>{row.date}</td>
                        <td>{row.time}</td>
                        <td>{row.appointments}</td>
                        <td>{row.healthIssue}</td>
                        <td>{row.status}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
                </div>
                </div>
                <div className="last m-5">
                    <h1>Health is wealth</h1>
                </div>
            </div>
        </div>
        </div>
    )
}

export default DashboardDr