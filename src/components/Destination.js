import cabinscottages from '../assets/cabins-cottages.jpg'

function Destination({destination}) {
    return (
        <div className='my-12'>
            <div className='flex' >
                <div className='w-2/3' >
                    <img src={cabinscottages} ></img>
                </div>
                <div className='w-1/3 ml-12'>
                    <h1 className='text-4xl font-semibold mb-8' >Chalet Tropical - In The Woods</h1>
                    <p>8 guests 6 bedrooms 4 baths</p>
                    <h2 className='font-semibold my-2' >$299 / night  </h2>
                    <button className='p-2 bg-black text-white ' >Check Availability</button>
                </div>
            </div>
        </div>
    )
}

export default Destination