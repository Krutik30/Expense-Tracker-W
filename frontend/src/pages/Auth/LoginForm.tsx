import React, { useState } from 'react';
import { requestMe } from '../../utils/requestMe';
import { useNavigate } from 'react-router-dom';
// import Login_Img from '../../assets/login_img.jpg';
// import { toast } from 'react-toastify'
 import Login_Img from '../../assets/Login_image-min.jpg';
import { TextField, Button, Typography,IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';



import * as yup from 'yup';

const validationSchema = yup.object().shape({
  Email: yup.string().email('Invalid email').required('Email is required'),
  Password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});
import { Role } from '../../config';

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

      const profile = await requestMe(`/profile/${res.staff.RoleId}/${res.staff.StaffId}`)

      localStorage.setItem('user', JSON.stringify(res));
      if (res.role === Role.admin) {
        const allEmployee = await requestMe('/employees/getEmployees')
        const allExpenses = await requestMe('/expenses/getExpenses')
        localStorage.setItem('employees', JSON.stringify(allEmployee))
        localStorage.setItem('expenses', JSON.stringify(allExpenses))
      }
      else {
        const allExpense = await requestMe(`/expenses/getExpenses/${JSON.parse(localStorage.getItem('user') || "{}").staff.StaffId}`)
        localStorage.setItem('expenses', JSON.stringify(allExpense))
      }
      localStorage.setItem('profile', JSON.stringify(profile))
      navigate('/')

    } catch (validationError) {
      // If validation fails, set the validation error message
      if (validationError instanceof yup.ValidationError) {
        const errorMessage = validationError.errors[0];
        setError(errorMessage);
      } else {
        console.error('Error logging in:', validationError);
        setError('Invalid username or password');
        // // toast error
        // toast.error('Invalid username or password', {
        //   position: "top-center" 
        // });
      }
    }
  };

return (
  // <Box sx={{ backgroundColor: '#D2FDFF', minHeight: '100vh', marginTop: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 9  }}>
    <div className=' bg-aqua_et min-h-screen flex items-center justify-center mx-auto shadow-lg'>
      <div className=' shadow-lg flex items-center justify-center mx-auto h-[60%] mt-5' > 
      {/* Login Image */}   
      <div className='mt-6 rounded-l-lg' style={{ flex: 1}}>
        <img src={Login_Img} alt="Login Image" className='w-[800px]   h-full object-cover' />
      </div>
      {/* Login Form */}
      <div className="p-6">
      <div className="text-4xl mt-20 font-sans font-normal mb-8 text-center text-blue_et">Welcome to <span className='font-mono font-normal'>Expense Tracker!</span></div>
        <div className="text-3xl mt-3 font-bold mb-8 text-center text-blue_et">Login <span className='text-orange_et font-bold text-3xl font-sans'>your account</span></div>
        <form onSubmit={handleLogin} className="space-y-6 mt-4 p-5">
          <div>
            <TextField
              type="email"
              label='Email'
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              margin="normal"
              required
              
            />
          </div>
          <div>
            <TextField
              type={showPassword ? "text" : "password"}
              name="Password"
              label='Password'
              value={formData.Password}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              margin="normal"
              required
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleTogglePasswordVisibility} sx={{color: '#303C6C'}}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                )
              }}
            />
          </div>
          {error && <Typography className="text-red-500 mb-4">{error}</Typography>}
          <div className="flex items-center justify-between flex-col gap-5">
            <Typography variant="body1" className="text-lg">
              Don't have an account? <span onClick={()=>{navigate('/auth/signup')}} className="text-blue-800 font-bold cursor-pointer">Sign Up &#8594;</span>
            </Typography>
            <Button type="submit" variant="contained" color="primary" size="large" sx={{ backgroundColor: "#303C6C", fontSize: 20, fontWeight: 'normal', transition: 'background-color 0.3s', '&:hover': { backgroundColor: '#FF7165 ' } }}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
      </div>
        
  // </Box>
);

};

export default LoginForm;

