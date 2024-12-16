import React, { useState } from 'react';

//style
import './LoginPage.css'
import teleclinixlogo from '../../../assets/teleclinixlogo.svg'


const LoginPage = () => {
  const [isWhiteBackground, setIsWhiteBackground] = useState(false);

  const toggleBackground = () => {
    setIsWhiteBackground((prev) => !prev);
  };

  return (
    <div className="container-fluid p-0">
      <div
        className="absolute"
        role="application"
        style={{
          background: isWhiteBackground
            ? 'white'
            : 'linear-gradient(to bottom, rgba(31, 0, 102, 0.5), rgba(204, 0, 0, 0.2) 50%, rgba(31, 0, 102, 0.5))',
          minHeight: '100vh',
          transition: 'background-color 0.3s ease',
        }}
      ></div>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="auth mt-5 p-3"></h1>
        <img src={teleclinixlogo} alt="TeleClinix logo" />
      </div>
      <div className="switch">
        <button
          className="text-xl font-medium underline"
          style={{ color: '#1F0066', cursor: 'pointer' }}
          onClick={toggleBackground}
          aria-label="Switch to white background"
        >
          Colored not fun? Switch to white
        </button>
      </div>

      <div className="d-flex flex-wrap align-items-center justify-content-center login-container">
        <div className="flex-1 ml-[60px] mt-[46px] items-center justify-center">
          <Image
            src={Banner}
            alt="banner promoting TeleClinix services"
            width={504}
            height={494}
          />
          <button
            className="flex items-center justify-center font-medium text-2xl mt-[46px] border rounded-lg p-2 w-[504px]"
            style={{ borderColor: '#1F0066', color: '#1F0066' }}
            aria-label="Already have an account? Sign in"
          >
            No account? SignUp
          </button>
        </div>
        <div className="flex-1 mr-[60px] ml-[83px]">
          <h1
            className="font-semibold text-3xl mt-[69px] mb-[15px]"
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
          <form className="mt-6" aria-label="Sign up form">
            <div className="mb-[30px]">
              <Email label="Email Address" placeholder="" borderColor="#1F0066" />
            </div>
            <div className="mb-[12px]">
              <PasswordInput label="Password" placeholder="" />
            </div>
            <div className="flex justify-between text-base" style={{ color: '#1F0066' }}>
              <Checkbox label="Remember Me" />
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
            <p className="mt-[30px] font-medium text-xl" style={{ color: '#1F0066' }}>
              or signin with
            </p>
            <div className="flex mt-[25px]">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sign up with Facebook"
              >
                <div className="w-[50px] h-[50px] mr-[19px] bg-white rounded-full flex justify-center items-center">
                  <Image src={FacebookIcon} alt="Facebook logo" width={32} height={32} />
                </div>
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sign up with Google"
              >
                <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center">
                  <Image src={Google} alt="Google logo" width={32} height={32} />
                </div>
              </a>
              <a
                href="https://www.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sign up with Apple"
              >
                <div className="w-[50px] h-[50px] ml-[19px] bg-white rounded-full flex justify-center items-center">
                  <Image src={Apple} alt="Apple logo" width={32} height={32} />
                </div>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
