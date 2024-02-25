import React, { useState } from "react";

import { requestMe } from "../../utils/requestMe";

import { Autocomplete, TextField } from "@mui/material";

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
    <div className="bg-blue-800  mx-auto min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl mx-auto p-8 bg-white rounded shadow-md space-y-4 flex flex-col items-center"
      >
        <Autocomplete
          renderInput={(params) => <TextField {...params} label="Employee" />}
          getOptionLabel={(option: Employee | null) => {
            return option ? `${option.FirstName} ${option.LastName}` : "";
          }}
          options={
            JSON.parse(localStorage.getItem("employees") || "[]") as Employee[]
          }
          onChange={handleEmployeeChange}
         className=" w-full"
        />
        <TextField
          id="outlined-basic"
          label="Basic Salary"
          variant="outlined"
          className="w-full mb-4"
          name="BasicSalary"
          value={salaryData.BasicSalary}
          onChange={handleChange}
          type="number"
        />

        <TextField
          id="outlined-basic"
          label="Bonuses"
          variant="outlined"
          className="w-full mb-4"
          name="Bonuses"
          value={salaryData.Bonuses}
          onChange={handleChange}
          type="number"
        />

        <TextField
          id="outlined-basic"
          label="Allowances"
          variant="outlined"
          className="w-full mb-4"
          name="Allowances"
          value={salaryData.Allowances}
          onChange={handleChange}
          type="number"
        />

        <TextField
          id="outlined-basic"
          label="Deductions"
          variant="outlined"
          className="w-full mb-4"
          name="Deductions"
          value={salaryData.Deductions}
          onChange={handleChange}
          type="number"
        />

        <Autocomplete
          renderInput={(params) => <TextField {...params} label="Status" />}
          options={['Pending', 'Paid', 'Part']}
          onChange={(newValue: any)=>{
            setSalaryData({
              ...salaryData,
              PaymentStatus: newValue.target.value
            })
          }}
          className=" w-full" 
        />

        <TextField
          id="outlined-basic"
          label="Payment Frequency"
          variant="outlined"
          className="w-full mb-4"
          name="PaymentFrequency"
          value={salaryData.PaymentFrequency}
          onChange={handleChange}
          type="text"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-8 py-3 rounded-full flex items-center justify-between mt-10 flex-col gap-5 font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SalaryIssued;
