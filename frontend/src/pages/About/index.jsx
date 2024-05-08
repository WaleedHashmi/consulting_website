import React from 'react';
import { FaLinkedin, FaGlobe, FaGraduationCap } from 'react-icons/fa';
import CompanyInfo from './CompanyInfo';
import Metrics from './Metrics';


const FounderProfile = ({ name, role, bio, image, linkedin, website, scholar }) => {
    return (
        <div className="bg-white shadow-lg p-10 rounded-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <img src={image} alt={`${name}`} className="w-40 h-40 rounded-full md:rounded-lg" />
            <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-brand-900">{name}</h3>
                <p className="text-brand-600 text-lg">{role}</p>
                <p className="text-brand-700 text-base">{bio}</p>
                <div className="flex justify-center md:justify-start mt-4 space-x-4">
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-900 flex items-center">
                        <FaLinkedin className="mr-2" />
                        LinkedIn
                    </a>
                    <a href={website} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-900 flex items-center">
                        <FaGlobe className="mr-2" />
                        Personal Website
                    </a>
                    <a href={scholar} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-900 flex items-center">
                        <FaGraduationCap className="mr-2" />
                        Google Scholar
                    </a>
                </div>
            </div>
        </div>
    );
};

const About = () => {
    return (
        <div className="w-full p-8 grid grid-cols-1 gap-8">
            <h1 className="text-3xl font-bold text-brand-900 my-4">About Us</h1>
            <CompanyInfo />
            <h2 className="text-3xl font-bold text-brand-900 my-4">Key Metrics</h2>
            <Metrics />
            <h2 className="text-3xl font-bold text-brand-900 my-4">Meet Our Founders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FounderProfile
                    name="Waleed Hashmi"
                    role="Co-Founder"
                    bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum eget metus nec tristique. Phasellus eget orci eget mi blandit dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer id turpis ac nunc bibendum dictum. Donec auctor ante ac ipsum fermentum, vitae pharetra justo facilisis. Nullam sollicitudin neque vitae nulla tempor, quis tristique dui convallis. Duis sagittis lacinia est. Proin congue congue nunc eget rutrum. Aliquam erat volutpat. Quisque ac semper risus. Vivamus eu libero libero. Vivamus ut mi orci."
                    image="https://example.com/john-doe.jpg"
                    linkedin="https://www.linkedin.com/in/john-doe/"
                    website="https://www.johndoe.com/"
                    scholar="https://scholar.google.com/citations?user=yourID"
                />
                <FounderProfile
                    name="Abdullah Athar"
                    role="CTO & Co-Founder"
                    bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum eget metus nec tristique. Phasellus eget orci eget mi blandit dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer id turpis ac nunc bibendum dictum. Donec auctor ante ac ipsum fermentum, vitae pharetra justo facilisis. Nullam sollicitudin neque vitae nulla tempor, quis tristique dui convallis. Duis sagittis lacinia est. Proin congue congue nunc eget rutrum. Aliquam erat volutpat. Quisque ac semper risus. Vivamus eu libero libero. Vivamus ut mi orci."
                    image="https://example.com/jane-smith.jpg"
                    linkedin="https://www.linkedin.com/in/jane-smith/"
                    website="https://www.janesmith.com/"
                    scholar="https://scholar.google.com/citations?user=yourID"
                />

            </div>
        </div>
    );
};

export default About;
