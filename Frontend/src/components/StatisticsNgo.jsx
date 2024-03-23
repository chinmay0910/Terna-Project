import React from "react";

const StatisticsNgo = () => {
    return(
        <div className="w-full p-8 flex flex-row">
            <h1 className="lalezar-regular text-6xl my-10 ms-10 w-[35%]">THE 3 GOALS</h1>
            
            <div className="w-[55%] flex flex-row">
                <div className="flex flex-col my-10 mx-10 ms-16 text-center">
                    <h1 className="lalezar-regular text-5xl ">170</h1>
                    <p>Target</p>
                </div>
                <div className="flex flex-col my-10 mx-10 text-center">
                    <h1 className="lalezar-regular text-5xl ">30</h1>
                    <p>Events</p>
                </div>
                <div className="flex flex-col my-10 mx-10 text-center">
                    <h1 className="lalezar-regular text-5xl ">50</h1>
                    <p>Publications</p>
                </div>
                <div className="flex flex-col my-10 mx-10 me-16 text-center">
                    <h1 className="lalezar-regular text-5xl ">78</h1>
                    <p>Actions</p>
                </div>
            </div>

        </div>  
    )

}

export default StatisticsNgo;
