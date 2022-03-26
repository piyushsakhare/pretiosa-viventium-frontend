import { Link } from 'react-router-dom'
import cabinscottages from '../assets/cabins-cottages.jpg'

function List({destination}) {
    return (
        <Link to={{ pathname : "/destination", destination : destination }} >
            <div className='w-1/3 mr-5' >
                <img src={cabinscottages} ></img>
                <h1 className='mt-2 font-medium'>Beautiful Paradise</h1>
                <p>8 guests 6 bedrooms 4 baths</p>
                <h2>$299 / night <button className='p-2 bg-black text-white float-right' >Book Now</button> </h2>
            </div>
        </Link>
    )
}

export default List