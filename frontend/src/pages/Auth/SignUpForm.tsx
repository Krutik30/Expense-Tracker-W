import React, { useState } from "react";
import { requestMe } from "../../utils/requestMe";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
// import { toast } from 'react-toastify';


interface SignUpFormProps {
  onSuccess?: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    Username: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    RoleId: "",
    EmployeeId: "",
  });

  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleTogglePasswordVisibility = (field: string) => {
    if (field === "Password") {
      setShowPassword(!showPassword);
    } else if (field === "ConfirmPassword") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.Password !== formData.ConfirmPassword) {
      setError("Passwords do not match");
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
      await requestMe("/auth/signup", {
        method: "post",
        body: JSON.stringify(formDataWithoutConfirmPassword),
      });

      //  localStorage.setItem('user',JSON.stringify(res))
      navigate("/");
      // toast.error('Failed to SignUp', {
      //   position: 'top-center'
      // });



      // If signup is successful, call onSuccess callback if provided
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Error signing up:", error);
      setError("Internal server error");
    }
  };

  return (
    <div className=" bg-sky_et min-h-screen flex items-center justify-center">
      <div className="bg-aqua_et rounded-lg shadow-md p-8 space-y-4 w-2/5 my-24">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign Up</h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4"
        >
          <TextField
            id="Username"
            label="Username"
            variant="outlined"
            className="w-full mb-4"
            type="text"
            name="Username"
            value={formData.Username}
            onChange={handleChange}
            required
          />

          <TextField
            id="Email"
            label="Email"
            variant="outlined"
            className="w-full mb-4"
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            required
          />

          <TextField
            id="Password"
            label="Password"
            variant="outlined"
            className="w-full mb-4"
            type={showPassword ? "text" : "password"}
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            required
            InputProps={{
              endAdornment: (
                <div
                  className="absolute top-4 right-3 cursor-pointer "
                  onClick={() => handleTogglePasswordVisibility("Password")}
                >
                  {showPassword ? (
                    <IoEye className="text-blue_et flex " size={24} />
                  ) : (
                    <IoEyeOff className="text-blue_et flex " size={24} />
                  )}
                </div>
              ),
            }}
          />

          <TextField
            id="ConfirmPassword"
            label="ConfirmPassword"
            variant="outlined"
            className="w-full mb-4"
            type={showConfirmPassword ? "text" : "password"}
            name="ConfirmPassword"
            value={formData.ConfirmPassword}
            onChange={handleChange}
            required
            InputProps={{
              endAdornment: (
                <div
                  className="absolute top-4 right-3 cursor-pointer "
                  onClick={() => handleTogglePasswordVisibility("ConfirmPassword")}
                >
                  {showConfirmPassword ? (
                    <IoEye className="text-blue_et flex " size={24} />
                  ) : (
                    <IoEyeOff className="text-blue_et flex " size={24} />
                  )}
                </div>
              ),
            }}
          />

          <TextField
            id="RoleId"
            label="RoleId"
            variant="outlined"
            className="w-full mb-4"
            type="text"
            name="RoleId"
            value={formData.RoleId}
            onChange={handleChange}
          />

          <TextField
            id="EmployeeId"
            label="EmployeeId"
            variant="outlined"
            className="w-full mb-4"
            type="text"
            name="EmployeeId"
            value={formData.EmployeeId}
            onChange={handleChange}
          />
          <div className=" col-span-1 text-center">
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <Button type="submit" variant="contained" color="primary" size="large" sx={{width:"100%", backgroundColor: "#303C6C", fontSize: 20, fontWeight: 'normal', transition: 'background-color 0.3s', '&:hover': { backgroundColor: '#FF7165 '}}}>
            Login
          </Button>
          </div>
          <div className="text-gray-700 text-lg">
            Already registered?{" "}
            <span
              onClick={() => {
                navigate("/auth/login");
              }}
              className="text-blue_et cursor-pointer hover:text-blue_et font-semibold"
            >
              Log in &#8594;
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
