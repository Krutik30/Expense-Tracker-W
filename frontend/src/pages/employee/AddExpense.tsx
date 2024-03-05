// src/ExpenseForm.tsx
import React, { useState } from 'react';
import {TextField,Button }from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SingleFileUploader from '../../components/UploadFile';
import { requestMe } from '../../utils/requestMe';
import { ExpenseCategoryName, Status } from '../../config';
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
    <div className=" bg-sky_et min-h-screen flex items-center justify-center">
      <div className="bg-aqua_et rounded-lg shadow-md p-8 space-y-4 w-2/5">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Add Expense</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
        <CustomAutocompleteField 
          id="category"
          options={ExpenseCategoryName}
          label="Category"
          value={formData.Category}
          name="Category"
          onChange={handleAutoCompleteChange}
        />
        </div>
        <div>
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
        </div>
        <div> 
        <CustomAutocompleteField
          id="approvalStatus"
          options={Status}
          label="Approval Status"
          value={formData.ApprovalStatus}
          name="ApprovalStatus"
          onChange={handleAutoCompleteChange}
        />
        </div>
       <div className='col-span-2 flex flex-col justify-center'>
        <div className='flex flex-row gap-3 mt-5'>
        <SingleFileUploader onFileChange={handleFileChange} />
        <DeleteIcon sx={{ color: "#303C6C",transition: 'background-color 0.3s', '&:hover': { color: '#FF7165 ' } }}></DeleteIcon>
        </div>
        <div>
        <Button type="submit" variant="contained" color="primary" size="large" sx={{width:"100%", backgroundColor: "#303C6C", fontSize: 20, fontWeight: 'normal', transition: 'background-color 0.3s', '&:hover': { backgroundColor: '#FF7165 ' } }}>
              Add
        </Button>
        </div>
       </div>
      </form>
    </div>
    </div>
  );
};

export default AddExpense;
