import React, { useState } from "react";
import DatePicker from "react-datepicker";

//style
import './SchedulePatient.css'
import "react-datepicker/dist/react-datepicker.css"; 


function SchedulePatient() {
  const [dateTime, setDateTime] = useState(null);

  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      const fileDate = new Date(uploadedFile.lastModified);
      const currentDate = new Date();
      const oneMonthAgo = new Date(currentDate.setMonth(currentDate.getMonth() - 1));

      if (fileDate >= oneMonthAgo) {
        setFile(uploadedFile);
        setErrorMessage("");
      } else {
        setFile(null);
        setErrorMessage("The uploaded file must not be older than a month.");
      }
    }
  };

  return (
    <div className="container-fluid p-0">
      <div className="main d-flex">
        <div className="book m-5">
          <h3>Book an Appointment</h3>
          <div className="appointment-header mb-3 w-25">
            <div className="header-card p-2 d-flex justify-content-between align-items-center">
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
                  <input type="text" placeholder="Email Address" className="p-2" disabled />
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
              </div>

              <div className="right-section">
              <div className="form-group">
              <label>Upload Past Medical Results</label>
              <input
                type="file"
                className="p-2"
                onChange={handleFileUpload}
                accept=".pdf,.jpg,.jpeg,.png"
              />
              {file && (
                <p style={{ color: "green" }}>
                  File "{file.name}" uploaded successfully!
                </p>
              )}
              {errorMessage && (
                <p style={{ color: "red" }}>{errorMessage}</p>
              )}
            </div>
                <div className="form-group">
                  <label>Doctors</label>
                  <select className="p-2">
                    <option>Select</option>
                  </select>
                </div>
                <div className="form-group">
                  <div className="date-options">
                  <h3 className="mt-5">Select Date and Time</h3>
                    <p >Kindly select your preferred date and time.</p>
                        <div className="date">
                        <DatePicker
                        selected={dateTime}
                        onChange={(date) => setDateTime(date)}
                        showTimeSelect
                        dateFormat="Pp" 
                        placeholderText="Select a date and time"
                        className="m-2"
                      />
                          {dateTime && <p>Selected Date & Time: {dateTime.toString()}</p>}
                            </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Gender</label>
                        <div className="radio-group d-flex">
                          <label><input type="radio" name="gender" value="Female" /> Female</label>
                          <label><input type="radio" name="gender" value="Male" /> Male</label>
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

export default SchedulePatient;