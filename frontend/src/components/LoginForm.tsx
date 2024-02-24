import React, { useState } from 'react';
import { requestMe } from '../utils/requestMe';

interface LoginFormProps {
  onLogin?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = () => {
    const token :any = localStorage.getItem("token");
    const [formData, setFormData] = useState({
        Username: '',
        Password: '',       
      });
    
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
    if (!formData.Username || !formData.Password) {
      setError('Please enter username and password');
      return;
    }

    try {
      const response = await requestMe('/api/login', {
        method: 'post',
        data: formData
      });
      console.log(response.data);
      localStorage.setItem('token',token);
      
     
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid username or password');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>
          Username:
          <input type="text" name="Username" value={formData.Username} onChange={handleChange} required />
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
