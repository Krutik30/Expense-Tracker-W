import React, { useState } from 'react';
import { requestMe } from '../../utils/requestMe';
import { Link, useNavigate } from 'react-router-dom';

interface SignUpFormProps {
  onSuccess?: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    Username: '',
    Email : "",
    Password: '',
    ConfirmPassword: '',
    RoleId: '',
    EmployeeId: '',
  });

  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (formData.Password !== formData.ConfirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // eslint-disable-next-line no-unused-vars
    const { ConfirmPassword, ...formDataWithoutConfirmPassword } = formData;
    try {
      // Perform signup logic here
      // For example, make an API call to register the user
      // const response = await axios.post('/api/signup', formData);
      // console.log(response.data);
      
      // localStorage.setItem('user', JSON.stringify({
      //   auth: true,
      //   role: 'ADMIN',
      //   token: 'token bhi hai'
      // }))
      console.log("yes");
      const res = await requestMe('/auth/signup',{
        method : "post",
        body : JSON.stringify(formDataWithoutConfirmPassword)
      })
      
      localStorage.setItem('user',JSON.stringify(res))
         navigate('/')

      // If signup is successful, call onSuccess callback if provided
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setError('Internal server error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8 p-6 bg-white rounded shadow-md">
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        Username:
        <input type="text" name="Username" value={formData.Username} onChange={handleChange} className="form-input mt-1 w-full" required />
      </label>
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        Password:
        <input type="password" name="Password" value={formData.Password} onChange={handleChange} className="form-input mt-1 w-full" required />
      </label>
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        Confirm Password:
        <input type="password" name="ConfirmPassword" value={formData.ConfirmPassword} onChange={handleChange} className="form-input mt-1 w-full" required />
      </label>
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        RoleId:
        <input type="text" name="RoleId" value={formData.RoleId} onChange={handleChange} className="form-input mt-1 w-full" />
      </label>
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        EmployeeId:
        <input type="text" name="EmployeeId" value={formData.EmployeeId} onChange={handleChange} className="form-input mt-1 w-full" />
      </label>
    </div>
    {error && <div className="text-red-500 mb-4">{error}</div>}
    <button type="submit" className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold">
      Sign Up
    </button>
    <p className="mt-4 text-sm text-gray-700">
      Already registered? <Link to="/login" className="text-blue-500">Log in</Link>
    </p>
  </form>
  );
};

export default SignUpForm;
