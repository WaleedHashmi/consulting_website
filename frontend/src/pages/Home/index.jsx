import React from 'react';
import HeroSection from './HeroSection';
import ServiceSection from './ServiceSection';
import TestimonialSection from './TestimonialSection';

const Home = () => (
    <div className="w-full overflow-x-hidden" style={{ scrollBehavior: 'smooth' }}>
        <HeroSection />
        <ServiceSection />
        <TestimonialSection />
    </div>
);

export default Home;
