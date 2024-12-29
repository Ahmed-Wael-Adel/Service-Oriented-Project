import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom"; 

const Login = () => {

    const navigate = useNavigate(); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        if(email != "" && password!= "")
        {
            try
            {
                const response = await axios.post("http://localhost:3000/auth/login", {email, password})
                if(response.data.message === "Invalid Username or Password")
                {
                    console.log(response.data.message)
                }
                else
                {
                    //console.log(email)
                    navigate('/Home', { state: email })
                    
                }
                
            }
            catch{

            }
            
        }
        
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
                <div className="flex flex-col space-y-4">
                    <label className="text-sm font-medium text-gray-600">
                        Email
                    </label>
                    <input 
                        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                        value={email}
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                    />
                    <label className="text-sm font-medium text-gray-600">
                        Password
                    </label>
                    <input 
                        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                        value={password}
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                    />
                    <button 
                        className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        onClick={handleLogin}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;