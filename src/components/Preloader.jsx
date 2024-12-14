// src/components/Preloader.jsx
import React, { useState, useEffect } from 'react';
import car from "../assets/car.gif"

const Preloader = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 1 : 100));
        }, 20); // Update every 30ms to complete in ~3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white">
            {/* Centered GIF */}
            <img
                src={car} // Replace with your GIF path
                alt="Loading Icon"
                className="w-44 h-44 mb-4"
            />
            {/* Loading Text with Percentage */}
            <p className="text-lg font-medium text-gray-800">
                Loading {progress}%
            </p>
        </div>
    );
};

export default Preloader;
