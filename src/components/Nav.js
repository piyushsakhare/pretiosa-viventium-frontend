import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.svg'

function Nav() {

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
                <NavLink className="mr-4" to='/signin' >SIGN IN</NavLink>
                <NavLink to='/signup'>SIGN UP</NavLink>
            </div>
        </div>
    )
}

export default Nav;