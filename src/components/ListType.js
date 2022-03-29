import axios from "axios";
import { useEffect, useState } from "react";
import List from "./List";


function Cottages({type}) {
    let listType
    if(type === "cottages") listType = "Cabins & Cottages"
    else if(type === "homes") listType = "Entire Homes"
    else listType = "Unique Stays"

    const [location,setLocation] = useState()
    const [loading,setLoading] = useState(true)
    const [searchInput,setSearchInput] = useState("")
    const [destinations,setDestination] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        setLocation(searchInput)
    }

    console.log(type)

    useEffect(() => {
        try{
            setLoading(true)
            axios.get(`https://pretiosa-viventium-api.herokuapp.com/api/destinations${type ? "?type="+type : ""}${location ? "&location=" + location : ""}`, {
                headers : {
                    token : `Bearer `+ JSON.parse(localStorage.getItem("user")).accessToken 
                }
            })
            .then( res => {  
                setDestination(res.data) 
                setLoading(false) 
            })
        }catch(err){
            console.log(err)
        }
       
    },[location,type])

    return (
        <div>
            <div className="flex justify-between mt-10 items-center" >
                <h1 className='text-5xl font-semibold ' >{listType}</h1>
                <form onSubmit={handleSubmit} >
                    <input className="p-2 border-2 rounded border-black " placeholder="Enter Location" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} ></input>
                    <button className="p-2 bg-black text-white" type="submit">Search</button>
                </form>
            </div>
            <div className='my-16 grid grid-cols-3 flex' >
                {loading ? (<div className='mr-5 mb-12'>
                    <div className='animate-pulse bg-slate-300 w-full h-40' ></div>
                    <div className='w-32 mt-2 bg-slate-300 h-2 rounded animate pulse' ></div>
                    <div className='mt-2 w-full bg-slate-300 h-2 rounded animate pulse' ></div>
                    <div className='mt-2 w-32 bg-slate-300 h-2 rounded animate pulse' ></div>
                </div>) : 
                 destinations.map( (destination) => { return (
                    <List key={destination._id} destination={destination}/>
                )} )}
            </div>
        </div>
    )
}

export default Cottages;