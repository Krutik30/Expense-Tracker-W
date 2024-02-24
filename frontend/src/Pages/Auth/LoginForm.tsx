
import React, { useState } from 'react';
import { requestMe } from '../../utils/requestMe';
import {  useNavigate } from 'react-router-dom';

interface LoginFormProps {
  onLogin?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = () => {
  const token : any = localStorage.getItem("token");
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
    <form onSubmit={handleLogin}>
      <div>
        <label>
          Email :
          <input type="Email" name="Email" value={formData.Email} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" name="Password" value={formData.Password} onChange={handleChange} required />
        </label>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
