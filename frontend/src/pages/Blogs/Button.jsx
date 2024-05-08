const Button = ({ children, onClick }) => {
    return (
        <button className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-2 px-4 rounded transition duration-300" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;