import Goal1 from "../../public/1.png";

const Card = () => {
    return (
        <div className="flex flex-row">
        <div className="relative w-1/4">
            <div className="bg-cover bg-center h-64 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                <div className="opacity-0 hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity">
                    <div className="text-white text-center">
                        <h3 className="text-xl font-semibold mb-2">Goal 1</h3>
                        <p className="text-gray-200 mb-4">End poverty in all its forms everywhere.</p>
                        <div className="flex justify-between">
                            <div className="text-sm">
                                <p className="text-gray-300">Targets: <span className="font-semibold">7</span></p>
                                <p className="text-gray-300">Events: <span className="font-semibold">103</span></p>
                            </div>
                            <div className="text-sm">
                                <p className="text-gray-300">Publications: <span className="font-semibold">49</span></p>
                                <p className="text-gray-300">Actions: <span className="font-semibold">1432</span></p>
                            </div>
                        </div>
                        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                            More Info
                        </button>
                    </div>
                </div>
            </div>
            {/* <img src={Goal1} alt="Goal 1" className="absolute inset-0 object-cover w-full h-full z-0" /> */}
        </div>
        <div className="relative w-1/4">
            <div className="bg-cover bg-center h-64 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                <div className="opacity-0 hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity">
                    <div className="text-white text-center">
                        <h3 className="text-xl font-semibold mb-2">Goal 1</h3>
                        <p className="text-gray-200 mb-4">End poverty in all its forms everywhere.</p>
                        <div className="flex justify-between">
                            <div className="text-sm">
                                <p className="text-gray-300">Targets: <span className="font-semibold">7</span></p>
                                <p className="text-gray-300">Events: <span className="font-semibold">103</span></p>
                            </div>
                            <div className="text-sm">
                                <p className="text-gray-300">Publications: <span className="font-semibold">49</span></p>
                                <p className="text-gray-300">Actions: <span className="font-semibold">1432</span></p>
                            </div>
                        </div>
                        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                            More Info
                        </button>
                    </div>
                </div>
            </div>
            {/* <img src={Goal1} alt="Goal 1" className="absolute inset-0 object-cover w-full h-full z-0" /> */}
        </div>
        <div className="relative w-1/4">
            <div className="bg-cover bg-center h-64 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                <div className="opacity-0 hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity">
                    <div className="text-white text-center">
                        <h3 className="text-xl font-semibold mb-2">Goal 1</h3>
                        <p className="text-gray-200 mb-4">End poverty in all its forms everywhere.</p>
                        <div className="flex justify-between">
                            <div className="text-sm">
                                <p className="text-gray-300">Targets: <span className="font-semibold">7</span></p>
                                <p className="text-gray-300">Events: <span className="font-semibold">103</span></p>
                            </div>
                            <div className="text-sm">
                                <p className="text-gray-300">Publications: <span className="font-semibold">49</span></p>
                                <p className="text-gray-300">Actions: <span className="font-semibold">1432</span></p>
                            </div>
                        </div>
                        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                            More Info
                        </button>
                    </div>
                </div>
            </div>
            {/* <img src={Goal1} alt="Goal 1" className="absolute inset-0 object-cover w-full h-full z-0" /> */}
        </div>
        </div>
    );
}

export default Card;
