"use client"; // Mark this component as a client component

import Icon from '../../public/assets/material-symbols_license-outline.png';

import React, { useState } from 'react';
import Image from 'next/image'; // Use Image component for Next.js

const MedicalLicenceInput = ({
    label = "Email",
    placeholder = "Medical Licence Number",
    borderColor = '#1F0066'
}) => {
    const [medicalLicence, setMedicalLicence] = useState('');

    return (
        <div className="relative w-full mt-2">
            {/* Label for the input */}
            <label
                className={`absolute left-10 transition-all duration-200 ease-in-out 
                ${medicalLicence ? 'top-[-10px] text-[#1F0066] text-sm' : 'top-3 text-gray-700'}`}
                htmlFor="medicalLicence" // Match the id of the input
                aria-labelledby="medicalLicence-label" // Update for clarity
            >
                {label}
            </label>

            {/* Flex container for icon and input */}
            <div className="flex items-center border rounded-lg w-full" style={{ borderColor }} >
                {/* Icon container */}
                <span className={`p-2 transition-all duration-200 ease-in-out mr-4
                    ${medicalLicence ? 'text-gray-500 transform -translate-y-1' : 'text-gray-500 '}`}
                    role="img" // Add role for accessibility
                    aria-label="medicalLicence icon" // Update aria-label for the icon
                >
                    <Image src={Icon} alt="medicalLicence Icon" width={24} height={24} /> {/* Render the icon as an image */}
                </span>

                {/* Input field */}
                <input
                    type="number" // Correct type for the input
                    id="medicalLicence" // Match with the label's htmlFor
                    className="block w-full px-4 py-[14px] text-gray-700 rounded-lg focus:outline-none transition duration-150 ease-in-out"
                    style={{ backgroundColor: 'transparent', color: '#1F0066' }} // Keep the text color
                    placeholder={placeholder} // Use placeholder prop
                    required
                    value={medicalLicence}
                    onChange={(e) => setMedicalLicence(e.target.value)} // Correct state updater function
                    aria-required="true" // Indicate the input is required
                    aria-invalid={!medicalLicence ? "true" : "false"} // Indicate if there's an error
                />
            </div>
        </div>
    );
};

export default MedicalLicenceInput;
