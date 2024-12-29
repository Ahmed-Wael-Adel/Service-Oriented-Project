import React,{ useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Media = () => {

    const navigate = useNavigate(); 
    const [media, setMedia] = useState([]);

    useEffect(() => {
        const response = async () => await axios.get("http://localhost:3000/media/")
        .then( response => {
            setMedia(response.data);
            console.log("=====>", response.data);
        })
        .catch(error => {
            console.log('Error fetching Media', error);
        });

        response()

    }, []);

    const handleAdd = () =>{
        navigate("/AddMedia")
    }

    const handleUpdate = (x) => {
        navigate("/UpdateMedia", { state: x })
    }

    const handleDelete = async(id) => {
        const response = await axios.delete(`http://localhost:3000/media/delete/${id}`)
    }

    const handleHome = () =>{
        navigate(-1)
    }

    return(
        <div className="">
            {media.map((x) => (
                <div key={x._id} className=" flex flex-row justify-between border-solid border-black rounded-lg text-left m-5 text border border-zinc-300 rounded-lg bg-gray p-5">
                    <div className="font-bold">
                        <h1 className="text-black ">Name: {x.name}</h1>
                        <h1>Publisher: {x.publisher}</h1>
                        <h1>Description: {x.description}</h1>
                        <h1>Price: {x.price}$</h1>
                        <h1>Type: {x.type}</h1>
                    </div>
                    <div className=" flex flex-row jsutify-between mr-5 items-center">
                        <button className="mr-10 bg-blue-800 hover:bg-blue-900 h-12 w-20 text-white rounded"
                                onClick={()=>handleUpdate(x)}>
                            Update
                        </button>
                        <button className=" bg-blue-800 hover:bg-blue-900 h-12 w-20 text-white rounded"
                                onClick={()=>handleDelete(x._id)}>
                            Delete
                        </button>
                    </div>
                </div>
            ))}
            <div className="flex flex-col justify-center items-center mt-10">
                <button className=" bg-blue-800 hover:bg-blue-900 h-12 w-64 text-white rounded mb-5"
                        onClick={handleAdd}>
                    Add
                </button>
                <button className=" bg-blue-800 hover:bg-blue-900 h-12 w-64 text-white rounded"
                        onClick={handleHome}>
                    Home
                </button>
            </div>
            
        </div>
    )

}

export default Media;