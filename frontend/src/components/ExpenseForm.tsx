// src/ExpenseForm.tsx
import React, { useState } from 'react';
import LabelInput from './LabelInput';

interface ExpenseFormProps {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (formData: ExpenseFormData) => void;
}

export interface ExpenseFormData {
    expenseID:string;
  employeeID: string;
  date: string;
  amount: number;
  categoryID: string;
  purpose: string;
  approvalStatus: string;
  approvedByAdminID: string;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ExpenseFormData>({
    expenseID:'',
    employeeID: '',
    date: '',
    amount: 0,
    categoryID: '',
    purpose: '',
    approvalStatus: '',
    approvedByAdminID: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // eslint-disable-next-line no-unused-vars
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto p-8 bg-white rounded shadow-md">
     
      <LabelInput 
            label={"Employee ID:"}
            name="employeeID"
            id="employeeID"
            value={formData.employeeID}
             onChange={handleInputChange}
              type="date" 
          />

      
<LabelInput 
            label={"Date:"}
            name="date"
            id="date"
            value={formData.date}
             onChange={handleInputChange}
              type="date" 
          />
      

<LabelInput 
            label={"Amount:"}
            name="amount"
            id="amount"
            value={formData.amount}
             onChange={handleInputChange}
              type="number" 
          />
     
      
      <LabelInput 
            label={"Category ID:"}
            name="categoryID"
            id="formData.categoryID"
            value={formData.categoryID}
             onChange={handleInputChange}
              type="text" 
          />

      
      <LabelInput 
            label={"Purpose:"}
            name="purpose"
            value={formData.purpose}
             onChange={handleInputChange}
              type="text" 
          />

      
      
      <LabelInput 
            label={"Approval Status:"}
            name="approvalStatus" 
            value={formData.approvalStatus}
             onChange={handleInputChange}
              type="text" 
          />

      
      <LabelInput 
            label={"Approved By Admin ID:"}
            name="approvedByAdminID" 
            value={formData.approvedByAdminID}
             onChange={handleInputChange}
              type="number" 
          />

      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Submit
      </button>
    </form>
    </div>
  );
};

export default ExpenseForm;
