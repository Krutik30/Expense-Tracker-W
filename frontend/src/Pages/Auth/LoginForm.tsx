
import React, { useState } from 'react';
import { requestMe } from '../../utils/requestMe';
import {  useNavigate } from 'react-router-dom';

interface LoginFormProps {
  onLogin?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = () => {
    const [formData, setFormData] = useState({
        Email: '',
        Password: '',       
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

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
        console.log(formData);
    if (!formData.Email || !formData.Password) {
      setError('Please enter username and password');
      return;
    }

    try {
      const res = await requestMe('/auth/login',{
          method : "post",
          body : JSON.stringify(formData)
        }
      )

      localStorage.setItem('user',JSON.stringify(res));
        navigate('/auth/signup')

     
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid username or password');
    }
  };

  return (
   
    <div className="bg-blue-800 min-h-screen flex items-center justify-center">
      <div className="bg-white p-12 rounded-md shadow-lg w-full max-w-xl">
        <div className="text-4xl font-bold mb-8 text-center text-gray-800">Login</div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-2xl font-semibold text-gray-700">Username:</label>
            <input
              type="text"
              name="Username"
              value={formData.Username}
              onChange={handleChange}
              className="form-input w-full mt-2 px-4 py-2 rounded-md border border-blue-400 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-2xl font-semibold text-gray-700">Password:</label>
            <input
              type="password"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              className="form-input w-full mt-2 px-4 py-2 rounded-md border border-blue-400 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="flex items-center justify-between flex-col gap-5">
          <button className="text-gray-700 text-lg">
              Don't have an account? <span className="text-blue-500 cursor-pointer">Sign Up &#8594;</span>
            </button>
            <button type="submit" className="bg-blue-500 text-white mt px-8 py-3 rounded-full font-semibold">
              Login
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
