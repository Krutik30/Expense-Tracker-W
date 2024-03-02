import React, { useState } from "react";
import { requestMe } from "../../utils/requestMe";
import { Autocomplete, TextField, Button } from "@mui/material";
import CustomAutocompleteField from "../../components/CustomAutoCompleteField";
import { SalaryFrequency, Status } from "../../../config";

interface SalaryFormProps {
  employeeId: number;
}

export interface EmployeeType {
  EmployeeID: number;
  FirstName: string;
  LastName: string;
  Email: string;
  ContactNumber: string;
  EmploymentStartDate: string;
}

const Employee:any = JSON.parse(localStorage.getItem("employees") || "[]") as EmployeeType[]

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
    value: EmployeeType | null
  ) => {
    event.preventDefault();
    setSalaryData((prevData) => ({
      ...prevData,
      EmployeeID: value ? value.EmployeeID : 0,
    }));
    setSalaryData((prevData) => ({
      ...prevData,
      PaymentFrequency: Employee.find((e: EmployeeType)=>e.EmployeeID===value?.EmployeeID)[0]?.Salary[0]?.PaymentFrequency || "YEARLY",
    }));
  };


  const handleAutoCompleteChange = (name: string, value: string | null) => {
    setSalaryData((prevFormData) => ({
      ...prevFormData,
      [name]: value || '',
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
              getOptionLabel={(option: EmployeeType | null) => {
                return option ? `${option.FirstName} ${option.LastName}` : "";
              }}
              options={
                Employee
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
            <CustomAutocompleteField
              id="payment-status"
              options={Status}
              label="Payment Status"
              value={salaryData.PaymentStatus}
              name="PaymentStatus"
              onChange={handleAutoCompleteChange}
            />
          </div>
          <div>
            <CustomAutocompleteField
              id="payment-frequency"
              options={SalaryFrequency}
              label="Payment Frequency"
              value={salaryData.PaymentFrequency}
              name="PaymentFrequency"
              onChange={handleAutoCompleteChange}
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
