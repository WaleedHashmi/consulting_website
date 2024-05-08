import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const nav_class = "px-6 py-3 hover:bg-brand-600 rounded transition-colors duration-300";

    return (
        <div className="bg-brand-500 text-white p-6 flex justify-between items-center shadow-md">
            <h1 className="text-xl font-bold text-shadow">AxW</h1>
            <nav>
                <Link to="/" className={nav_class}>Home</Link>
                <Link to="/about" className={nav_class}>About</Link>
                <Link to="/blogs" className={nav_class}>Blogs</Link>
            </nav>
        </div>
    );
};

export default Header;
