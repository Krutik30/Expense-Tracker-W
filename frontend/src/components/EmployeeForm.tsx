import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = () => {
  const [employeeData, setEmployeeData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    ContactNumber: '',
    EmploymentStartDate: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      // Replace 'your-api-endpoint' with your actual API endpoint
      const response = await axios.post('your-api-endpoint', employeeData);

      console.log('Employee data submitted:', response.data);
    } catch (error) {
      console.error('Error submitting employee data:', error);
    }
  };

  return (
    <div className="bg-blue-800 min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className=" w-full max-w-xl mx-auto p-8 bg-white rounded shadow-md">

        
        <label className="block text-2xl font-semibold text-gray-700 mb-4">
          First Name:
          <input
            type="text"
            name="FirstName"
            value={employeeData.FirstName}
            onChange={handleChange}
            className="form-input w-full mt-2 px-4 py-2 rounded-md border border-blue-400 focus:outline-none focus:border-blue-500"
          />
        </label>
        
        <label className="block text-2xl font-semibold text-gray-700 mb-4">
          Last Name:
          <input
            type="text"
            name="LastName"
            value={employeeData.LastName}
            onChange={handleChange}
            className="form-input w-full mt-2 px-4 py-2 rounded-md border border-blue-400 focus:outline-none focus:border-blue-500"
          />
        </label>
       
        
        <label className="block text-2xl font-semibold text-gray-700 mb-4">
          Email:
          <input
            type="text"
            name="Email"
            value={employeeData.Email}
            onChange={handleChange}
            className="form-input w-full mt-2 px-4 py-2 rounded-md border border-blue-400 focus:outline-none focus:border-blue-500"
          />
        </label>
       
       
        <label className="block text-2xl font-semibold text-gray-700 mb-4">
          Contact Number:
          <input
            type="text"
            name="ContactNumber"
            value={employeeData.ContactNumber}
            onChange={handleChange}
            className="form-input w-full mt-2 px-4 py-2 rounded-md border border-blue-400 focus:outline-none focus:border-blue-500"
          />
          
        </label>
       
        
        <label className="block  text-2xl font-semibold text-gray-700 mb-4">
          Employment Start Date:
          <input
            type="date"
            name="EmploymentStartDate"
            value={employeeData.EmploymentStartDate}
            onChange={handleChange}
            className="form-input w-full mt-2 px-4 py-2 rounded-md border border-blue-400 focus:outline-none focus:border-blue-500"
          />
        </label>
        
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
