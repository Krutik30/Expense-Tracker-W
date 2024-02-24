import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SignUpFormProps {
  onSuccess?: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    Username: '',
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

    try {
      // Perform signup logic here
      // For example, make an API call to register the user
      // const response = await axios.post('/api/signup', formData);
      // console.log(response.data);
      
      localStorage.setItem('user', JSON.stringify({
        auth: true,
        role: 'ADMIN',
        token: 'token bhi hai'
      }))
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
    <form onSubmit={handleSubmit}>
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
      <div>
        <label>
          Confirm Password:
          <input type="password" name="ConfirmPassword" value={formData.ConfirmPassword} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          RoleId:
          <input type="text" name="RoleId" value={formData.RoleId} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          EmployeeId:
          <input type="text" name="EmployeeId" value={formData.EmployeeId} onChange={handleChange} />
        </label>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
