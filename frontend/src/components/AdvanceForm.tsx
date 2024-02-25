// src/AdvanceAmountForm.tsx
import React, { useState } from 'react';

interface AdvanceAmountFormProps {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (formData: AdvanceFormData) => void;
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

const AdvanceAmountForm: React.FC<AdvanceAmountFormProps> = ({ onSubmit }) => {
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
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto p-8 bg-white rounded shadow-md my-12">

<div className="mb-4 w-full">
        <label className="block mt-2 w-full text-2xl font-semibold p- text-gray-700" htmlFor="advanceAmount">
          Advance ID:
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
        <label className="block mt-2 w-full text-2xl font-semibold p- text-gray-700" htmlFor="employeeID">
          Employee ID:
          <input
            type="text"
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
            type="number"
            id="advanceAmount"
            name="advanceAmount"
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
            type="number"
            id="advanceAmount"
            name="advanceAmount"
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
            type="number"
            id="advanceAmount"
            name="advanceAmount"
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
            id="advanceAmount"
            name="advanceAmount"
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
    </form>
    </div>
  );
};

export default AdvanceAmountForm;
