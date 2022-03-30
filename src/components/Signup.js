import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup() {

    const [confirmPassword,setConfirmPassword] = useState()
    const [firstname,setFirstname] = useState()
    const [lastname,setLastname] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate()
    function handleSubmit (e) {
        e.preventDefault()
        if(password === confirmPassword){
            try{
                axios.post(`https://pretiosa-viventium-api.herokuapp.com/api/auth/signup`,{firstname, lastname, email, password})
                navigate("/signin")
            }
            catch (err){
                console.log(err)
            }
        }
        
    }


    return(
        <div className='grid place-content-center my-24 ' >
            <div className="p-8 bg-gray-200">
                <form className="flex-col flex md:w-96 w-64">
                    <label>First Name : </label>
                    <input onChange={(e) => setFirstname(e.target.value)} className="p-2 mb-6 border border-black" type='text' placeholder="Enter First Name" ></input>
                    <label>Last Name : </label>
                    <input onChange={(e) => setLastname(e.target.value)} className="p-2 mb-6 border border-black" type='text' placeholder="Enter Last Name" ></input>
                    <label>Email : </label>
                    <input onChange={(e) => setEmail(e.target.value)} className="p-2 mb-6 border border-black" type='email' placeholder="Enter Email" ></input>
                    <label>Password : </label>
                    <input onChange={(e) => setPassword(e.target.value)} className="p-2 mb-8 border border-black" type='password' placeholder="Enter Password" ></input>
                    <label>Confirm Password : </label>
                    <input onChange={(e) => setConfirmPassword(e.target.value)} className="p-2 mb-8 border border-black" type='password' placeholder="Enter Password" ></input>
                    <button onClick={handleSubmit} className="bg-black text-white font-medium p-2">SIGN UP</button>
                </form>
            </div>
        </div>
    )
}

export default Signup