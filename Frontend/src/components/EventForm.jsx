import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateEventForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    image: null,
    goal: '',
    collaborators: []
  });

  const [ngos, setNgos] = useState([]);

  useEffect(() => {
    fetchNgos();
  }, []);

  const handleChange = (e) => {
    const { name, value, options } = e.target;
    let selectedOptions = [];

    if (options) {
      selectedOptions = Array.from(options)
        .filter(option => option.selected)
        .map(option => option.value);
    } else {
      selectedOptions = value;
    }

    setFormData({
      ...formData,
      [name]: selectedOptions
    });
  };



  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file
    });
  };

  const fetchNgos = () => {
    fetch('http://localhost:5000/api/events/getallNgos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch NGOs');
        }
        return response.json();
      })
      .then(data => {
        setNgos(data);
      })
      .catch(error => {
        console.error('Error fetching NGOs:', error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    for (let key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const response = await fetch('http://localhost:5000/api/events/addEvents', {
        method: 'POST',
        body: form,
        headers: {
          "Auth-token": localStorage.getItem('UN-auth-token')
        },
      });
      console.log('Event created successfully:', await response.json());
      resetForm();
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      date: '',
      location: '',
      image: null,
      goal: '',
      collaborators: []
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date:</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location:</label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Image:</label>
          <input type="file" id="image" name="image" onChange={handleFileChange} className="block mt-1" />
        </div>
        <div>
          <label htmlFor="goal" className="block text-sm font-medium text-gray-700">Goal:</label>
          <input type="text" id="goal" name="goal" value={formData.goal} onChange={handleChange} className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="collaborators" className="block text-sm font-medium text-gray-700">Collaborators:</label>
          <select
            multiple
            id="collaborators"
            name="collaborators"
            value={formData.collaborators}
            onChange={handleChange}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            {ngos.map(ngo => (
              <option key={ngo._id} value={ngo._id}>
                {ngo.ngo_name}
              </option>
            ))}
          </select>


        </div>
        <button type="submit" className="block w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEventForm;
