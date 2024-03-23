import React from "react";

const Statistics = () => {
    return(
        <div className="w-full p-8 flex flex-row">
            <h1 className="lalezar-regular text-6xl my-10 ms-10 w-[35%]">THE 17 GOALS</h1>
            
            <div className="w-[55%] flex flex-row">
                <div className="flex flex-col my-10 mx-10 ms-16 text-center">
                    <h1 className="lalezar-regular text-5xl ">1700</h1>
                    <p>Target</p>
                </div>
                <div className="flex flex-col my-10 mx-10 text-center">
                    <h1 className="lalezar-regular text-5xl ">3894</h1>
                    <p>Events</p>
                </div>
                <div className="flex flex-col my-10 mx-10 text-center">
                    <h1 className="lalezar-regular text-5xl ">1348</h1>
                    <p>Publications</p>
                </div>
                <div className="flex flex-col my-10 mx-10 me-16 text-center">
                    <h1 className="lalezar-regular text-5xl ">7835</h1>
                    <p>Actions</p>
                </div>
            </div>

        </div>  
    )

}

export default Statistics;
