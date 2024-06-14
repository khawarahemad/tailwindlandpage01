import React from "react"
import { FaBars } from "react-icons/fa";

const Header =() => {
    return (
        <div className="flex justify-between"> 
            <div className="flex items-center justify-center gap-2">
                <img src="./assets/Logo.svg" alt="LOGo" />
                <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl">Hoster Is hiring</button>
            </div>
            
            <ul className="hidden lg:flex gap-7 justify-between items-center">
                <li><a href="#">Explore Plans</a></li>
                <li><a href="#">Find Domain</a></li>
                <li><a href="#">Why Hoster</a></li>
                
            </ul>
            <div className="hidden lg:flex justify-center ">
            <button className="rounded-md px-4 py-3 bg-gradient-to-r from-red-400 to-blue-400 text-xs text-white hover:bg-blue-600 ">Join Waitlist</button>
            </div>
            <div className="lg:hidden">
            <FaBars/>
            </div>
        </div>
    )
}
export default Header