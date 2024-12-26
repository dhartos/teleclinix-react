import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//style
import './RegisterPageDr.css'
import teleclinixlogo from '../../../assets/teleclinixlogo.svg'
import banner from '../../../assets/banner.svg'

const RegisterPageDr = () => {
    const [isWhiteBackground, setIsWhiteBackground] = useState(false);
    const [options, setOptions] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


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

        const Register = async (e) => {
            e.preventDefault();
        
            if (!email || !password || !confirmPassword) {
              setError("All fields are required.");
              return;
            }
        
            if (password.length < 8 || confirmPassword.length < 8) {
              setError("Password and Confirm Password must be at least 8 characters long.");
              return;
            }
        
            if (password !== confirmPassword) {
              setError("Passwords do not match.");
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
                    password,
                    confirm_password: confirmPassword
                  }),
                }
              );
        
              const data = await response.json();
              console.log("Registration data", data)
        
              if (response.ok) {
                setSuccess("Registration successful! Please log in.");
                navigate("/authentication/verify", { state: { email: email } });
              } else {
                setError(data.message || "Registration failed.");
              }
            } catch (err) {
              setError("An error occurred. Please try again.");
            }
        
          };

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
              height={390}/>
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
            <h1 className='font-semibold text-3xl 'style={{ color: '#1F0066' }} >
            Welcome to TeleClinix</h1>
            <p className='font-medium text-xl line-height: 1.5rem' style={{ color: '#1F0066' }}>
                These fields are all necessary and all credentials  collected is to provide right information to enhance patient-doctor matching and verification.
                </p>
            <form onSubmit={Register} className="mt-5 mb-5" aria-label="Sign up form">
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
            <div className='m-5'>
                <input
                className='p-2 mb-2'
                type='email'
                label="Email Address"
                placeholder="Email Address"
            />
                <input
                className='p-2 mb-2'
                type='name'
                label="full name"
                placeholder="Full name"
            />
                <input
                className='p-2 mb-2'
                type='name'
                label="Medical Licence Number"
                placeholder="Medical Licence Number"
            />
            
            <input
            className='p-2 mb-2'
            type="text"
            name="specialization"
            placeholder="Type your medical specialization"
            aria-label="Specialization"
            />
            <input
            className='p-2 mb-2'
            type="number"
            name="yearsExperience"
            placeholder="Enter your years of experience"
            aria-label="Years of Experience"
            />
                <select className='p-2 mb-2'aria-label="Select preferred date and time">
            <option value="" disabled selected>
                Select Preferred Date and Time
            </option>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                {option.label}
                </option>
            ))}
            </select>
            <div className="mb-[12px]">
            <input
                className='p-2 mb-2'
                type='password'
                label="Password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <div className=''>
            <input
                className='p-2 mb-2'
                type='password'
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
            </div>
        </div>
        </div>
    );
}

export default RegisterPageDr