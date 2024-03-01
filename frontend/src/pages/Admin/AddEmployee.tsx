import { useState } from "react";
import { requestMe } from "../../utils/requestMe";
import { Button, TextField } from "@mui/material";


const AddEmployee = () => {
  const [employeeData, setEmployeeData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    ContactNumber: "",
    EmploymentStartDate: new Date(), // Initialize with a Date object
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [name]: name === "EmploymentStartDate" ? new Date(value) : value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      await requestMe("/employees/createEmployees", {
        method: "post",
        body: JSON.stringify(employeeData),
      });
    } catch (error) {
      console.error("Error submitting employee data:", error);
    }
  };
  return (
   
    <div className=" bg-sky_et min-h-screen flex items-center justify-center">
      <div className="bg-aqua_et rounded-lg shadow-md p-8 space-y-4 w-2/5">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Add Employee</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-4"
      >
        <div>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          className="w-full rounded-3xl"
          name="FirstName"
          value={employeeData.FirstName}
          onChange={handleChange}
        />
        </div>
        <div>
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          className="w-full mb-4"
          name="LastName"
          value={employeeData.LastName}
          onChange={handleChange}
        />
        </div>
        <div>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className="w-full mb-4"
          type="text"
          name="Email"
          value={employeeData.Email}
          onChange={handleChange}
        />
        </div>
        <div>
        <TextField
          id="outlined-basic"
          label="Contact Number"
          variant="outlined"
          className="w-full mb-4"
          type="tel"
          name="ContactNumber"
          value={employeeData.ContactNumber}
          onChange={handleChange}
        />
        </div>
        <div>
        <TextField
          id="outlined-basic"
          label="Employment Start Date"
          variant="outlined"
          className="w-full mb-4"
          type="date"
          name="EmploymentStartDate"
          value={employeeData.EmploymentStartDate}
          onChange={handleChange}
        />
        </div>
        <div className="col-span-2 text-center">
            <Button type="submit" variant="contained" color="primary" size="large" sx={{width:"100%", backgroundColor: "#303C6C", fontSize: 20, fontWeight: 'normal', transition: 'background-color 0.3s', '&:hover': { backgroundColor: '#FF7165 ' } }}>
              Add
            </Button>
          </div>
      </form>
    </div>
   </div>
  );
};

export default AddEmployee;
