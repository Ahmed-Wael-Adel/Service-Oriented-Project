import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

const AddBook = () => {

    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [auther, setAuther] = useState("");
    const [publishedYear, setPublishedYear] = useState("");
    const [price, setPrice] = useState();
    


    const handleAdd = async() => {
        const response = await axios.post("http://localhost:3000/books/add", {
            title,
            auther,
            publishedYear,
            price
        });

        if (response.data.message === "Book Added")
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
                        Title
                    </label>
                    <input 
                        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                        value={title}
                        placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label className="text-sm font-medium text-gray-600">
                        Auther
                    </label>
                    <input 
                        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                        value={auther}
                        placeholder="Auther"
                        onChange={(e) => setAuther(e.target.value)}
                    />
                    <label className="text-sm font-medium text-gray-600">
                        Published Year
                    </label>
                    <input 
                        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                        value={publishedYear}
                        placeholder="PublishedYear"
                        onChange={(e) => setPublishedYear(e.target.value)}
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

export default AddBook;