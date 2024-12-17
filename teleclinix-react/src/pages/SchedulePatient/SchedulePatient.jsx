import React from "react";

//style
import './SchedulePatient.css'
import SideBarPatient from "../../componenets/SideBarPatient/SideBarPatient";

function SchedulePatient () {

    return (
        <div className="container-fluid p-0">
            <div className="main d-flex">
            <SideBarPatient/>
            <div className="book">
        <h3>Book an Appointment</h3>
        <div className="appointment-header">
          <div className="header-card">
            <p>Doctors</p>
            <h3>15</h3>
            <a href="#">View all</a>
          </div>
        </div>
  
        <div className="appointment-form d-flex">
          <div className="left-section">
            <div className="form-group p-2">
              <label>Reason for Appointment</label>
              <select>
                <option>Teleconsulting Only</option>
                <option>Yearly Appointment</option>
                <option>Medication Advice</option>
              </select>
            </div>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Name"/>
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="text" placeholder="Consultation Only" disabled/>
            </div>
            <div className="form-group">
              <label>Show Times For</label>
              <select>
                <option>All Practitioners</option>
                <option>General Doctor</option>
              </select>
            </div>
            <div className="form-group">
              <label>Speciality</label>
              <select>
                <option>All</option>
              </select>
            </div>
            <div className="form-group">
              <label>Underlying Ailment</label>
              <input type="text" placeholder="Kindly type out"/>
            </div>
            <div className="form-group">
              <label>Last Medication Used</label>
              <input type="text" placeholder="Kindly type out"/>
            </div>
            <div className="form-group">
              <label>Gender</label>
              <div className="radio-group d-flex">
                <label><input type="radio" name="gender" value="All"/> All</label>
                <label><input type="radio" name="gender" value="Female"/> Female</label>
                <label><input type="radio" name="gender" value="Male"/> Male</label>
              </div>
            </div>
          </div>
  
          <div className="right-section">
            <div className="form-group">
              <label>Doctors</label>
              <select>
                <option>Select</option>
              </select>
            </div>
            <div className="form-group">
              <label>Date</label>
              <input type="text" placeholder="Type date (dd/mm/yy)"/>
              <div className="date-options">
                <p>Kindly select your preferred date from the available date.</p>
                <button>Today</button>
                <button>Tomorrow</button>
                <button>23/11/2024</button>
                <button>24/11/2024</button>
              </div>
            </div>
            <div className="form-group">
              <label>Time</label>
              <div className="time-options">
                <p>Kindly select your preferred time from the available time</p>
                <button>1:00pm</button>
                <button>3:00pm</button>
                <button>5:00pm</button>
                <button>7:00pm</button>
                <button>8:00pm</button>
                <button>11:00am</button>
              </div>
            </div>
          </div>
        </div>
  
        <div className="form-actions">
          <button className="cancel">Cancel</button>
          <button className="book">Book</button>
        </div>
      </div>
        </div>
        </div>
    )
}

export default SchedulePatient