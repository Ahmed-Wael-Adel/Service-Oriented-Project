import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/navbar';
import BackgroundImage from '../assets/background.jpg';

const Home = () =>{
    const location = useLocation();
    const email = location.state
    console.log(email)

    return(
        <div className="min-h-screen bg-cover bg-center"
             style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <Navbar email = {email}/>
            
        </div>
    )

}

export default Home;