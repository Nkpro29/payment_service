import React from "react";
import arrow from "../assets/Vector.png";

function Header() {
    return (
        <>
            <div className="mx-auto bg-white shadow-lg shadow-gray-300 h-12 flex">
                <div className="w-8 h-8 rounded-full bg-dark-bg relative top-2 left-5">
                    <img src={arrow} className="block mx-auto relative top-2 w-2"/>
                </div>
                <p className="text-xl font-bold block mx-auto relative top-2">My Wallet</p>
            </div>
        </>
    )
}

export default Header;
