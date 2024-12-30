import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//style
import './RegisterPageDr.css'
import teleclinixlogo from '../../../assets/teleclinixlogo.svg'
import banner from '../../../assets/banner-doctor.svg'


const RegisterPageDr = () => {
  const [isWhiteBackground, setIsWhiteBackground] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [options, setOptions] = useState([]);
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleBackground = () => {
    setIsWhiteBackground(!isWhiteBackground);
  };

  useEffect(() => {
    const generateOptions = () => {
      const now = new Date();
      const optionsArray = [];

      for (let day = 0; day < 7; day++) {
        const currentDate = new Date(now);
        currentDate.setDate(now.getDate() + day);

        const times = ["10:00", "14:00", "18:00"];
        times.forEach((time) => {
          const [hours, minutes] = time.split(":");
          const dateTime = new Date(currentDate);
          dateTime.setHours(hours, minutes, 0);
          optionsArray.push({
            label: `${dateTime.toDateString()}, ${time}`,
            value: dateTime.toISOString(),
          });
        });
      }

      setOptions(optionsArray);
    };

    generateOptions();
  }, []);

    const handleSelectOption = (value) => {
      if (!selectedAvailability.includes(value)) {
        setSelectedAvailability([...selectedAvailability, value]);
      }
      setIsDropdownOpen(false);
    };
  
    const handleRemoveAvailability = (value) => {
      setSelectedAvailability(selectedAvailability.filter(item => item !== value));
    };

  const registerDoctor = async (e) => {
    e.preventDefault();

    if (!email || !fullName || !phoneNumber || !licenseNumber || !specialization || !yearsOfExperience || !selectedAvailability || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password.length < 8 || confirmPassword.length < 8) {
      setError('Password and Confirm Password must be at least 8 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
  
    const experience = parseInt(yearsOfExperience, 10);
    if (isNaN(experience)) {
      setError('Years of experience must be a valid number.');
      return;
    }

    try {
      setError("");
      setSuccess("");

      const response = await fetch("https://backend-a25w.onrender.com/api/auth/doctor/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "accept": "application/json",
          },
          body: JSON.stringify({
            email,
            fullName,
            phoneNumber,
            licenseNumber,
            specialization,
            yearsOfExperience: experience,
            availability: selectedAvailability,
            password,
            confirm_password: confirmPassword,
          }),
        }
      );

      const data = await response.json();
      console.log("Registration data", data)

      if (response.ok) {
        setSuccess("Registration successful! Please log in.");
        setPopupVisible(true);
      } else {
        setError(data.message || "Registration failed.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

   const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClosePopup = () => {
    setEmail("")
    setFullName("")
    setPhoneNumber("")
    setLicenseNumber("")
    setSpecialization("")
    setYearsOfExperience(0)
    setSelectedAvailability([])
    setPassword("")
    setConfirmPassword("")
    setIsDropdownOpen(false)

    setPopupVisible(false)
  }

  return (
    <div className='container-fluid p-0'>
      <div className="switch d-flex justify-content-between align-items-center m-3">
        <div className="d-flex align-items-center">
          <h1 className="auth mt-5 p-3"></h1>
          <img src={teleclinixlogo} alt="TeleClinix logo" />
        </div>
        <button
          className="text-xl font-medium underline w-25 p-1"
          style={{ color: '#1F0066', cursor: 'pointer' }}
          onClick={toggleBackground}
          aria-label="Switch to white background"
        >
          {!isWhiteBackground ? 'Colored not fun? Switch to white' : 'White not fun? Switch to colored'}
        </button>
      </div>
      <div
        className="absolute m-5"
        role="application"
        style={{
          background: isWhiteBackground
            ? 'white'
            : 'linear-gradient(to bottom, rgba(31, 0, 102, 0.5), rgba(204, 0, 0, 0.2) 50%, rgba(31, 0, 102, 0.5))',
          minHeight: '100vh',
          transition: 'background-color 0.3s ease',
        }}
      >
        <div className='mid d-flex flex-wrap align-items-center justify-content-between login-container mt-5 mb-2'>
          <div className="banner align-items-center justify-content-center w-25">
            <img src={banner}
              alt='banner promoting TeleClinix services'
              width={350}
              height={390} />
            <Link to='/'>
              <button
                className="font-medium text-2xl mt-4 border rounded-lg p-2"
                style={{ color: '#1F0066' }}
                aria-label="Already have an account? Sign in"
              >
                Already have an account? Sign in
              </button>
            </Link>
          </div>
          <div className='left flex-1 m-5 '>
            <h1 className='font-semibold text-3xl ' style={{ color: '#1F0066' }} >
              Welcome to TeleClinix</h1>
            <p className='font-medium text-xl line-height: 1.5rem' style={{ color: '#1F0066' }}>
              These fields are all necessary and all credentials  collected is to provide right information to enhance patient-doctor matching and verification.
            </p>
            <form onSubmit={registerDoctor} className="mt-5 mb-5" aria-label="Sign up form">
              {error && <p style={{ color: "red" }}>{error}</p>}
              {success && <p style={{ color: "green" }}>{success}</p>}
              <div className='my-5 w-100'>
                <input
                  className="p-2 mb-2"
                  type="email"
                  label="Email Address"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="p-2 mb-2"
                  type="text"
                  label="Full Name"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <input
                  className="p-2 mb-2"
                  type="tel"
                  label="Phone Number"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <input
                  className="p-2 mb-2"
                  type="text"
                  label="Medical License Number"
                  placeholder="Medical License Number"
                  value={licenseNumber}
                  onChange={(e) => setLicenseNumber(e.target.value)}
                />
                <input
                  className="p-2 mb-2"
                  type="text"
                  label="Specialization"
                  placeholder="Specialization"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                />
                <input
                  className="p-2 mb-2"
                  type="number"
                  label="Years of Experience"
                  placeholder="Years of Experience"
                  value={yearsOfExperience}
                  onChange={(e) => setYearsOfExperience(e.target.value)}
                />          
                
                <div className="">
                  <label htmlFor="availability" style={{ display: 'block' }}>
                    Select Preferred Times:
                  </label>
                  <div className="dropdown-container">
                    <button type="button" onClick={toggleDropdown} className="p-2 mb-2 w-full">
                      {selectedAvailability.length === 0 ? 'Select Times' : 'Edit Times'}
                    </button>
                    {isDropdownOpen && (
                      <div className="dropdown-list">
                        {options.map((option) => (
                          <div
                            key={option.value}
                            onClick={() => handleSelectOption(option.value)}
                            className="dropdown-item"
                          >
                            {option.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="selected-times mb-4">
                  {selectedAvailability.map((value) => {
                    const option = options.find(o => o.value === value);
                    return (
                      <span key={value} className="selected-time me-2">
                        {option.label}

                        {options && (
                          <span
                            className="remove-icon"
                            onClick={() => handleRemoveAvailability(value)}
                            style={{ cursor: 'pointer', marginLeft: '5px', color: 'red' }}
                          >
                            &#10005;
                          </span>
                        )}
                      </span>
                    );
                  })}
                </div>

                <div className="mb-[12px]">
                  <input
                    className="p-2 mb-2"
                    type="password"
                    label="Password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    className="p-2 mb-2"
                    type="password"
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <p className='mt-[20px]'>Password must be the same as above</p>
                </div>
                <div className="mt-6 flex justify-center align-middle">
                  <button
                    type="submit"
                    className="p-2 w-[375px] font-medium text-xl text-white rounded-lg hover:bg-gray-700"
                    style={{ backgroundColor: '#1F0066' }}
                    aria-label="Sign-Up"
                  >
                    Sign-Up
                  </button>
                </div>
              </div>
            </form>
          </div>

          
          {popupVisible && (
            <div className="popup-overlay">
              <div className="popup-content">
                <div className="popup-content-top">
                  <h2>Thanks for signing-up with us!!!</h2>
                  <p>Kindly look out for our response mail.</p>
                  <p>Account creation will be activated when submitted information has been duly verified.</p>
                </div>
                <div className="popup-content-bottom">
                  <button onClick={handleClosePopup} className="popup-close-btn">Okay</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RegisterPageDr