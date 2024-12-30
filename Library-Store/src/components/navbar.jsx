import { Link } from 'react-router-dom';

const Navbar = () =>{
    return(
        <div className='flex flex-row justify-center bg-blue-300 '>
            <Link to="/Book" className='  hover:bg-blue-900 '>Books</Link>
            <Link to="/Media" className='hover:bg-blue-900'>Media</Link>
            <Link to="/Staionery" className='hover:bg-blue-900'>Staionery</Link>
        </div>
    )
}

export default Navbar;