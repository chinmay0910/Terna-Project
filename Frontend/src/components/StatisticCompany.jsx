import React from "react";

const StatisticsCompany = () => {
    return(
        <div className="w-full p-8 flex flex-row">
            <h1 className="lalezar-regular text-6xl my-10 ms-10 w-[35%]">Our Contribution</h1>
            
            <div className="w-[55%] flex flex-row">
                <div className="flex flex-col my-10 mx-10 ms-16 text-center">
                    <h1 className="lalezar-regular text-5xl ">170 kg+</h1>
                    <p>Food Donated </p>
                </div>
                <div className="flex flex-col my-10 mx-10 text-center">
                    <h1 className="lalezar-regular text-5xl ">5k+</h1>
                    <p>Helped People </p>
                </div>
                <div className="flex flex-col my-10 mx-10 text-center">
                    <h1 className="lalezar-regular text-5xl ">10</h1>
                    <p>Collabration with NGOs</p>
                </div>
                {/* <div className="flex flex-col my-10 mx-10 me-16 text-center">
                    <h1 className="lalezar-regular text-5xl ">78</h1>
                    <p>Actions</p>
                </div> */}
            </div>

        </div>  
    )

}

export default StatisticsCompany;
