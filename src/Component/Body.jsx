import React from "react";

const Body = () => {
    return (
        <div className="lg:flex lg:items-center lg:justify-between px-4 lg:px-16">
            <div className="lg:w-1/2 lg:order-2 flex items-center justify-center relative">
                <img
                    src="./assets/Blue-Shape.svg"
                    alt="1st"
                    className="-rotate-45 h-64 md:h-92 lg:h-[400px]"
                />
                <img
                    src="./assets/Pink-Shape.svg"
                    alt="2nd"
                    className="absolute -rotate-[35deg] h-64 md:h-72 lg:h-[400px]"
                />
                <img
                    src="./assets/Purple-Shape.svg"
                    alt="3rd"
                    className="absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]"
                />
                <img
                    src="./assets/Hero-Model.png"
                    alt="Hero"
                    className="absolute h-64 md:h-72 lg:h-[400px]"
                />
            </div>
            <div className="lg:w-1/2 lg:order-1 space-y-4">
                <h1 className="text-5xl font-bold font-playfair leading-tight">
                    Host Your Website in less than 5 minutes
                </h1>
                <p className="text-2xl font-light font-lato">
                    With Hoster, your website is always up. It needs a maximum of 5 minutes with the most affordable pricing.
                </p>
                <form action="" className="flex flex-col gap-4 md:flex-row">
                    <input
                        className="rounded-md px-4 py-3 placeholder:text-gray-400"
                        type="email"
                        placeholder="example123@host.com"
                    />
                    <button className="rounded-md px-4 py-3 bg-gradient-to-r from-red-400 to-blue-400 text-xs text-white hover:bg-blue-600">
                        Join Waitlist
                    </button>
                </form>
                <div className="flex items-center gap-2">
                    <img src="./assets/Checkmark.svg" alt="Tick" />
                    <p className="font-lato text-gray-400">
                        No spam ever. Unsubscribe anytime.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Body;
