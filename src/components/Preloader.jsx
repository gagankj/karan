// src/components/Preloader.jsx
import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png"

const Preloader = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 1 : 100));
        }, 10); // Update every 30ms to complete in ~3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white">
            {/* Centered GIF */}
            <img
                src={logo} // Replace with your GIF path
                alt="Loading Icon"
                className="w-44 animate-bounce mb-4"
            />
            {/* Loading Text with Percentage */}
            <p className="text-lg font-medium text-gray-800">
                Loading {progress}%
            </p>
        </div>
    );
};

export default Preloader;
