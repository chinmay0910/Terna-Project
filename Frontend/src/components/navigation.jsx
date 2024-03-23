import React, { useEffect, useState } from "react";
import LOGO from "/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import "../App.css"
import { useNavigate } from "react-router-dom";


function Navigation() {
    const [user, setUser] = useState();
    const [IsSignin, setIsSignin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            await getUser();


            if (window.localStorage.getItem("UN-auth-token")) {
                setIsSignin(true);
                await getUser();
            }
            else {
                navigate("/signin");
            }

        })()
    }, [])




    const getUser = async () => {
        // API call
        const response = await fetch('http://localhost:5000/api/auth/getuser', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Auth-Token": localStorage.getItem('UN-auth-token')
            },
        });
        const json = await response.json();
        await setUser(json)
        console.log(user);
    }

    const handleSignout = async () => {
        localStorage.removeItem('UN-auth-token');
        await getUser();
        navigate('/signin');
        setIsSignin(false);
        await getUser();
    }

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
                    {/* <FontAwesomeIcon className="w-[20%] text-3xl" icon={faUser} /> */}
                </div>
            </div>

            <div className="sticky top-0 bg-gray-500">
                <nav className="flex flex-row justify-center" aria-label="Global">
                    <div className="border-l border-white"></div>
                    <a href="/" className="text-white hover:font-bold hover:text-white  hover:bg-gray-900 p-4 mx-12">Home</a><div className="border-l border-white"></div>                  
                    <a href="/data" className="text-white hover:font-bold hover:text-white  hover:bg-gray-900 p-4 mx-12">Data Visualization</a><div className="border-l border-white"></div>
                {/* {
                    user.role == "gov"
                    ?
                    <>
                    <a href="/govrn" className="text-white hover:font-bold hover:text-white  hover:bg-gray-900 p-4 mx-12">Government</a><div className="border-l border-white"></div>
                    </>
                    :
                    ""
                } */}
                
                
                {/* {
                    user.role == "gov"
                    ?
                    <>
                    <a href="/govrn" className="text-white hover:font-bold hover:text-white  hover:bg-gray-900 p-4 mx-12">Government</a><div className="border-l border-white"></div>
                    </>
                    :
                    ""
                } */}
                    {/* {
                        user.role == "sa"
                        ? 
                        <>
                        <a href="/sa" className="text-white hover:font-bold hover:text-white  hover:bg-gray-900 p-4 mx-12">Super Admin</a><div className="border-l border-white"></div>
                        </>
                        :
                        user.role == "ngo"
                        ?
                        <>
                        <a href="/ngo" className="text-white hover:font-bold hover:text-white  hover:bg-gray-900 p-4 mx-12">N.G.O</a>
                        </>
                        :
                        ""
                    } */}


                    {
                        IsSignin ?
                            <button className="text-white hover:font-bold hover:text-white  hover:bg-gray-900 p-4" onClick={handleSignout}>Logout</button>
                            :
                            <>
                                <a href="/signin" className="text-white hover:font-bold hover:text-white  hover:bg-gray-900 p-4 mx-12">login</a><div className="border-l border-white"></div>
                            </>

                    }

                </nav>
            </div>
        </>
    )
}

export default Navigation;