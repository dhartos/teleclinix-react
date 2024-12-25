import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//style
import './LoginPage.css'
import teleclinixlogo from '../../../assets/teleclinixlogo.svg'
import banner from '../../../assets/banner.svg'
import facebook from '../../../assets/logos_facebook.svg'
import apple from '../../../assets/apple.svg'
import google from '../../../assets/google.svg'
import { useNavigate } from 'react-router-dom';


const LoginPage = ({ setLogin }) => {
  const [isWhiteBackground, setIsWhiteBackground] = useState(false);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const toggleBackground = () => {
    setIsWhiteBackground((prev) => !prev);
  };

  const signIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    try {
      const formData = new FormData()

      formData.append("grant_type", "password")
      formData.append("email", email)
      formData.append("password", password)
      formData.append("scope", "")
      formData.append("client_id", "string")
      formData.append("client_secret", "string")

      const response = await fetch('https://teleclinix-backend-api.onrender.com/api/login', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Login Successful:', data);

      const accessToken = data?.access_token

      if (remember) {
        localStorage.setItem(accessToken)
      } else {
        sessionStorage.setItem(accessToken)
      }

      setEmail('');
      setPassword('');
      setSuccess('Login successful!');
      setError('');
    } catch (error) {
      console.error('Error during login:', error);
      setError(error.message || 'Something went wrong. Please try again.');
      setSuccess('');
    }
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
      <div className="mid d-flex flex-wrap align-items-center justify-content-center login-container mt-5 mb-2">
      <div className=" banner align-items-center justify-content-center w-25">
        <img src={banner}
        alt='banner promoting TeleClinix services'
         width={350} 
         height={390}
         className='banner m-[30px]'/>
         <Link to='/authentication/register'>
         <button
            className="font-medium text-2xl mt-4 border rounded-lg p-2 "
            style={{ borderColor: '#1F0066', color: '#1F0066' }}
            aria-label="Already have an account? Sign in"
          >
               No account? SignUp
          </button>
          </Link>
        </div>
          <div className="flex-1 m-5">
            <h1
              className='font-semibold text-3xl mt-5 mb-[15px]'
              style={{ color: '#1F0066' }}
            >
              Welcome Back
            </h1>
            <p
              className="font-medium text-xl mb-[31px]"
              style={{ color: '#1F0066', lineHeight: '1.5rem' }}
            >
              To keep connected with us, kindly login with your personal
              information and continue your medical consultation.
            </p>
            <form onSubmit={signIn} className="mt-6" aria-label="Sign up form">
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
              <div className="mb-[30px]">
                <input
                  type="email"
                  label="Email Address"
                  className='p-2' 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="user@example.com"
                  borderColor="#1F0066"
                />
              </div>
              <div className="mb-[12px]">
                <input
                  type="password"
                  className='p-2' 
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="****"
                />
              </div>
              <div className="d-flex justify-content-between text-base" style={{ color: '#1F0066' }}>
                <div className='d-flex align-items-center'>
                <input
                  type="checkbox"
                  label="Remember Me"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <p className='rem'>Remember Me</p>
                </div>
                <div className="underline text-base">Forgot password?</div>
              </div>

              <div className="mt-[45px] flex justify-center align-middle">
                <button
                  type="submit"
                  className="p-2 w-[375px] font-medium text-xl text-white rounded-lg hover:bg-gray-700"
                  style={{ backgroundColor: '#1F0066' }}
                  aria-label="Sign-In"
                >
                  Sign-In
                </button>
              </div>
              <p className="mt-3 " style={{ color: '#1F0066' }}>
                or signin with
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

export default LoginPage;