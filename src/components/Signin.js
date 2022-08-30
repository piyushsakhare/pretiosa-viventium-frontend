import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { login } from "./auth/apiCalls"
import { AuthContext } from "./auth/AuthContext"

function Signin() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const {isFetching, dispatch} = useContext(AuthContext)
    const navigate = useNavigate()

    function handleLogin(e) {
        e.preventDefault()
            login({email, password}, dispatch)
            navigate("/")
    }

    return(
        <div className='grid place-content-center my-24 ' >
            <div className="p-8 bg-gray-200">
                <form className="flex-col flex md:w-96 w-64">
                    <label>Email : </label>
                    <input className="p-2 mb-6 border border-black" type='email' placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} ></input>
                    <label>Password : </label>
                    <input className="p-2 mb-8 border border-black" type='password' placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} ></input>
                    <button onClick={handleLogin} className="bg-black text-white font-medium p-2" disabled={isFetching}>SIGN IN</button>
                    <p className="mt-4" >Not a member ? <Link className="font-medium" to="/signup" >SignUp</Link></p>
                        <p>Dummy id : prajwalthorat@gmail.com password: Prajwal123 </p>
                </form>
            </div>
        </div>
    )
}

export default Signin
