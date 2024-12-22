import React, { useState } from 'react';

import { Link, useNavigate, useLocation } from 'react-router-dom'

//Styling
import "./VerifyPage.css"


const VerifyPage = () => {
    const location = useLocation();
    const email = location.state?.email;
    console.log('email', email)

    const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
    const navigate = useNavigate();

        // Handle input changes
        const handleInputChange = (e, index) => {
        const input = e.target
            const newCode = [...verificationCode];
            newCode[index] = input.value;
            setVerificationCode(newCode);



            const maxLength = input.maxLength;
            if (input.value.length >= maxLength) {
              const nextInput = input.nextElementSibling;
              if (nextInput && nextInput.tagName === "INPUT") {
                nextInput.focus();
              }
            }
        };
    
        // Combine the code into a single string
        const code = verificationCode.join('');
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            // Ensure email is retrieved correctly
            if (!email) {
                alert("Email is missing. Please try again.");
                return;
            }
            try {
                const response = await fetch('', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ token: code, email }), 
                });
    
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Failed to verify token');
                }
    
                const data = await response.json();
                console.log('Token verified:', data);
    
                // If the token is verified, redirect to login
                navigate('/authentication/login');
            } catch (error) {
                console.error('Error verifying token:', error);
                alert('Invalid verification code. Please try again.');
            }
        };


            // Handle request to get another token
    const handleRequestCode = async () => {
        try {
            if (!email) {
                alert("Email is missing. Please try again.");
                return;
            }
            await requestVerificationCode(email);
            alert('A new verification code has been sent to your email.');
        } catch (error) {
            console.error('Failed to request new verification code:', error);
            alert('Failed to request a new verification code. Please try again.');
        }
    };

    async function requestVerificationCode(email) {
        try {
            const response = await fetch('https://devapi.rangemeatacademyltd.com/api/v1/send/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email}),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to request verification code');
            }

            const data = await response.json();
            console.log('Verification code requested:', data);
            return data;
        }
        catch (error) {
            console.error('Error requesting verification code:', error);
            throw error;
        }
    }

    const handleInput = (e) => {
        console.log('input', e.target)
        const input = e.target;
        const maxLength = input.getAttribute('maxLength');
        if (input.value.length >= maxLength) {
          const nextInput = input.nextElementSibling;
          if (nextInput && nextInput.tagName === "INPUT") {
            nextInput.focus();
          }
        }
    };

    return (

        <div className='container-fluid p-0'>
            <div className="d-flex justify-content-between align-items-center">
                <h1 className='mt-3 p-3'>TeleClinix</h1>
                <img src="{reglogo}" alt="logo" />
        </div>

        <div className="d-flex flex-column align-items-center justify-content-center login-container mb-3 p-3">
                <div className="align-items-center  text-align-center">
                    <h2 className=""> Check Your Email: Enter Your Verification Code.</h2>
                    <p><i className='mt-4 mb-4'>We've sent a verification code to your registered email. Please enter the code below to verify your account and proceed.</i></p>
                </div>
                <div className="p-4 shadow verify-box">
                 <div className='mx-auto ml-5'>
                  <label htmlFor="heading">Verification code</label>
                </div>
                <div className='d-flex mb-4'>
                <input type="text" maxLength={1} className='form-control verification-input' id='input0' value={verificationCode[0]} onInput={(e) => handleInputChange(e, 0)}
              />
                <input type="text" maxLength={1} className='form-control verification-input' id='input1' value={verificationCode[1]} onInput={(e) => handleInputChange(e, 1)}
              />
                <input type="text" maxLength={1} className='form-control verification-input' id='input2' value={verificationCode[2]} onInput={(e) => handleInputChange(e, 2)}
              />
                <input type="text" maxLength={1} className='form-control verification-input' id='input3' value={verificationCode[3]} onInput={(e) => handleInputChange(e, 3)}
              />
                <input type="text" maxLength={1} className='form-control verification-input' id='input4' value={verificationCode[4]} onInput={(e) => handleInputChange(e, 4)}
              />
                <input type="text" maxLength={1} className='form-control verification-input' id='input5' value={verificationCode[5]} onInput={(e) => handleInputChange(e, 5)}
              />
            </div>

                </div>
                <div className="w-25 mt-4 d-flex align-items-center justify-content-center">
                    <button onClick={handleSubmit} className='btn btn-primary w-50 btn-block'>Submit</button>
                </div>
                    <div className="text-center mt-5 mb-2">
                    <span>Didn't get a code? </span>

                    {/* Call handleRequestCode when the user clicks this link */}
                    <Link to="#" onClick={handleRequestCode} className='text-primary'>Request another code.</Link>
                </div>
            </div>
            </div>

    )
    }
    
    export default VerifyPage