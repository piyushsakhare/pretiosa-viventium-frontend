import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../assets/logo.svg'
import  {AuthContext } from './auth/AuthContext'
import { useContext } from "react";
import { logouthandler } from "./auth/apiCalls";

function Nav() {

    const {user} = useContext(AuthContext)
    const {dispatch} = useContext(AuthContext)
    const navigate = useNavigate
    const handleLogout = () => {
        logouthandler(dispatch)
        navigate("/")
    }

    const [isScrolled,setIsScrolled] = useState(false)
    window.onscroll = () =>{
        setIsScrolled(window.scrollY === 0 ? false : true)
        return () => (window.onscroll = null)
    }

    return (
        <div className={ isScrolled ? "w-full fixed flex justify-between shadow-lg px-20 bg-white py-6" : "w-full fixed flex justify-between px-20 bg-white py-6"}>
            <NavLink to='/' ><img className="w-8" src={logo} ></img></NavLink>
            <div className="flex font-medium">
                <NavLink to='/cottages' >CABINS COTTAGES</NavLink>
                <NavLink to='/homes' className="mx-8">ENTIRE HOUSES</NavLink>
                <NavLink to='/unique' >UNIQUE STAYS</NavLink>
            </div>
            <div className="flex">
                {!user && <><NavLink className="mr-4" to='/signin' >SIGN IN</NavLink>
                <NavLink className="mr-4" to='/signup'>SIGN UP</NavLink></>}
                {user && <div className="profile mr-12" >
                    <img className="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABaElEQVRIid2VvU7DMBSFvxTaqQOvgFAZafsSiI3SlgJPwcDPzAiUDQYeAPVtmJNSYGSGwgBUNAy5Bitcxy5jj3SlyD7nXPs4cWDeUQF2gAGQAG9SiYz1hPMvdIAHIPXUPdCexXgBuFCMpsBQaqrM94FSSAPNPAHWLE5dGuV55z7zjiL6EsM86o6dtFzmFbI8tdW7oO3iEevg7cy2gBXFJCpooGEZ2NQmBspqzOFqETXQI0qBG62Btl1Tw1yTBnBXwFdjHRcIQl5Tu8bGdNFq4Ms6AlY9HIPUPNiH/BQoDsGPl93gViE+A9fALlADqlI1YE/mXhSd5kWP3wzfgSMx86EKHIvG6Lsa0f7QLgOM87gS7Qgou0htIX0C6zOYbwAT0aofmY2+ECfACcU3ZATsAx+iOQ1ZTYnsVjR5xsAB0ASWpJrAocwZ3plnMX/QIsvT98MZERCLC2Vgm+xuiYFXqVjGuhQc6HzgG4gFqEoxdLQYAAAAAElFTkSuQmCC"/>
                    <div className="options border p-3 w-24 bg-white" >
                        <button className="hover:bg-gray-200 p-1 rounded" ><Link to="profile" >Profile</Link></button>
                        <button onClick={handleLogout} className="hover:bg-red-600 hover:text-white p-1 rounded" >
                            Logout
                        </button>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Nav;