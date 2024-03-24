import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const EventsAction = () => {
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [actionData, setActionData] = useState({
        eventId: null,
        heading: "",
        description: ""
    });

    useEffect(() => {
        fetchEvents();
    }, []);

    const createAction = (eventId) => {
        setActionData({ eventId, heading: "", description: "" });
        setShowModal(true);
    };

    const handleActionInputChange = (e) => {
        const { name, value } = e.target;
        setActionData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSaveAction = async () => {
        try {
            // Prepare the data to send to the backend
            const requestData = {
                heading: actionData.heading,
                description: actionData.description
            };
    
            // Send a POST request to your backend endpoint
            const response = await fetch(`http://localhost:5000/api/events/${actionData.eventId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            });
    
            if (!response.ok) {
                throw new Error('Failed to add action to event');
            }
    
            const responseData = await response.json();
            console.log('Action added successfully:', responseData);
            setShowModal(false); // Close the modal after successfully adding the action
        } catch (error) {
            console.error('Error adding action to event:', error);
            // Handle error, e.g., display an error message to the user
        }
    };
    

    const fetchEvents = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/events/getallevents');
            if (!response.ok) {
                throw new Error('Failed to fetch events');
            }
            const data = await response.json();
            setEvents(data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    return (
        <div className='mt-16 p-8'>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Sr. NO</th>
                        <th className="border px-4 py-2">Events Name</th>
                        <th className="border px-4 py-2">Events Description</th>
                        <th className="border px-4 py-2">Events Location</th>
                        <th className="border px-4 py-2">Events Date</th>
                        <th className="border px-4 py-2">Goals</th>
                        <th className="border px-4 py-2">collaborator</th>
                        <th className="border px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {events && events.map((item, i) => (
                        <tr key={i + 1}>
                            <td className="border px-4 py-2">{i + 1}</td>
                            <td className="border px-4 py-2">{item.title}</td>
                            <td className="border px-4 py-2">{item.description}</td>
                            <td className="border px-4 py-2">{item.location}</td>
                            <td className="border px-4 py-2">{item.date}</td>
                            <td className="border px-4 py-2">{item.goal}</td>
                            <td className="border px-4 py-2">{item.collaborators.length == 0 ?"No Collaborators": item.collaborators.join(', ')}</td>
                            <td className="border px-4 py-2">
                                <FontAwesomeIcon icon={faPlus} onClick={() => createAction(item._id)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showModal && (
                <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg">
                         <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                        <h2 className="text-xl font-bold mb-4">Create Action</h2>
                        <label htmlFor="heading" className="block mb-2">Heading:</label>
                        <input type="text" id="heading" name="heading" value={actionData.heading} onChange={handleActionInputChange} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mb-4" />
                        <label htmlFor="description" className="block mb-2">Description:</label>
                        <textarea id="description" name="description" value={actionData.description} onChange={handleActionInputChange} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mb-4"></textarea>
                        <button onClick={handleSaveAction} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Save</button>
                    </div>
                </div>
            )}  

        </div>
    )
}

export default EventsAction;