import { FaAward, FaBuilding, FaUsers, FaCalendarAlt, FaHistory } from 'react-icons/fa';

const Metrics = () => {
    return (
        <div className="bg-white shadow-lg p-12 rounded-lg w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">

            <div>
                <center>
                    <FaUsers className="text-brand-600 text-4xl mb-4" />
                    <p className="text-brand-900 font-semibold text-xl">10K+</p>
                    <p className="text-brand-700">Happy Customers</p>
                </center>
            </div>
            <div>
                <center>
                    <FaBuilding className="text-brand-600 text-4xl mb-4" />
                    <p className="text-brand-900 font-semibold text-xl">5</p>
                    <p className="text-brand-700">Global Offices</p>
                </center>
            </div>
            <div>
                <center>
                    <FaAward className="text-brand-600 text-4xl mb-4" />
                    <p className="text-brand-900 font-semibold text-xl">20+</p>
                    <p className="text-brand-700">Industry Accolades</p>
                </center>
            </div>
            <div>
                <center>
                    <FaCalendarAlt className="text-brand-600 text-4xl mb-4" />
                    <p className="text-brand-900 font-semibold text-xl">15+</p>
                    <p className="text-brand-700">Years of Excellence</p>
                </center>
            </div>
            <div>
                <center>
                    <FaHistory className="text-brand-600 text-4xl mb-4" />
                    <p className="text-brand-900 font-semibold text-xl">300+</p>
                    <p className="text-brand-700">Innovative Projects</p>
                </center>
            </div>

        </div>
    );
};


export default Metrics;