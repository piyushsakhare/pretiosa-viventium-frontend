import { useLocation } from 'react-router-dom'
import cabinscottages from '../assets/cabins-cottages.jpg'


function Destination() {

    const location = useLocation()
    const destination = location.state

    
    return (
        <div className='my-12'>
            <div className='flex' >
                <div className='w-2/3' >
                    <img src={destination.destination.image1} ></img>
                </div>
                <div className='w-1/3 ml-12'>
                    <h1 className='text-4xl font-semibold mb-8' >{destination.destination.title}</h1>
                    <p>{destination.destination.description}</p>
                    <h2 className='font-semibold my-2' >${destination.destination.price} / night  </h2>
                    <button className='p-2 bg-black text-white ' >Check Availability</button>
                </div>
            </div>
        </div>
    )
}

export default Destination