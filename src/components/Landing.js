import main from '../assets/main.jpg'
import cottage from '../assets/cottage.jpg'
import home from '../assets/modern-home.jpg'
import unique from '../assets/unique-stay.jpg'
import { Link } from 'react-router-dom'

function Landing() {
    return (
        <div >
            <div className="md:flex">
                <div className="md:w-2/3 mt-16">
                    <h1 className='sm:text-8xl text-6xl font-bold'>Stunning places to stay</h1>
                    <p className='mt-16 lg:w-1/2'>Make your trip memorable and comfortable by choosing to stay in luxurious houses</p>
                    <button className='mt-16 p-2 bg-black text-white'>Select Destination</button>
                </div>
                <div className="w-1/3 lg:block hidden">
                    <img src={main} ></img>
                </div>
            </div>
            <div className='md:flex my-24' >
                <div className='md:w-1/2' >
                    <img src={cottage}  ></img>
                </div>
                <div className='md:w-1/2 md:pl-12'>
                    <h1 className='text-5xl font-semibold md:mb-16 my-8' >Cabins & Cottages</h1>
                    <p className='mb-16' >Prefer to stay in Cabins & Cottages and be onr with nature. Check out cottages eith all the ammenities included for your comfort and relaxation. Cabins within nature and no one to disturb your peaceful time.</p>
                    <Link to='cottages' className=' p-2 bg-black text-white'>Cabins & Cottages</Link>
                </div>
            </div>
            <div className='md:flex my-24' >
                <div className='md:w-1/2 md:pr-12 mb-8'>
                    <h1 className='text-5xl font-semibold md:mb-16 my-8' >Entire Homes</h1>
                    <p className='mb-16' >Prefer to stay in Entire Homes and be onr with nature. Check out cottages eith all the ammenities included for your comfort and relaxation. Cabins within nature and no one to disturb your peaceful time.</p>
                    <Link to="homes" className=' p-2 bg-black text-white'>Entire Homes</Link>
                </div>
                <div className='md:w-1/2' >
                    <img src={home}  ></img>
                </div>
            </div>
            <div className='md:flex my-24' >
                <div className='md:w-1/2' >
                    <img src={unique}  ></img>
                </div>
                <div className='md:w-1/2 md:pl-12'>
                    <h1 className='text-5xl font-semibold md:mb-16 my-8' >Unique Stays</h1>
                    <p className='mb-16' >Prefer to stay in Unique Stays and be onr with nature. Check out cottages eith all the ammenities included for your comfort and relaxation. Cabins within nature and no one to disturb your peaceful time.</p>
                    <Link to="unique" className=' p-2 bg-black text-white'>Unique Stays</Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;