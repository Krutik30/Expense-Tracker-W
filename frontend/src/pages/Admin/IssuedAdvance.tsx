import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

interface AdvanceAmountFormProps {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (formData: AdvanceFormData) => void;
}

export interface AdvanceFormData {
  employeeID: string;
  advanceAmount: number;
  dateIssued: string;
  reason: string;
  status: string;
  givenByAdminID: string;
}

const IssuedAdvance: React.FC<AdvanceAmountFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<AdvanceFormData>({
    employeeID: '',
    advanceAmount: 0,
    dateIssued: '',
    reason: '',
    status: '',
    givenByAdminID: JSON.parse(localStorage.getItem('user') || '{}').staff.admin.AdminID,
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
     <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl mx-auto p-8 bg-white rounded shadow-md space-y-4"
      >

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