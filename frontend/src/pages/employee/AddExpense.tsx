// src/ExpenseForm.tsx
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import SingleFileUploader from '../../components/UploadFile';
import { requestMe } from '../../utils/requestMe';

interface ExpenseFormProps {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (formData: ExpenseFormData) => void;
}

export interface ExpenseFormData {
  date: string;
  amount: number;
  categoryID: string;
  purpose: string;
  approvalStatus: string;
}

const AddExpense: React.FC<ExpenseFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ExpenseFormData>({
    date: '',
    amount: 0,
    categoryID: '',
    purpose: '',
    approvalStatus: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // eslint-disable-next-line no-unused-vars
  // const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const { name, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // onSubmit(formData);
    try {
      await requestMe("/expenses/addExpense", {
        method: "post",
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error("Error in creating Expense", error);
    }
  };

  return (
    <div className="bg-blue-800  mx-auto min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto p-8 bg-white rounded shadow-md space-y-4 flex flex-col items-center">
        <TextField
          InputLabelProps={{ shrink: true }}
          id="date"
          label="Date"
          variant="outlined"
          className="w-full mb-4"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
        />

        <TextField
          id="amount"
          label="Amount"
          variant="outlined"
          className="w-full mb-4"
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleInputChange}
        />

        <TextField
          id="categoryID"
          label="Category ID"
          variant="outlined"
          className="w-full mb-4"
          type="number"
          name="categoryID"
          value={formData.categoryID}
          onChange={handleInputChange}
        />

        <TextField
          id="purpose"
          label="Purpose"
          variant="outlined"
          className="w-full mb-4"
          type="text"
          name="purpose"
          value={formData.purpose}
          onChange={handleInputChange}
        />

        <TextField
          id="approvalStatus"
          label="Approval Status"
          variant="outlined"
          className="w-full mb-4"
          type="text"
          name="approvalStatus"
          value={formData.approvalStatus}
          onChange={handleInputChange}
        />
        <SingleFileUploader />
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

export default AddExpense;
