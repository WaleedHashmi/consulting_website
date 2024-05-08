import { FaRegLightbulb } from 'react-icons/fa';

const CompanyInfo = () => {
    return (
        <div className="bg-white shadow-lg p-12 rounded-lg w-full">
            <p className="text-brand-700 text-lg mb-6">
                Since our inception in 2005, we've been trailblazers in technology, driving innovation and shaping the future. Our commitment to excellence and sustainability sets us apart, making a profound impact on a global scale.
            </p>
            <div className="flex items-center mt-4">
                <FaRegLightbulb className="text-brand-600 text-3xl mr-4" />
                <p className="text-brand-700 text-lg">Pioneering ideas for a sustainable and brighter future.</p>
            </div>
        </div>
    );
};

export default CompanyInfo;