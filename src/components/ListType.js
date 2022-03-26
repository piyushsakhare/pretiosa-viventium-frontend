import axios from "axios";
import { useContext, useEffect, useState } from "react";
import List from "./List";
import {AuthContext} from "./auth/AuthContext"


function Cottages({type}) {
    let listType
    if(type === "cottages") listType = "Cabins & Cottages"
    else if(type === "homes") listType = "Entire Homes"
    else listType = "Unique Stays"

    const [location,setLocation] = useState()
    const [searchInput,setSearchInput] = useState("")
    const [destinations,setDestination] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        setLocation(searchInput)
    }

    const {user} = useContext(AuthContext)

    useEffect(() => {
        try{
            axios.get(`https://pretiosa-viventium-api.herokuapp.com/api/destinations/`, {
                headers : {
                    token : `Bearer `+ JSON.parse(localStorage.getItem("user")).accessToken 
                }
            })
            .then( res => {  setDestination(res.data) })
        }catch(err){
            console.log(err)
        }
       
    },[location])

    return (
        <div>
            <div>
                <h1 className='text-5xl font-semibold mt-10' >{listType}</h1>
                <form onSubmit={handleSubmit} >
                    <input placeholder="Enter Location" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} ></input>
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className='my-16 flex' >
                {destinations.map( (destination) => { return (
                    <List key={destination._id} destination={destination} />
                )} )}
            </div>
        </div>
    )
}

export default Cottages;