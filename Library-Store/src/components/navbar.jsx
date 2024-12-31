import { Link } from 'react-router-dom';

const Navbar = ({email}) => {
    return (
        <div className="flex justify-between items-center bg-blue-300 p-4 shadow-md">
            <div className="flex space-x-6">
                <Link to="/Book" className="text-white px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-300">Books</Link>
                <Link to="/Media" className="text-white px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-300">Media</Link>
                <Link to="/Stationery" className="text-white px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-300">Stationery</Link>
            </div>
            <div className='flex space-x-6'>
                {email ? <h1 className='text-white px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-300'>Email: {email}</h1> : <Link to="/login" className="text-white px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-300">Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;