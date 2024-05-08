import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
    return (
        <div className="p-4 flex bg-white shadow rounded">
            <input
                className="border p-2 w-full rounded-l focus:outline-none"
                type="text"
                placeholder="Search blog posts..."
                onChange={(e) => onSearch(e.target.value)}
            />
            <button className="bg-brand-600 text-white p-3 rounded-r hover:bg-brand-700 transition duration-300">
                <FaSearch />
            </button>
        </div>
    );
};

export default SearchBar;