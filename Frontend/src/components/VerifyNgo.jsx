import React, { useState, useEffect } from 'react';

const NGOList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleStatusUpdate = async (id, newStatus) => {
        try {
            const response = await fetch(`http://localhost:5000/api/auth/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ verified: true })
            });
            
            if (!response.ok) {
                throw new Error('Failed to update status');
            }
    
            // Update the local state to reflect the change
            setData(data.map(item => {
                if (item._id === id) {
                    return { ...item, verified: true };
                }
                return item;
            }));
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };
    

    return (
        <div className='mt-16 p-8'>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">Name of the NGO</th>
                        <th className="border px-4 py-2">NGO Description</th>
                        <th className="border px-4 py-2">NGO Location</th>
                        <th className="border px-4 py-2">Goals</th>
                        <th className="border px-4 py-2">Organizationzational Size</th>
                        <th className="border px-4 py-2">Declaration</th>
                        <th className="border px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => (
                        <tr key={i + 1}>
                            <td className="border px-4 py-2">{i + 1}</td>
                            <td className="border px-4 py-2">{item.ngo_name}</td>
                            <td className="border px-4 py-2">{item.ngo_desc}</td>
                            <td className="border px-4 py-2">{item.ngo_location}</td>
                            <td className="border px-4 py-2">{item.goal}</td>
                            <td className="border px-4 py-2">{item.organizationalSize}</td>
                            <td className="border px-4 py-2">{item.Declaration ? "True" : "False"}</td>
                            <td className="border px-4 py-2">
                                {
                                    item.verified ?
                                        <>
                                            <h1>NGO. Verified</h1>
                                        </>
                                        :
                                        <div className='grid grid-cols-2'>
                                            <button
                                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2 flex flex-row justify-center items-center"
                                                onClick={() => handleStatusUpdate(item._id, true)}
                                            >
                                                Approve
                                            </button>
                                            <button
                                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex flex-row justify-center items-center"
                                                onClick={() => handleStatusUpdate(item._id, false)}
                                            >
                                                Reject
                                            </button>
                                        </div>
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NGOList;
