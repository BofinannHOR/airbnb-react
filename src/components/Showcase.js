import React from 'react'
import search from '../images/search.svg'

const Showcase = () => {
    return (
        <>
           <section className="showcase">
               <div className="flex flex-col items-center justify-center pt-20">
                   <div className="flex-showcase flex flex-nowrap tracking-wide rounded-full px-12 shadow-lg"> 
                    <button className="px-6 border-r-2 border-black-300">
                        <p className="font-bold leading-5 text-xs ">location</p>
                        <p className="font-light text-gray-500">where are y...</p>
                    </button>
                    <button className="px-6 border-r-2 border-black-300">
                        <p className="font-bold leading-5 text-xs">Check In</p>
                        <p className="font-light text-gray-500">Add dates</p>
                    </button>
                    <button className="px-6 border-r-2 border-black-300">
                        <p className="font-bold leading-5 text-xs">Check out</p>
                        <p className="font-light text-gray-500">Add date</p>
                    </button>
                    <button className="pl-6 pr-6">
                        <div>
                        <p className="font-bold leading-5 text-xs">Guests</p>
                        <p className="font-light text-gray-500">Add guests</p>
                        </div>
                    </button>
                    <button><img src={search} alt="search" /></button>
                   </div>
                   <div className="flex-perfect flex flex-col">
                       <p className="pb-2 text-xl font-semibold">Not sure where to go?Perfect</p>
                       <button className="flex-nowrap text-xl tracking-wide rounded-full py-3 px-9 shadow-lg ">
                           <p className="gradient font-semibold">Im flexible</p>
                       </button>
                   </div>
               </div>
            </section> 
        </>
    )
}

export default Showcase
