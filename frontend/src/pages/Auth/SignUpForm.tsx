import React, { useState } from "react";
import { requestMe } from "../../utils/requestMe";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { toast } from 'react-toastify';


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
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto my-8 p-6 bg-white rounded shadow-md space-y-4 flex flex-col items-center"
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
                <IoEye className="text-blue-500 flex " size={24} />
              ) : (
                <IoEyeOff className="text-blue-500 flex " size={24} />
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
                <IoEye className="text-blue-500 flex " size={24} />
              ) : (
                <IoEyeOff className="text-blue-500 flex " size={24} />
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

      {error && <div className="text-red-500 mb-4">{error}</div>}
      <button
        type="submit"
        className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold"
      >
        Sign Up
      </button>
      <div className="text-gray-700 text-lg">
        Already registered?{" "}
        <span
          onClick={() => {
            navigate("/auth/login");
          }}
          className="text-blue-500 cursor-pointer"
        >
          Log in &#8594;
        </span>
      </div>
    </form>
  );
};

export default SignUpForm;
