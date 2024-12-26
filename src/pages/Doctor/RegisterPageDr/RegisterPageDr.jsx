import React, { useState } from 'react';

//style
import './RegisterPageDr.css'
import teleclinixlogo from '../../../assets/teleclinixlogo.svg'
import banner from '../../../assets/banner.svg'
import facebook from '../../../assets/logos_facebook.svg'
import apple from '../../../assets/apple.svg'
import google from '../../../assets/google.svg'
import Checkbox from '../../components/Auth/checkbox';
import Banner from '../../../public/assets/drmicroscope.png';
import NameInput from '../../components/Auth/fullname';
import MedicalLicenceInput from '@/public/assets/medicalInput';
import MedicalSpecializationSelect from '../../components/Auth/specializationInput';
import YearsOfExperienceInput from '@/app/components/Auth/ExperienceInput';
import AvailabilityInput from '../../components/Auth/availability';
import RegisterPage from '../../Auth/RegisterPage/RegisterPage';
// import { useRouter } from 'next/router'; // Import useRouter

function RegisterPageDr() {
    // State for managing background color
    const [isWhiteBackground, setIsWhiteBackground] = useState(false);
    // const router = useRouter(); // Initialize useRouter

    // Function to toggle background color
    const toggleBackground = () => {
        setIsWhiteBackground(!isWhiteBackground);
    };


    return (
        <div className=' ml-[83px] mr-[83px]'
            role="application"
            style={{
                background: isWhiteBackground
                    ? 'white'
                    : 'linear-gradient(to bottom, rgba(31, 0, 102, 0.5), rgba(204, 0, 0, 0.2) 50%, rgba(31, 0, 102, 0.5))',
                minHeight: '100vh',
                transition: 'background-color 0.3s ease',
            }}
        >
            <header className='flex justify-between relative  bg-white'>
                <img src={teleclinixlogo} alt='TeleClinix logo' width={100} height={100} />
                <button
                    className='text-xl font-medium underline'
                    style={{ color: '#1F0066', cursor: 'pointer' }}
                    onClick={toggleBackground}
                    aria-label="Switch to white background"
                >
                    Colored not fun? Switch to white
                </button>
            </header>
            <main className=' flex  '>
                <div className='flex-1 ml-[60px] mt-[126px]  items-center justify-center'>
                    <img src={banner} alt='banner promoting TeleClinix services' width={660} height={870} />

                </div>
                <div className='flex-1 mr-[60px] ml-[83px]'>
                    <h1 className='font-semibold text-3xl mt-[20px] mb-[15px]' style={{ color: '#1F0066' }}>Welcome to TeleClinix</h1>
                    <p className='font-medium text-xl line-height: 1.5rem' style={{ color: '#1F0066' }}>
                        These fields are all necessary and all credentials <br></br> collected is to provide right information to enhance <br></br> patient-doctor matching and verification.                    </p>
                    <form className="mt-6" aria-label="Sign up form">
                        <div className='mb-[20px]'>
                            <Email label='Email Address' placeholder='' borderColor='#1F0066' />
                        </div>


                        <div className='mb-[20px]'>
                            <NameInput label="Full name" placeholder="" />
                        </div>
                        <div className='mb-[20px]'>
                            <MedicalLicenceInput label="Medical Licence Number" placeholder="" />
                        </div>
                        <div className='mb-[20px]'>
                            <MedicalSpecializationSelect label="Specialization" placeholder="" />
                        </div>
                        <div className='mb-[20px]'>
                            <YearsOfExperienceInput label="Years of Experience" placeholder="" />
                        </div>
                        <div className='mb-[20px]'>
                            <AvailabilityInput label="Kindly select the dates and time that suits your availability." placeholder="" />
                        </div>

                        <div className='mb-[20px]'>
                            <PasswordInput label="Password" placeholder="" />
                        </div>
                        <div className=''>
                            <PasswordInput label="Confirm Password" placeholder="" />
                            <p className='mt-[20px]' style={{ color: '#1F0066' }}>Password must be the same as above</p>
                        </div>
                        <Checkbox />
                        <div className="mt-6 flex justify-center align-middle">
                            <button
                                type="submit"
                                className="p-2 w-[375px] font-medium text-xl tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                                style={{ backgroundColor: '#1F0066' }}
                                aria-label="Sign up"
                            >
                                Sign-up
                            </button>
                        </div>

                    </form>
                    <div className="d-flex justify-content-between mt-[25px] mb-3">
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Sign up with Facebook"
                        >
                            <div className="w-[50px] h-[50px] mr-[19px]  rounded-full flex justify-center items-center">
                                <img src={facebook} alt="Facebook logo" width={32} height={32} />
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
                </div>

            </main>
        </div>
    );
}

export default RegisterPageDr