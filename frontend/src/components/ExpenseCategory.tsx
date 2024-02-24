import React, { useState } from 'react';
import LabelInput from './LabelInput';

interface ExpenseCategoryFormProps {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (formData: ExpenseCategoryFormData) => void;
}

interface ExpenseCategoryFormData {
  categoryName: string;
  description: string;
}

const ExpenseCategoryForm: React.FC<ExpenseCategoryFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ExpenseCategoryFormData>({
    categoryName: '',
    description: '',
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
  return(
    <div className="bg-blue-800  mx-auto min-h-screen flex items-center justify-center">
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto p-8 bg-white rounded shadow-md">
    
   <LabelInput
            label={"Category Name:"}
            name="categoryName"
            id="categoryName"
            value={formData.categoryName}
             onChange={handleInputChange}
              type="text" 
          />

    
    
    <LabelInput
            label={"Description:"}
            name="description"
            id="description"
            value={formData.description}
             onChange={handleInputChange}
              type="text" 
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

  
  export default ExpenseCategoryForm;