import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaUserCircle } from 'react-icons/fa';

const testimonials = [
    {
        quote: "DataConsult's innovative approaches have transformed our data infrastructure, making it smarter and more responsive.",
        author: "CEO of TechInnovate",
        avatar: null
    },
    {
        quote: "Thanks to DataConsult's insights, we've seen a 30% increase in operational efficiency.",
        author: "COO of FinTech Solutions",
        avatar: null
    },
    {
        quote: "Their tailored AI solutions propelled our product development into new heights.",
        author: "Director of Innovation, AutoAdvance",
        avatar: null
    }
];

const TestimonialSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(current => (current + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const renderAvatar = (avatar) => {
        if (avatar) {
            return <img src={avatar} alt="avatar" className="w-full h-full rounded-full object-cover" />;
        }
        return <FaUserCircle className="text-6xl text-brand-600" />;
    };

    return (
        <div className="bg-brand-50 py-12 text-center w-full relative">
            <h2 className="text-3xl font-bold text-brand-800 mb-6">Trusted by Industry Leaders</h2>
            <div className="mx-auto max-w-2xl px-4">
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-12 h-12">
                        {renderAvatar(testimonials[activeIndex].avatar)}
                    </div>
                    <p className="text-brand-600 text-lg italic leading-relaxed text-center">"{testimonials[activeIndex].quote}"</p>
                    <p className="text-brand-700 font-semibold">- {testimonials[activeIndex].author}</p>
                </div>

                <div className="flex justify-center mt-6 space-x-2">
                    {testimonials.map((_, idx) => (
                        <button key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`h-3 w-3 rounded-full ${idx === activeIndex ? 'bg-brand-600' : 'bg-brand-300'} transition duration-500 ease-in-out`}
                            aria-label={`Go to testimonial ${idx + 1}`}></button>
                    ))}
                </div>
                <button onClick={() => setActiveIndex((activeIndex + testimonials.length - 1) % testimonials.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-500 hover:text-brand-900">
                    <FaChevronLeft className="text-xl" />
                </button>
                <button onClick={() => setActiveIndex((activeIndex + 1) % testimonials.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-500 hover:text-brand-900">
                    <FaChevronRight className="text-xl" />
                </button>
            </div>
        </div>
    );
};

export default TestimonialSection;
