import React from "react"

const Footer = () => {
    return (
        <div className="gap-12 md:flex-row md:justify-between">
            <div className="flex flex-col gap-12">
            <ul className="flex gap-2 font-lato" >
                <li><a href="#">Facebook</a></li>
                <li>
                    <a href="#">Instagram</a>
                </li>
                <li>
                    <a href="#">Twitter/X</a>
                </li>
            </ul>
            </div>
            <div className="flex gap-4 rounded-md px-4 py-3 bg-gradient-to-r from-purple-400 to-pink-400 text-xs text-white-400 ">
                <img src="./assets/Help-Avatar.svg" alt="AGENT" />
            <div className="">
                <p className="font-playfair">Have Any Questions?</p>
                <pre>Contact US;)</pre>
            </div>
            </div>
        </div>
    )
}
export default Footer