import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {
  onLogin?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = () => {
    const [formData, setFormData] = useState({
        Username: '',
        Password: '',       
      });

      const navigate = useNavigate()
    
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
    //   const response = await axios.post('/api/login', formData);
    //   console.log(response.data);

      // put this in then
      localStorage.setItem('user', JSON.stringify({
        auth: true,
        role: 'ADMIN',
        token: 'token bhi hai'
      }))
      navigate('/')
      
      // Call onLogin if login is successful
    //   onLogin();
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid username or password');
    }
  };

  return (
    <div className="container">
      <div className="text1">Login</div>
    <form onSubmit={handleLogin}  >

      <div className='text'>
        <label >
        Username :
          
          <input type="text" name="Username" value={formData.Username} onChange={handleChange} className='box'required />
          </label>
      </div>
      <div className='text'>
        <label >
        Password :
        
          <input type="password" name="Password" value={formData.Password} onChange={handleChange} className='box' required />
          </label>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div className="submit-container">
      <button type="submit" className='submit'>Login</button>
      </div>
    </form>
    </div>
  );
};

export default LoginForm;
