// src/ExpenseForm.tsx
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import SingleFileUploader from '../../components/UploadFile';
import { requestMe } from '../../utils/requestMe';
import { ExpenseCategoryName, Status } from '../../../config';
import CustomAutocompleteField from '../../components/CustomAutoCompleteField';

interface ExpenseFormProps {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (formData: ExpenseFormData) => void;
}

export interface ExpenseFormData {
  EmployeeID: number,
  Date: string;
  Amount: number;
  Category: string;
  Purpose: string;
  ApprovalStatus: string;
  ImagesSlip: string[]
}

const AddExpense: React.FC<ExpenseFormProps> = () => {
  const [formData, setFormData] = useState<ExpenseFormData>({
    EmployeeID: JSON.parse(localStorage.getItem('user') || "{}").staff.StaffId,
    Date: '',
    Amount: 0,
    Category: '',
    Purpose: '',
    ApprovalStatus: '',
    ImagesSlip: [],
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'number' ? Number(value) : value,
    });
  };

  const handleFileChange = (selectedFile: string) => {
    setFormData({
      ...formData,
      ImagesSlip: [selectedFile]
    })
  };

  const handleAutoCompleteChange = (name: string, value: string | null) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value || '',
    }));
  };


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    console.log(formData);
    try {
      await requestMe("/expenses/addExpense", {
        method: "post",
        body: JSON.stringify(formData),
      });
      const expenses = JSON.parse(localStorage.getItem('expense') || '[]')
      localStorage.setItem('expense', JSON.stringify([...expenses, formData]))
    } catch (error) {
      console.error("Error submitting employee data:", error);
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
          name="Date"
          value={formData.Date}
          onChange={handleInputChange}
        />

        <TextField
          id="amount"
          label="Amount"
          variant="outlined"
          className="w-full mb-4"
          type="number"
          name="Amount"
          value={formData.Amount}
          onChange={handleInputChange}
        />
        <CustomAutocompleteField 
          id="category"
          options={ExpenseCategoryName}
          label="Category"
          value={formData.Category}
          name="Category"
          onChange={handleAutoCompleteChange}
        />

        <TextField
          id="purpose"
          label="Purpose"
          variant="outlined"
          className="w-full mb-4"
          type="text"
          name="Purpose"
          value={formData.Purpose}
          onChange={handleInputChange}
        />  
        <CustomAutocompleteField
          id="approvalStatus"
          options={Status}
          label="Approval Status"
          value={formData.ApprovalStatus}
          name="ApprovalStatus"
          onChange={handleAutoCompleteChange}
        />

        <SingleFileUploader onFileChange={handleFileChange} />
        <button
          type="submit"
          className="bg-blue_et text-white px-8 py-3 rounded-full flex items-center justify-between mt-10 flex-col gap-5 font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
