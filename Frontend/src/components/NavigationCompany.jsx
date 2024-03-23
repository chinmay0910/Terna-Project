import React from "react";
import LOGO from "/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import "../App.css"


function NavigationCompany() {
    return (
        <>
            {/* <div className="flex flex-row w-[80%] mx-auto py-8">
                <div className="w-[10%]">
                    <img src={LOGO} alt="logo" />
                </div>
                <div className="flex flex-col text-left ms-16 w-[50%]">
                    <div className="font-bold text-2xl " >Pratham Education Foundation</div>
                    <div className="text-2xl">Quality Education</div>
                </div> */}
                <div className="flex flex-row w-[80%] mx-auto py-8">
                <div className="w-[10%]">
                    <img src="https://logos-download.com/wp-content/uploads/2017/11/Food_Network_logo_red.png" alt="logo" />
                </div>
                <div className="flex flex-col text-left ms-16 w-[50%]">
                    <div className="font-bold text-2xl " >Food Network Limited</div>
                    <div className="text-2xl">Zero Hunger</div>
                </div>

                <div className="w-[40%] flex justify-end items-center">
                    {/* Add second logo */}
                    <div className="w-[30%] ml-auto">
                        <img src={LOGO} alt="logo" />
                    </div>

                {/* <div className="w-[40%] flex justify-end items-center"> */}
                    {/* <div className="bg-[#f2f2f2] w-[80%] flex flex-row items-center h-[40px]">
                        <input type="text" className=" outline-none bg-transparent w-[85%] p-2" placeholder="search here..." />
                        <FontAwesomeIcon className="w-[15%] bg-[#00adef] p-0 m-0 h-full text-white" icon={faMagnifyingGlass} />
                    </div> */}
                    {/* <FontAwesomeIcon className="w-[20%] text-3xl" icon={faUser} /> */}
                </div>
            </div>

            <div className="sticky top-0 bg-gray-500">
                <nav className="flex flex-row justify-center" aria-label="Global">
                    <div className="border-l border-white"></div>
                    <a href="#" className="text-white hover:font-bold hover:text-white  hover:bg-gray-900 p-4">Home</a><div className="border-l border-white"></div>
                    <a href="#" className="text-white hover:font-bold hover:text-white  hover:bg-gray-900 p-4">About</a><div className="border-l border-white"></div>
                    <a href="" className="text-white hover:font-bold hover:text-white  hover:bg-gray-900 p-4">Collabrations </a><div className="border-l border-white"></div>
                    {/* <a href="#" className="text-white hover:font-bold hover:text-white  hover:bg-gray-900 p-4">Upcomming Events </a><div className="border-l border-white"></div> */}
                    {/* <a href="#" className="text-white hover:font-bold hover:text-white  hover:bg-gray-900 p-4">Data Analysis </a><div className="border-l border-white"></div> */}
                </nav>
            </div>
        </>
    )
}

export default NavigationCompany;