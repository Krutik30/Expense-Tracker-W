import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

interface AdvanceAmountFormProps {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (formData: AdvanceFormData) => void;
}
const storedData = localStorage.getItem('user');

// Check if data exists in local storage
if (storedData) {
    // Data exists, parse it if necessary
    const parsedData = JSON.parse(storedData);
    console.log(parsedData);
    const adminID = parsedData.staff.admin.AdminID;
   
     
    // console.log(AdminId) // Use the data as needed
} else {
    console.log('No data found in local storage');
}

export interface AdvanceFormData {
    advanceID : string;
  employeeID: string;

  advanceAmount: number;
  dateIssued: string;
  reason: string;
  status: string;
  givenByAdminID: string;
}

const IssuedAdvance: React.FC<AdvanceAmountFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<AdvanceFormData>({
    advanceID : '',
    employeeID: '',
    advanceAmount: 0,
    dateIssued: '',
    reason: '',
    status: '',
    givenByAdminID: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
  };
 
  return (
    <div className="bg-blue-800  mx-auto min-h-screen flex items-center justify-center">
    {/* <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto p-8 bg-white rounded shadow-md">

<div className="mb-4 w-full">
        <label className="block mt-2 w-full text-2xl font-semibold p- text-gray-700" htmlFor="advanceAmount">
          Advance ID:
          <input
            type="number"
            id="advanceID"
            name="advanceID"
            value={formData.advanceID}
            onChange={handleInputChange}
            className="form-input w-full mt-2 px-4 py-2 rounded-md border border-blue-400 focus:outline-none focus:border-blue-500"
          />
        </label>
      </div>



      <div className="mb-4 w-full">
        <label className="block mt-2 w-full text-2xl font-semibold p- text-gray-700" htmlFor="employeeID">
          Employee ID:
          <input
            type="number"
            id="employeeID"
            name="employeeID"
            value={formData.employeeID}
            onChange={handleInputChange}
            className="form-input w-full mt-2 px-4 py-2 rounded-md border border-blue-400 focus:outline-none focus:border-blue-500"
          />
        </label>
      </div>

      <div className="mb-4 w-full">
        <label className="block mt-2 w-full text-2xl font-semibold p- text-gray-700" htmlFor="advanceAmount">
          Advance Amount:
          <input
            type="number"
            id="advanceAmount"
            name="advanceAmount"
            value={formData.advanceAmount}
            onChange={handleInputChange}
            className="form-input w-full mt-2 px-4 py-2 rounded-md border border-blue-400 focus:outline-none focus:border-blue-500"
          />
        </label>
      </div>

      <div className="mb-4 w-full">
        <label className="block mt-2 w-full text-2xl font-semibold p- text-gray-700" htmlFor="advanceAmount">
          Date Issued:
          <input
            type="date"
            id="dateIssued"
            name="dateIssued"
            value={formData.dateIssued}
            onChange={handleInputChange}
            className="form-input w-full mt-2 px-4 py-2 rounded-md border border-blue-400 focus:outline-none focus:border-blue-500"
          />
        </label>
      </div>

      <div className="mb-4 w-full">
        <label className="block mt-2 w-full text-2xl font-semibold p- text-gray-700" htmlFor="advanceAmount">
        Reason:
          <input
            type="text"
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            className="form-input w-full mt-2 px-4 py-2 rounded-md border border-blue-400 focus:outline-none focus:border-blue-500"
          />
        </label>
      </div>

      <div className="mb-4 w-full">
        <label className="block mt-2 w-full text-2xl font-semibold p- text-gray-700" htmlFor="advanceAmount">
        Status:
          <input
            type="text"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            className="form-input w-full mt-2 px-4 py-2 rounded-md border border-blue-400 focus:outline-none focus:border-blue-500"
          />
        </label>
      </div>

      <div className="mb-4 w-full">
        <label className="block mt-2 w-full text-2xl font-semibold p- text-gray-700" htmlFor="advanceAmount">
          Given by AdminID:
          <input
            type="number"
            id="givenByAdminID"
            name="givenByAdminID"
            value={formData.givenByAdminID}
            onChange={handleInputChange}
            className="form-input w-full mt-2 px-4 py-2 rounded-md border border-blue-400 focus:outline-none focus:border-blue-500"
          />
        </label>
      </div>


      
      <button
        type="submit"
        className="bg-blue-500 text-white px-8 py-3 rounded-full flex items-center justify-between mt-10 flex-col gap-5 font-semibold"
      >
        Submit
      </button>
    </form> */}
     <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl mx-auto p-8 bg-white rounded shadow-md space-y-4"
      >
        <TextField
          id="advanceID"
          label="Advance ID"
          variant="outlined"
          className="w-full mb-4"
          type="number"
          name="advanceID"
          value={formData.advanceID}
          onChange={handleInputChange}
        />

        <TextField
          id="employeeID"
          label="Employee ID"
          variant="outlined"
          className="w-full mb-4"
          type="number"
          name="employeeID"
          value={formData.employeeID}
          onChange={handleInputChange}
        />

        <TextField
          id="advanceAmount"
          label="Advance Amount"
          variant="outlined"
          className="w-full mb-4"
          type="number"
          name="advanceAmount"
          value={formData.advanceAmount}
          onChange={handleInputChange}
        />

        <TextField
          id="dateIssued"
          label="Date Issued"
          variant="outlined"
          className="w-full mb-4"
          type="date"
          name="dateIssued"
          value={formData.dateIssued}
          onChange={handleInputChange}
        />

        <TextField
          id="reason"
          label="Reason"
          variant="outlined"
          className="w-full mb-4"
          type="text"
          name="reason"
          value={formData.reason}
          onChange={handleInputChange}
        />

        <TextField
          id="status"
          label="Status"
          variant="outlined"
          className="w-full mb-4"
          type="text"
          name="status"
          value={formData.status}
          onChange={handleInputChange}
        />

        <TextField
          id="givenByAdminID"
          label="Given by AdminID"
          variant="outlined"
          className="w-full mb-4"
          type="number"
          name="givenByAdminID"
          value={formData.givenByAdminID}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-8 py-3 rounded-full flex items-center justify-between mt-10 flex-col gap-5 font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default IssuedAdvance;