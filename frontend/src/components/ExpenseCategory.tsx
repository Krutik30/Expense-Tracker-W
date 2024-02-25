import React, { useState } from 'react';
import LabelInput from './LabelInput';
import * as Yup from 'yup';

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

  
  const validationSchema = Yup.object().shape({
    categoryName: Yup.string().required('Category Name is required'),
    description: Yup.string().required('Description is required'),
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = async (name: string, value: string) => {
    try {
      await Yup.reach(validationSchema, name).validate(value);
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    } catch (error) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: errors.message }));
    }
  };
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    validateField(name, value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
    validationSchema
    .validate(formData, { abortEarly: false })
    .then(() => {
      onSubmit(formData);
      setErrors({});
    })
    .catch((validationErrors) => {
      const newErrors: Record<string, string> = {};
      validationErrors.inner.forEach((error: { path: string | number; message: string; }) => {
        if (error.path) {
          newErrors[error.path] = error.message;
        }
      });
      setErrors(newErrors);
    });
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
 {errors.description && <div className="text-red-500">{errors.description}</div>}
 
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