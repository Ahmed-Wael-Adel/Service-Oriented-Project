import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/navbar';

const Home = () =>{
    const location = useLocation();
    const email = location.state
    console.log(email)

    return(
        <div>
            <Navbar/>
            
        </div>
    )

}

export default Home;