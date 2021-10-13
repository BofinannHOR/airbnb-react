import { useState, useEffect } from "react";
import {header} from "../db/header"
import logo from "../images/logo.svg"


const Header = () => {
    const [headerLinks,setHeaderLinks] = useState(header)
    return (
        <>
        <header className="absolute px-12 mt-4 flex items-center justify-between w-full pt-3 ">
            <div className="ml-10 md:mr-5 ">
                <img src={logo} alt="logo" />
            </div>
          
            <nav className="navbar ">
                <ul className="">
                    {headerLinks.map(({id,title})=>(
                        <li className="px-3 pt-2 pb-4" key={id}>{title}</li>
                    ))}
                </ul>   
            </nav>

            <div className="flex button text-white items-center justify-center">
            <ul className="flex ">
                <li className="px-3"><button>Become a host</button></li>
                <li className="px-3"><img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-earth-nature-ecology-those-icons-lineal-color-those-icons.png" alt="earth"/></li>
                <li className="px-3"><button className="border border-white py-2 px-4 rounded-full">hello</button></li>
            </ul>
        </div>
            
            
        </header>
        </>
    )
}

export default Header
