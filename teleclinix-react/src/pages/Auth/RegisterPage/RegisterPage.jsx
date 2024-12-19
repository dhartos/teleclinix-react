import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//style
import './RegisterPage.css'
import teleclinixlogo from '../../../assets/teleclinixlogo.svg'
import banner from '../../../assets/banner.svg'
import facebook from '../../../assets/logos_facebook.svg'
import apple from '../../../assets/apple.svg'
import google from '../../../assets/google.svg'

const RegisterPage = () => {
  const [isWhiteBackground, setIsWhiteBackground] = useState(false);

  const toggleBackground = () => {
    setIsWhiteBackground((prev) => !prev);
  };

  return (
    <div className="container-fluid p-0">
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

      <div className=" mid d-flex flex-wrap align-items-center justify-content-center login-container mt-5 mb-2">
        <div className=" banner align-items-center justify-content-center m-5 w-50">
        <img src={banner}
        alt='banner promoting TeleClinix services'
         width={350} 
         height={390} />
         <Link to='/authentication/login'>
          <button
            className="font-medium text-2xl mt-4 border rounded-lg p-2 w-50"
            style={{ borderColor: '#1F0066', color: '#1F0066' }}
            aria-label="Already have an account? Sign in"
          >
              Already have an account? Sign in
          </button>
          </Link>
        </div>
        <div className="">
        <h1 className=''>Welcome to TeleClinix</h1>
        <p className='font-medium text-xl line-height: 1.5rem'> 
        To get connected with us, kindly signup with your <br /> personal information and start using our medical <br /> services.
        </p>
          <form className="mt-5" aria-label="Sign up form">
            <div className="mb-[30px]">
              <input
              className='p-2' 
              label="Email Address" placeholder="Email Address" borderColor="#1F0066" />
            </div>
            <div className="mb-[12px]">
              <input 
              className='p-2' 
              label="Password" 
              placeholder="Password" />
            </div>
            <div className=''>
              <input 
              className='p-2' 
              label="Confirm Password" placeholder="Confirm Password" />
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
            <p className="mt-3" style={{ color: '#1F0066' }}>
              or signup with
            </p>
            <div className="d-flex justify-content-between mt-[25px] mb-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sign up with Facebook"
              >
                <div className="w-[50px] h-[50px] mr-[19px]  rounded-full flex justify-center items-center">
                  <img src={facebook}alt="Facebook logo" width={32} height={32} />
                </div>
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sign up with Google"
              >
                <div className="w-[50px] h-[50px]  rounded-full flex justify-center items-center">
                  <img src={google} alt="Google logo" width={32} height={32} />
                </div>
              </a>
              <a
                href="https://www.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sign up with Apple"
              >
                <div className="w-[50px] h-[50px] ml-[19px]  rounded-full flex justify-center items-center">
                  <img src={apple} alt="Apple logo" width={32} height={32} />
                </div>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RegisterPage;
