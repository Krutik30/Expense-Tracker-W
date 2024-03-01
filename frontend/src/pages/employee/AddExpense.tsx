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

const AddExpense: React.FC<ExpenseFormProps> = () => {
  const [formData, setFormData] = useState<ExpenseFormData>({
    date: '',
    amount: 0,
    categoryID: '',
    purpose: '',
    approvalStatus: '',
  });

  const [file, setFile] = useState<File | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (selectedFile: File) => {
    setFile(selectedFile);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('date', formData.date);
    formDataToSend.append('amount', formData.amount.toString());
    formDataToSend.append('categoryID', formData.categoryID);
    formDataToSend.append('purpose', formData.purpose);
    formDataToSend.append('approvalStatus', formData.approvalStatus);
    if (file) {
      formDataToSend.append('file', file as Blob);
    }


    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      await requestMe("/expenses/addExpense", {
        method: "post",
        body: JSON.stringify(formDataToSend),
      });
    } catch (error) {
      console.error("Error submitting employee data:", error);
    }

  };

  return (
    <div className="bg-blue-800  mx-auto min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto p-8 bg-white rounded shadow-md space-y-4 flex flex-col items-center">
        <TextField
          InputLabelProps={{shrink:true}}
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
        <SingleFileUploader onFileChange={handleFileChange} />
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
