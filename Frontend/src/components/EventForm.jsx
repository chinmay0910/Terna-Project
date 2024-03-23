import React, { useState } from 'react';
import axios from 'axios';


const CreateEventForm = () => {
  const [eventName, setEventName] = useState('');
  const [description, setDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [goal, setGoals] = useState('');
  const [location, setLocation] = useState('');
  const [collaborators, setCollaborators] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Prepare form data
    const formData = new FormData();
    formData.append('eventName', eventName);
    formData.append('description', description);
    formData.append('eventDate', eventDate);
    formData.append('goal', goal);
    formData.append('location', location);
    collaborators.forEach((collaborator) => {
      formData.append('collaborators', collaborator);
    });
    formData.append('pdfFile', pdfFile); // Append the file directly
  
    // Submit form data to backend
    try {
        // title, description, date, location, goal, collabators
      const response = await axios.post('/api/create-event', JSON.stringify({
        title,
        description,
        date,
        goal,
        location,
        collaborators
      }), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Event created successfully:', response.data);
      resetForm();
    } catch (error) {
      console.error('Error creating event:', error);
    }
    
  };
  

  //  title, description, date, location, goal, collabators
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="eventName" className="block text-sm font-medium text-gray-700">Event Name:</label>
          <input type="text" id="eventName" value={eventName} onChange={(e) => setEventName(e.target.value)} className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700">Event Date:</label>
          <input type="date" id="eventDate" value={eventDate} onChange={(e) => setEventDate(e.target.value)} className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="pdfFile" className="block text-sm font-medium text-gray-700">PDF Upload:</label>
          <input type="file" id="pdfFile" onChange={(e) => setPdfFile(e.target.files[0])} className="block mt-1" />
        </div>
        <div>
          <label htmlFor="goals" className="block text-sm font-medium text-gray-700">Goals:</label>
          <input type="text" id="goals" value={goals} onChange={(e) => setGoals(e.target.value)} className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location:</label>
          <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="collaborators" className="block text-sm font-medium text-gray-700">Collaborators:</label>
          <select multiple id="collaborators" value={collaborators} onChange={(e) => setCollaborators(Array.from(e.target.selectedOptions, (option) => option.value))} className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
            <option value="position1">Position 1</option>
            <option value="position2">Position 2</option>
            <option value="position3">Position 3</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button type="submit" className="block w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEventForm;