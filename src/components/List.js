import { Link } from 'react-router-dom'

function List({destination}) {

   const id = destination._id
    return (
        <>
        
        <Link to={"/destination"} state={{destination : destination}}  >
            <div className='mr-5 mb-12' >
                <img src={destination.image1} ></img>
                <h1 className='mt-2 font-medium'>{destination.title}</h1>
                <p>{destination.description}</p>
                <h2>${destination.price} / night <button className='p-2 bg-black text-white float-right' >Book Now</button> </h2>
            </div>
        </Link>
        </>
    )
}

export default List