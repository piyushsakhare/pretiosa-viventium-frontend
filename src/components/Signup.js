function Signup() {
    return(
        <div className='grid place-content-center my-24 ' >
            <div className="p-8 bg-gray-200">
                <form className="flex-col flex w-96">
                <label>First Name : </label>
                    <input className="p-2 mb-6 border border-black" type='email' placeholder="Enter Email" ></input>
                    <label>Email : </label>
                    <input className="p-2 mb-6 border border-black" type='email' placeholder="Enter Email" ></input>
                    <label>Password : </label>
                    <input className="p-2 mb-8 border border-black" type='password' placeholder="Enter Password" ></input>
                    <label>Confirm Password : </label>
                    <input className="p-2 mb-8 border border-black" type='password' placeholder="Enter Password" ></input>
                    <button className="bg-black text-white font-medium p-2">SIGN UP</button>
                </form>
            </div>
        </div>
    )
}

export default Signup