import React from "react";

//style
import './SchedulePatient.css'
import SideBarPatient from "../../componenets/SideBarPatient/SideBarPatient";

function SchedulePatient() {

    return (
        <div className="container-fluid p-0">
            <div className="main d-flex">
//             <SideBarPatient/>
            <div className="book m-5">
        <h3>Book an Appointment</h3>
        <div className="appointment-header mb-3 w-25">
          <div className="header-card p-3 d-flex justify-content-between align-items-center">
            <div className="">  
            <p>Doctors</p>
            <h3>15</h3>
            </div>
            <a href="#">View all</a>
          </div>
        </div>
  
        <div className="appointment-form d-flex justify-content-between">
          <div className="left-section">
            <div className="form-group p-2">
              <label>Reason for Appointment</label>
              <select className="p-2">
                <option>Teleconsulting Only</option>
                <option>Yearly Appointment</option>
                <option>Medication Advice</option>
              </select>
            </div>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Name" className="p-2" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="text" placeholder="Email address" className="p-2" disabled/>
            </div>
            <div className="form-group">
              <label>Show Times For</label>
              <select className="p-2">
                <option>All Practitioners</option>
                <option>General Doctor</option>
              </select>
            </div>
            <div className="form-group">
              <label>Speciality</label>
              <select className="p-2">
                <option>All</option>
              </select>
            </div>
            <div className="form-group">
              <label>Underlying Ailment</label>
              <input type="text" placeholder="Kindly type out" className="p-2"/>
            </div>
            <div className="form-group">
              <label>Last Medication Used <span>in the last 5hours</span></label>
              <input type="text" placeholder="Kindly type out" className="p-2"/>
            </div>
            <div className="form-group">
              <label>Gender</label>
              <div className="radio-group d-flex">
                <label><input type="radio" name="gender" value="All"/> All</label>
                <label><input type="radio" name="gender" value="Female"/> Female</label>
                <label><input type="radio" name="gender" value="Male"/> Male</label>
              </div>
              <a href="#">View all</a>
            </div>
          </div>

          <div className="appointment-form d-flex justify-content-between">
            <div className="left-section">
              <div className="form-group p-2">
                <label>Reason for Appointment</label>
                <select className="p-2">
                  <option>Teleconsulting Only</option>
                  <option>Yearly Appointment</option>
                  <option>Medication Advice</option>
                </select>
              </div>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Name" className="p-2" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="text" placeholder="Consultation Only" className="p-2" disabled />
              </div>
              <div className="form-group">
                <label>Show Times For</label>
                <select className="p-2">
                  <option>All Practitioners</option>
                  <option>General Doctor</option>
                </select>
              </div>
              <div className="form-group">
                <label>Speciality</label>
                <select className="p-2">
                  <option>All</option>
                </select>
              </div>
              <div className="form-group">
                <label>Underlying Ailment</label>
                <input type="text" placeholder="Kindly type out" className="p-2" />
              </div>
              <div className="form-group">
                <label>Last Medication Used <span>in the last 5hours</span></label>
                <input type="text" placeholder="Kindly type out" className="p-2" />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <div className="radio-group d-flex">
                  <label><input type="radio" name="gender" value="All" /> All</label>
                  <label><input type="radio" name="gender" value="Female" /> Female</label>
                  <label><input type="radio" name="gender" value="Male" /> Male</label>
                </div>
              </div>
            </div>

            <div className="right-section">
              <div className="form-group">
                <label>Doctors</label>
                <select className="p-2">
                  <option>Select</option>
                </select>
              </div>
              <div className="form-group">
                <label>Date</label>
                <input type="text" placeholder="Type date (dd/mm/yy)" className="p-2" />
                <div className="date-options">
                  <p className="mt-2">Kindly select your preferred date from the available date.</p>
                  <button className="p-2">Today</button>
                  <button className="p-2">Tomorrow</button>
                  <button className="p-2">23/11/2024</button>
                  <button className="p-2">24/11/2024</button>
                </div>
              </div>
              <div className="form-group">
                <label>Time</label>
                <div className="time-options">
                  <p className="mt-2">Kindly select your preferred time from the available time</p>
                  <button className="p-2">1:00pm</button>
                  <button className="p-2">3:00pm</button>
                  <button className="p-2">5:00pm</button>
                  <button className="p-2">7:00pm</button>
                  <button className="p-2">8:00pm</button>
                  <button className="p-2">11:00am</button>
                </div>
              </div>
            </div>
          </div>

          <div className="form-actions d-flex justify-content-between">
            <button className="cancel">Cancel</button>
            <button className="book">Book</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchedulePatient