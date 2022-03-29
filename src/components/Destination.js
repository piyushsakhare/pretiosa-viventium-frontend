import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import cabinscottages from '../assets/cabins-cottages.jpg'


function Destination() {

    const location = useLocation()
    const destination = location.state
    const imgarray = [
        destination.destination.image1,
        destination.destination.image2,
        destination.destination.image3
    ]
    const [img,setImg] = useState(imgarray[0])
    const [index,setIndex] = useState(0)
    let i = 0
    function handleImg(){
        if(index === 2){
            setImg(imgarray[0])
            setIndex(0)
        }
        else {
            setImg(imgarray[index + 1])
            setIndex(index + 1)
        }
    }
    
    return (
        <div className='my-12'>
            <div className='flex' >
                <div className='w-2/3 flex' >
                    <img src={img} ></img>
                    <button onClick={handleImg} ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-20 -ml-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                         />
                        </svg>
                    </button>
                </div>
                <div className='w-1/3 ml-12'>
                    <h1 className='text-4xl font-semibold mb-8' >{destination.destination.title}</h1>
                    <p>{destination.destination.description}</p>
                    <p>{destination.destination.location}</p>
                    <h2 className='font-semibold my-2' >${destination.destination.price} / night  </h2>
                    <button className='p-2 bg-black text-white ' >Check Availability</button>
                </div>
            </div>
        </div>
    )
}

export default Destination