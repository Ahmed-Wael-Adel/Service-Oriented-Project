import { Link } from 'react-router-dom';

const Navbar = () =>{
    return(
        <div>
            <Link to="/Book">Books</Link>
            <Link to="/Media">Media</Link>
            <Link to="/Staionery">Staionery</Link>
        </div>
    )
}

export default Navbar;