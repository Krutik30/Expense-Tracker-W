import React, { useState } from 'react';
import { Autocomplete, TextField } from "@mui/material";
import { Employee } from './SalaryIssued';
import { requestMe } from '../../utils/requestMe';


interface AdvanceAmountFormProps {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (formData: AdvanceFormData) => void;
}

export interface AdvanceFormData {
  EmployeeID: number;
  AdvanceAmount: number;
  DateIssued: string;
  Reason: string;
  Status: string;
  GivenByAdminID: string;
}

const IssuedAdvance: React.FC<AdvanceAmountFormProps> = () => {
  const [formData, setFormData] = useState<AdvanceFormData>({
    EmployeeID: 0,
    AdvanceAmount: 0,
    DateIssued: '',
    Reason: '',
    Status: '',
    GivenByAdminID: JSON.parse(localStorage.getItem('user') || '{}').staff.admin.AdminID,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleEmployeeChange = (
    event: React.ChangeEvent<{}>,
    value: Employee | null
  ) => {
    event.preventDefault();
    setFormData({
      ...formData,
      EmployeeID: value?.EmployeeID || 1 ,
    });
  };


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try{
      const res = await requestMe('/advance/addAdvance', {
        method: 'post',
        body: JSON.stringify(formData),
      })
      console.log(res);
    }catch(err){
      console.log(err);
    }
  };
 
  return (
    <div className="bg-blue-800  mx-auto min-h-screen flex items-center justify-center">
     <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl mx-auto p-8 bg-white rounded shadow-md space-y-4"
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
          id="AdvanceAmount"
          label="Advance Amount"
          variant="outlined"
          className="w-full mb-4"
          type="number"
          name="AdvanceAmount"
          value={formData.AdvanceAmount}
          onChange={handleInputChange}
        />

        <TextField
          id="DateIssued"
          label="Date Issued"
          variant="outlined"
          className="w-full mb-4"
          type="date"
          name="DateIssued"
          value={formData.DateIssued}
          onChange={handleInputChange}
        />

        <TextField
          id="Reason"
          label="Reason"
          variant="outlined"
          className="w-full mb-4"
          type="text"
          name="Reason"
          value={formData.Reason}
          onChange={handleInputChange}
        />

        <Autocomplete
          renderInput={(params) => <TextField {...params} label="Status" />}
          options={['Pending', 'Paid', 'Part']}
          onChange={(newValue: any) => {
            setFormData({
              ...formData,
              Status: newValue.target.value
            })
          }}
          className=" w-full"
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

export default IssuedAdvance;