import React from 'react';
import { FaChartBar, FaRobot, FaDatabase } from 'react-icons/fa';

const SingleService = ({ icon, title, description, stats }) => (
    <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center text-brand-800 hover:bg-brand-50 transition-colors duration-300">
        <div className="text-brand-500 text-3xl mb-6">{icon}</div>
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <p className="text-brand-600 font-semibold">{stats}</p>
    </div>
);

const ServiceSection = () => (
    <div className="py-16 bg-brand-100">
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-brand-900">Our Expertise</h2>
            <p className="text-brand-700">Explore the core services we provide to empower your business.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-7xl px-4">
            <SingleService
                icon={<FaDatabase />}
                title="Data Analysis"
                description="Our data analysis solutions structure vast data into clear insights, helping businesses improve efficiency and profitability."
                stats="Serving over 500 clients worldwide."
            />
            <SingleService
                icon={<FaChartBar />}
                title="Machine Learning"
                description="We develop sophisticated machine learning models that predict trends and automate decisions, increasing operational agility."
                stats="Implemented 300+ custom ML models."
            />
            <SingleService
                icon={<FaRobot />}
                title="AI Solutions"
                description="From natural language processing to computer vision, our AI solutions redefine how businesses interact with data."
                stats="Enhanced 120+ enterprises with AI."
            />
        </div>
    </div>
);

export default ServiceSection;
