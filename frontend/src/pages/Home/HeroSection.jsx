import React from 'react';

const HeroSection = () => (
    <div className="flex flex-wrap bg-brand-50 h-[95vh]">
        <div className="flex flex-col justify-center items-start p-10 text-left flex-1">
            <h1 className="text-4xl font-bold text-brand-900">Data Science for Future Innovations</h1>
            <p className="text-brand-700 mt-4 text-lg">Harness the power of data and machine learning to unlock new opportunities and drive smarter decisions.</p>
            <button className="mt-6 px-6 py-3 bg-brand-500 text-white rounded hover:bg-brand-600 transition duration-300">Get Started</button>
        </div>
        <div className="flex-1 flex justify-center items-center">
            <div className="bg-gray-300 h-3/4 w-3/4"></div> {/* Image placeholder */}
        </div>
    </div>
);

export default HeroSection;
