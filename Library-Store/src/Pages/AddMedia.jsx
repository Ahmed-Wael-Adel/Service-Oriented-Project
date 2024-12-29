import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

const AddMedia = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [publisher, setPublisher] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState();
    


    const handleAdd = async() => {
        const response = await axios.post("http://localhost:3000/media/add", {
            name,
            publisher,
            description,
            type,
            price
        });

        if (response.data.message === "Media Added")
        {
            navigate(-1)
        }
        else
        {

        }
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Add Media</h2>
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
                        Publisher
                    </label>
                    <input 
                        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                        value={publisher}
                        placeholder="Publisher"
                        onChange={(e) => setPublisher(e.target.value)}
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
                        Type
                    </label>
                    <input 
                        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                        value={type}
                        placeholder="Type"
                        onChange={(e) => setType(e.target.value)}
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
                    <button 
                        className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        onClick={handleAdd}>
                        ADD
                    </button>
                </div>
            </div>
        </div>
    )

}

export default AddMedia;