import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import profile from "../assets/default_profile.webp"
import { logouthandler } from "./auth/apiCalls"
import { AuthContext } from "./auth/AuthContext"

function Profile() {

    const {dispatch} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = () => {
        logouthandler(dispatch)
        navigate("/")
    }

    return (
        <div className="my-10 flex md:flex-row flex-col justify-between" >
            <div>
                <h1 className="text-5xl font-semibold mb-4" >Profile</h1>
                <p className="mb-2" >First Name : {JSON.parse(localStorage.getItem("user")).firstname}</p>
                <p className="mb-2" >Last Name : {JSON.parse(localStorage.getItem("user")).lastname}</p>
                <p className="mb-2" >Email : {JSON.parse(localStorage.getItem("user")).email}</p>
                <p className="mb-4" >UserID : {JSON.parse(localStorage.getItem("user"))._id}</p>
                <button className="p-2 bg-red-600 text-white" onClick={handleLogout} >Logout</button>
            </div>
            <div className="md:order-last -order-1" >
                <img className="w-48" src={profile} ></img>
            </div>
        </div>
    )
}

export default Profile