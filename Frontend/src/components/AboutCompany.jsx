import React, { useState } from 'react';

const AboutCompany = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // You can send the form data to the server or handle it locally
    // Reset form fields and close the modal after submission
    closeModal();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        The 2030 Agenda for Sustainable Development, adopted by all United Nations Member States in 2015, provides a shared blueprint for peace and prosperity for people and the planet, now and into the future. At its heart are the 17 Sustainable Development Goals (SDGs), which are an urgent call for action by all countries - developed and developing - in a global partnership. They recognize that ending poverty and other deprivations must go hand-in-hand with strategies that improve health and education, reduce inequality, and spur economic growth – all while tackling climate change and working to preserve our oceans and forests.
      </p>
      
      {/* Add more paragraphs and content as needed */}
      
      <div id="implementation" className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Implementation Progress</h2>
        <p>
          Every year, the UN Secretary General presents an annual SDG Progress report, which is developed in cooperation with the UN System, and based on the global indicator framework and data produced by national statistical systems and information collected at the regional level.
        </p>
        <p className="mb-4">
          Please, check below information about the SDG Progress Report:
        </p>
        

        {/* Divs with images and titles */}
        <div className="flex justify-between mb-4">
          {/* First Div */}
          <a href="https://unstats.un.org/sdgs/report/2022/" rel="noopener noreferrer" target="_blank" className="w-1/3 text-center border border-gray-300 p-4">
            <img src="https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=" alt="Image 1" className="mx-auto mb-2" />
            <p>Report 2022</p>
          </a>
          {/* Second Div */}
          <a href="https://unstats.un.org/sdgs/report/2023/" rel="noopener noreferrer" target="_blank" className="w-1/3 text-center border border-gray-300 p-4">
            <img src="https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=" alt="Image 2" className="mx-auto mb-2" />
            <p>Report 2023</p>
          </a>
          {/* Third Div */}
          <a href="https://unstats.un.org/sdgs/report/2024/" rel="noopener noreferrer" target="_blank" className="w-1/3 text-center border border-gray-300 p-4">
            <img src="https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=" alt="Image 3" className="mx-auto mb-2" />
            <p>Report 2024</p>
          </a>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openModal}>
          Add New Report
        </button>
      </div>
      
      
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg p-8 max-w-md">
            <h2 className="text-2xl font-bold mb-4">Add New Report</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input type="text" id="title" name="title" className="mt-1 p-2 border border-gray-300 rounded w-full" required />
              </div>
              <div className="mb-4">
  <label htmlFor="url" className="block text-sm font-medium text-gray-700">Report URL</label>
  <input type="text" id="url" name="url" className="mt-1 p-2 border border-gray-300 rounded w-full" required />
</div>

              <div className="mb-4">
                <label htmlFor="poster" className="block text-sm font-medium text-gray-700">Poster</label>
                <input type="file" id="poster" name="poster" accept="image/*" className="mt-1 p-2 border border-gray-300 rounded w-full" required />
              </div>
              <div className="flex justify-end">
                <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2" onClick={closeModal}>
                  Cancel
                </button>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add Report
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    
  );
};

export default AboutCompany;
