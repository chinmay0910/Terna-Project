import React, { useState, useEffect } from 'react';
// import axios from 'axios';

function AllEventsData() {
  const [allData, setAllData] = useState([]);

  // useEffect(() => {
  //   fetchAllData();
  // }, []);

  // const fetchAllData = async () => {
  //   try {
  //     const response = await axios.get('https://event-management-system-ext9.onrender.com/api/data/',{
  //       method: "GET",
  //       headers: {
  //           "Content-Type": "application/json",
  //           "FrAngel-auth-token": localStorage.getItem('FrAngel-auth-token')
  //       },
  //   });
  //   setAllData(response.data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending from all':
        return 'orange';
      case 'Approved by Principal':
      case 'Approved by HOD':
      case 'Approved by Secretary':
        return 'green';
      case 'Rejected by Principal':
      case 'Rejected by HOD':
      case 'Rejected by Secretary':
        return 'red';
      default:
        return 'black';
    }
  };

  
  function extractDateComponents(dateString) {
    const date = new Date(dateString);

    const year = date.getFullYear();

    const month = date.getMonth() + 1;

    const day = date.getDate();

    return `${day}-${month}-${year}`;
  }
  
  return (
    <div className="container mx-auto mt-8">
       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
        Add Event
      </button>
      <div className="mt-4">
        <h1 className='text-2xl font-extrabold pb-8'>Event Details: </h1>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Event Name </th>
              <th className="border px-4 py-2">Event Type</th>
              <th className="border px-4 py-2">Goals</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Target</th>
              <th className="border px-4 py-2">Location</th>
              <th className="border px-4 py-2">Add collaborator</th>
              <th className="border px-4 py-2">collabration Status</th>
            </tr>
          </thead>
          <tbody>
            {allData.map((item, i) => (
              <tr key={i + 1}>
                <td className="border px-4 py-2">{i + 1}</td>
                <td className="border px-4 py-2">{item.committeeName}</td>
                <td className="border px-4 py-2">{item.eventType}</td>
                <td className="border px-4 py-2">{item.eventName}</td>
                <td className="border px-4 py-2">{item.convenorName}</td>
                <td className="border px-4 py-2">{extractDateComponents(item.eventDate)}</td>
                <td className="border px-4 py-2">{item.duration}</td>
                <td className="border px-4 py-2" style={{ color: getStatusColor(item.status) }}>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default AllEventsData;


