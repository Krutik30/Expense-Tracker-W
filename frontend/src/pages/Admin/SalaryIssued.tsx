import React, { useState } from "react";
import { requestMe } from "../../utils/requestMe";
import { Autocomplete, TextField, Button } from "@mui/material";

interface SalaryFormProps {
  employeeId: number;
}

export interface Employee {
  EmployeeID: number;
  FirstName: string;
  LastName: string;
  Email: string;
  ContactNumber: string;
  EmploymentStartDate: string;
}

const SalaryIssued: React.FC<SalaryFormProps> = () => {
  const [salaryData, setSalaryData] = useState({
    EmployeeID: 0,
    BasicSalary: 0,
    Bonuses: 0,
    Allowances: 0,
    Deductions: 0,
    PaymentFrequency: "",
    PaymentStatus: "Pending",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let parsedValue: string | number;

    switch (e.target.type) {
      case "number":
        parsedValue = parseFloat(value);
        break;
      default:
        parsedValue = value;
        break;
    }

    setSalaryData((prevData) => ({
      ...prevData,
      [name]: parsedValue,
    }));
  };

  const handleEmployeeChange = (
    event: React.ChangeEvent<{}>,
    value: Employee | null
  ) => {
    event.preventDefault();
    setSalaryData((prevData) => ({
      ...prevData,
      EmployeeID: value ? value.EmployeeID : 0,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(salaryData);
    try {
      const response = await requestMe("/salary/createSalaries", {
        method: "post",
        body: JSON.stringify(salaryData),
      });

      console.log("Salary data submitted:", response);
    } catch (error) {
      console.error("Error submitting salary data:", error);
    }
  };

  return (
    <div className=" bg-sky_et min-h-screen flex items-center justify-center">
      <div className="bg-aqua_et rounded-lg shadow-md p-8 space-y-4 w-2/5">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Salary Issue</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <Autocomplete
              renderInput={(params) => <TextField {...params} label="Employee" />}
              getOptionLabel={(option: Employee | null) => {
                return option ? `${option.FirstName} ${option.LastName}` : "";
              }}
              options={
                JSON.parse(localStorage.getItem("employees") || "[]") as Employee[]
              }
              onChange={handleEmployeeChange}
              className="w-full"
            />
          </div>
          <div>
            <TextField
              id="basic-salary"
              label="Basic Salary"
              variant="outlined"
              className="w-full"
              name="BasicSalary"
              value={salaryData.BasicSalary}
              onChange={handleChange}
              type="number"
              sx={{}}
            />
          </div>
          <div>
            <TextField
              id="bonuses"
              label="Bonuses"
              variant="outlined"
              className="w-full"
              name="Bonuses"
              value={salaryData.Bonuses}
              onChange={handleChange}
              type="number"
            />
          </div>
          <div>
            <TextField
              id="allowances"
              label="Allowances"
              variant="outlined"
              className="w-full"
              name="Allowances"
              value={salaryData.Allowances}
              onChange={handleChange}
              type="number"
            />
          </div>
          <div>
            <TextField
              id="deductions"
              label="Deductions"
              variant="outlined"
              className="w-full"
              name="Deductions"
              value={salaryData.Deductions}
              onChange={handleChange}
              type="number"
            />
          </div>
          <div>
            <Autocomplete
              renderInput={(params) => <TextField {...params} label="Status" />}
              options={['Pending', 'Paid', 'Part']}
              onChange={(newValue: any) => {
                setSalaryData({
                  ...salaryData,
                  PaymentStatus: newValue.target.value
                })
              }}
              className="w-full"
            />
          </div>
          <div>
            <TextField
              id="payment-frequency"
              label="Payment Frequency"
              variant="outlined"
              className="w-full"
              name="PaymentFrequency"
              value={salaryData.PaymentFrequency}
              onChange={handleChange}
              type="text"
            />
          </div>

          <div className="col-span-2 text-center">
            <Button type="submit" variant="contained" color="primary" size="large" sx={{width:"100%", backgroundColor: "#303C6C", fontSize: 20, fontWeight: 'normal', transition: 'background-color 0.3s', '&:hover': { backgroundColor: '#FF7165 ' } }}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>


  );
};

export default SalaryIssued;
