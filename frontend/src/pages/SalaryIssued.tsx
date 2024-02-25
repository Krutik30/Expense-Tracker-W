import React, { useState } from 'react';


import { requestMe } from '../utils/requestMe';
import LabelInput from '../components/LabelInput';
import { Autocomplete, TextField } from '@mui/material';

interface SalaryFormProps {
  employeeId: number;
}

interface Employee {
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
    PaymentFrequency: '',
    PaymentStatus: 'Pending',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let parsedValue: string | number;

    switch (e.target.type) {
      case 'number':
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

  const handleEmployeeChange = (event: React.ChangeEvent<{}>, value: Employee | null) => {
    event.preventDefault();
    setSalaryData((prevData) => ({
      ...prevData,
      EmployeeID: value ? value.EmployeeID : 0,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {

      const response = await requestMe('/salary/createSalaries', {
        method: "post",
        body: JSON.stringify(salaryData),
      });

      console.log('Salary data submitted:', response);
    } catch (error) {
      console.error('Error submitting salary data:', error);
    }
  };

  return (
    <div className="bg-blue-800  mx-auto min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto p-8 bg-white rounded shadow-md">
        <Autocomplete
          renderInput={(params) => <TextField {...params} label="Employee" />}
          getOptionLabel={(option: Employee | null) => {
            return option ? `${option.FirstName} ${option.LastName}` : '';
          }}
          options={JSON.parse(localStorage.getItem('employees') || '[]') as Employee[]}
          onChange={handleEmployeeChange}
        />
        <LabelInput
          label={"Basic Salary:"}
          name="BasicSalary"
          value={salaryData.BasicSalary}
          onChange={handleChange}
          type="number"
        />


        <div className="mb-4 w-full">
          <label className="block mt-2 w-full text-2xl font-semibold p-3  text-gray-700 text-left">
            Bonuses:
          </label>
          <input
            type="number"
            name="Bonuses"
            value={salaryData.Bonuses}
            onChange={handleChange}
            className="form-input w-full mt-2 px-4 py-2 rounded-md border border-blue-400 focus:outline-none focus:border-blue-500"
          />

        </div>

        <div className="mb-4 w-full ">

          <label className="block mt-2 w-full text-2xl font-semibold p-3 text-gray-700 text-left">
            Allowances:
          </label>
          <input
            type="number"
            name="Allowances"
            value={salaryData.Allowances}
            onChange={handleChange}
            className="form-input w-full mt-2 px-4 py-2 rounded-md border border-blue-400 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4 w-full ">
          <label className="block mt-2 w-full text-2xl font-semibold p-3 text-gray-700 text-left">
            Deductions:
          </label>
          <input
            type="number"
            name="Deductions"
            value={salaryData.Deductions}
            onChange={handleChange}
            className="form-input w-full mt-2 px-4 py-2 rounded-md border border-blue-400 focus:outline-none focus:border-blue-500"
          />
        </div>


        <div className="mb-4 w-full ">
          <label className="block mt-2 w-full text-2xl font-semibold p-3 text-gray-700 text-left">
            Payment Status:
          </label>
          <input
            type="text"
            name="PaymentStatus"
            value={salaryData.PaymentStatus}
            onChange={handleChange}
            className="form-input w-full mt-2 px-4 py-2 rounded-md border border-blue-400 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4 w-full ">
          <label className="block mt-2 w-full text-2xl font-semibold p- text-gray-700 text-left" >
            Payment Frequency:
          </label>
          <input
            type="text"
            name="PaymentFrequency"
            value={salaryData.PaymentFrequency}
            onChange={handleChange}
            className="form-input w-full mt-2 px-4 py-2 rounded-md border border-blue-400 focus:outline-none focus:border-blue-500"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-8 py-3 rounded-full flex items-center justify-between mt-10 flex-col gap-5 font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SalaryIssued;
