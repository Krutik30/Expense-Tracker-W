import React, { useState } from 'react';
import { requestMe } from '../../utils/requestMe';
import { useNavigate } from 'react-router-dom';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import Login_Img from '../../assets/logIn.jpg';


import * as yup from 'yup';

const validationSchema = yup.object().shape({
  Email: yup.string().email('Invalid email').required('Email is required'),
  Password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});
import { Role } from '../../../config';

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
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState); // Toggle password visibility
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });

      const res = await requestMe('/auth/login', {
        method: "post",
        body: JSON.stringify(formData)
      });
      console.log(res);

      if (res.role === Role.admin) {
        const allEmployee = await requestMe('/employees/getEmployees')
        localStorage.setItem('employees', JSON.stringify(allEmployee))
      }
      localStorage.setItem('user', JSON.stringify(res));
      navigate('/')

    } catch (validationError) {
      // If validation fails, set the validation error message
      if (validationError instanceof yup.ValidationError) {
        const errorMessage = validationError.errors[0];
        setError(errorMessage);
      } else {
        console.error('Error logging in:', validationError);
        setError('Invalid username or password');
      }
    }
  };

  return (
    <div className="bg-blue-800 min-h-screen flex items-center justify-center">
      <div className='flex gap-4 mx-auto'>
        {/* form */}
      <div className="bg-white p-12 rounded-md shadow-lg w-full max-w-xl">
        <div className="text-4xl font-bold mb-8 text-center text-gray-800">Login</div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-2xl font-semibold text-gray-700">Username:</label>
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              className="form-input w-full mt-2 px-4 py-2 rounded-md border border-blue-400 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
             <label className="block text-2xl font-semibold text-gray-700">Password:</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} // Toggle input type based on showPassword state
                name="Password"
                value={formData.Password}
                onChange={handleChange}
                className="form-input w-full mt-2 px-4 py-2 rounded-md border border-blue-400 focus:outline-none focus:border-blue-500"
                required
              />
              <div
                className="absolute top-4 right-3 cursor-pointer "
                onClick={handleTogglePasswordVisibility}
              >
                {showPassword ? <IoEye className="text-blue-500 flex " size={24} /> : <IoEyeOff className="text-blue-500 flex " size={24}/>}
              </div>
            </div>
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="flex items-center justify-between flex-col gap-5">
            <div className="text-gray-700 text-lg">
              Don't have an account? <span onClick={()=>{navigate('/auth/signup')}} className="text-blue-500 cursor-pointer">Sign Up &#8594;</span>
            </div>
            <button type="submit" className="bg-blue-500 text-white mt px-8 py-3 rounded-full font-semibold">
              Login
            </button>

          </div>
        </form>
      </div>  
      {/* main form on left side */}

      {/* login Image */}
      <div className="w-1/2">
          <img src={Login_Img} alt="Login Image" className="w-full rounded-md shadow-lg"  style={{ maxWidth: "750px", marginTop: "30px", boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.5)" }} />
        </div>

      </div>
    </div>
  );
};

export default LoginForm;