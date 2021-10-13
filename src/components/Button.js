import React from 'react'
import earth from '../images/globe.png'

const Button = () => {
    return (
        <div className="flex">
            <ul>
                <li><button>Become a host</button></li>
                <li><img src="https://img.icons8.com/external-those-icons-lineal-those-icons/48/000000/external-earth-nature-ecology-those-icons-lineal-those-icons-1.png" alt="earth"/></li>
                <li><button className="border border-black py-2 px-4 rounded-full">hello</button></li>
            </ul>
        </div>
    )
}

export default Button
