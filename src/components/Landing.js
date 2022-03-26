import main from '../assets/main.jpg'
import cabinscottages from '../assets/cabins-cottages.jpg'

function Landing() {
    return (
        <div >
            <div className="flex">
                <div className="w-2/3 mt-16">
                    <h1 className='text-8xl font-bold'>Stunning places to stay</h1>
                    <p className='mt-16 w-1/2'>Make your trip memorable and comfortable by choosing to stay in luxurious houses</p>
                    <button className='mt-16 p-2 bg-black text-white'>Select Destination</button>
                </div>
                <div className="w-1/3">
                    <img src={main} ></img>
                </div>
            </div>
            <div className='flex my-24' >
                <div className='w-1/2' >
                    <img src={cabinscottages}  ></img>
                </div>
                <div className='w-1/2 pl-12'>
                    <h1 className='text-5xl font-semibold mb-16' >Cabins & Cottages</h1>
                    <p className='mb-16' >Prefer to stay in Cabins & Cottages and be onr with nature. Check out cottages eith all the ammenities included for your comfort and relaxation. Cabins within nature and no one to disturb your peaceful time.</p>
                    <button className=' p-2 bg-black text-white'>Cabins & Cottages</button>
                </div>
            </div>
            <div className='flex my-24' >
                <div className='w-1/2 pr-12'>
                    <h1 className='text-5xl font-semibold mb-16' >Entire Homes</h1>
                    <p className='mb-16' >Prefer to stay in Entire Homes and be onr with nature. Check out cottages eith all the ammenities included for your comfort and relaxation. Cabins within nature and no one to disturb your peaceful time.</p>
                    <button className=' p-2 bg-black text-white'>Entire Homes</button>
                </div>
                <div className='w-1/2' >
                    <img src={cabinscottages}  ></img>
                </div>
            </div>
            <div className='flex my-24' >
                <div className='w-1/2' >
                    <img src={cabinscottages}  ></img>
                </div>
                <div className='w-1/2 pl-12'>
                    <h1 className='text-5xl font-semibold mb-16' >Unique Stays</h1>
                    <p className='mb-16' >Prefer to stay in Unique Stays and be onr with nature. Check out cottages eith all the ammenities included for your comfort and relaxation. Cabins within nature and no one to disturb your peaceful time.</p>
                    <button className=' p-2 bg-black text-white'>Unique Stays</button>
                </div>
            </div>
        </div>
    )
}

export default Landing;