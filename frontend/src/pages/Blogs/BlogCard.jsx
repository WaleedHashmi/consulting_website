import { FaRegHeart, FaComments } from 'react-icons/fa';

const BlogCard = ({ title, description, onClick }) => {
    return (
        <div className="p-6 m-4 shadow-lg rounded-lg bg-white cursor-pointer hover:bg-gray-100 transition duration-300" onClick={onClick}>
            <h2 className="font-semibold text-brand-900 text-xl mb-2">{title}</h2>
            <p className="text-brand-700 text-base">{description}</p>
            <div className="flex items-center space-x-2 mt-4">
                <FaRegHeart className="text-brand-600" />
                <FaComments className="text-brand-600" />
            </div>
        </div>
    );
};

export default BlogCard;    