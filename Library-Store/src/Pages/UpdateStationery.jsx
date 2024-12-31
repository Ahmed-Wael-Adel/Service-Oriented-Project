import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const UpdateStationery = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const stetionery = location.state
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState();
    const [error, setError] = useState("");

    

    const handleUpdate = async() => {
        if ( name != "" && description != "" && price != "")
        {
            const response = await axios.put(`http://localhost:3000/stationery/update/${stetionery._id}`, {
                name,
                description,
                price
            })
            if (response.data.message === "Stationery Updated")
            {
                navigate(-1)
            }
        }
        else
        {
            setError("Fill All The Filds")
        }


    }

    useEffect(()=>{
        setName(stetionery.name)
        setDescription(stetionery.description)
        setPrice(stetionery.price)
    },[])

    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Add Stetionery</h2>
                <div className="flex flex-col space-y-4 text-left">
                    <label className="text-sm font-medium text-gray-600">
                        Name
                    </label>
                    <input 
                        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                        value={name}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label className="text-sm font-medium text-gray-600">
                        Description
                    </label>
                    <input 
                        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                        value={description}
                        placeholder="Description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <label className="text-sm font-medium text-gray-600">
                        Price
                    </label>
                    <input 
                        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                        value={price}
                        placeholder="Price"
                        onChange={(e) => setPrice(e.target.value)}
                        type="number"
                    />
                    <h1 className="text-red-700">{error}</h1>
                    <button 
                        className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        onClick={handleUpdate}>
                        Update
                    </button>
                </div>
            </div>
        </div>
    )

}

export default UpdateStationery;