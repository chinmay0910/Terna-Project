import React from "react";
import LOGO from "../../public/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import "../App.css"


function Navigation() {
    return (
        <>
            <div className="flex flex-row w-[80%] mx-auto py-8">
                <div className="w-[10%]">
                    <img src={LOGO} alt="logo" />
                </div>
                <div className="flex flex-col text-left ms-16 w-[50%]">
                    <div className="font-bold text-2xl " >Department of Economic and Social Affairs</div>
                    <div className="text-2xl">Sustainable Development</div>
                </div>

                <div className="w-[40%] flex justify-end items-center">
                    <div className="bg-[#f2f2f2] w-[80%] flex flex-row items-center h-[40px]">
                        <input type="text" className=" outline-none bg-transparent w-[85%] p-2" placeholder="search here..." />
                        <FontAwesomeIcon className="w-[15%] bg-[#00adef] p-0 m-0 h-full text-white" icon={faMagnifyingGlass} />
                    </div>
                    <FontAwesomeIcon className="w-[20%] text-3xl" icon={faUser} />
                </div>
            </div>

            <div className="sticky top-0 bg-gray-500">
                <nav className="flex flex-row justify-center" aria-label="Global">
                    <div className="border-l border-white"></div>
                    <a href="#" className="text-white hover:font-bold hover:text-white  hover:bg-gray-900 p-4">Home</a><div className="border-l border-white"></div>
                    <a href="#" className="text-white hover:font-bold hover:text-white  hover:bg-gray-900 p-4">About</a><div className="border-l border-white"></div>
                    <a href="#" className="text-white hover:font-bold hover:text-white  hover:bg-gray-900 p-4">Engage</a><div className="border-l border-white"></div>
                    <a href="#" className="text-white hover:font-bold hover:text-white  hover:bg-gray-900 p-4">SDG Actions</a><div className="border-l border-white"></div>
                    <a href="#" className="text-white hover:font-bold hover:text-white  hover:bg-gray-900 p-4">login</a><div className="border-l border-white"></div>
                </nav>
            </div>
        </>
    )
}

export default Navigation;