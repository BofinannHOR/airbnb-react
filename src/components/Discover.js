import React from 'react'
import grandma from '../images/grandma.jpg'
import tablet from '../images/tablet.jpg'
import goat from '../images/goat.jpg'

const Discover = () => {
    return (
        <>
       <section className="discover px-4 mx-4 block">
            <div className="flex py-2 m-4 px-12">
                <h2>Discover things to do</h2>
            </div>
            <div className="flex discoverphoto ">
                    <div className="discover-photos">
                        <div className="discover-photo"><img className="h-72 m-5 rounded-md" src={goat} alt="home" />
                            <p className="font-bold leading-relaxed">Experiences</p>
                            <p>Find unforgettables activities near you</p>
                        </div>
                        <div className="discover-photo"><img className="h-72 m-5 rounded-md"src={tablet} alt="home" />
                            <p className="font-bold leading-relaxed">Online Experiences</p>
                            <p>Live,Interactive activities led by Hosts</p>
                        </div>
                        <div className="discover-photo"><img className="h-72 m-5 rounded-md"src={grandma} alt="home" />
                            <p className="font-bold leading-relaxed">Featured collection Wanderlust</p>
                            <p>Travel from home with online Experiences</p>
                        </div>
                    </div>
                </div>
       </section>
        </>
    )
}

export default Discover
