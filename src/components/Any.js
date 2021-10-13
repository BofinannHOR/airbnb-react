import React from 'react'
import home from '../images/home.jpg'
import dog from '../images/dog.jpg'
import boat from '../images/boat.jpg'
import home1 from '../images/home1.jpg'

const Any = () => {
    return (
        <>
            <section className="any px-4 mx-4">
                <div className="flex py-2 m-4 px-12">
                    <h2>Live anywhere</h2>
                </div>
                <div className="flex anyphoto ">
                    <div className="any-photos">
                        <div className="any-photo"><img className="h-72 m-5 rounded-md" src={home} alt="home" />
                            <p>Outdoor getaways</p>
                        </div>
                        <div className="any-photo"><img className="h-72 m-5 rounded-md"src={boat} alt="home" />
                            <p>Unique stays</p>
                        </div>
                        <div className="any-photo"><img className="h-72 m-5 rounded-md"src={dog} alt="home" />
                            <p>Entire homes</p>
                        </div>
                        <div className="any-photo"><img className="h-72 m-5 rounded-md"src={home1} alt="home" />
                            <p>Pet allowed</p>
                        </div>
    
                    </div>
                </div>
            </section>
        </>
    )
}

export default Any
