import React, { useState } from 'react';
import { Autocomplete, TextField,Button } from "@mui/material";
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
      EmployeeID: value?.EmployeeID || 1,
    });
  };


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const res = await requestMe('/advance/addAdvance', {
        method: 'post',
        body: JSON.stringify(formData),
      })
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" bg-sky_et min-h-screen flex items-center justify-center">
      <div className="bg-aqua_et rounded-lg shadow-md p-8 space-y-4 w-2/5">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Advance Salary</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-4"
      >
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
          className=" w-full"
        />
        </div>
        <div>
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
        </div>
        <div>
        <TextField
          InputLabelProps={{ shrink: true }}
          id="DateIssued"
          label="Date Issued"
          variant="outlined"
          className="w-full mb-4"
          type="date"
          name="DateIssued"
          value={formData.DateIssued}
          onChange={handleInputChange}
        />
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div className='col-span-2 text-center'>
        <Button type="submit" variant="contained" color="primary" size="large" sx={{width:"100%", backgroundColor: "#303C6C", fontSize: 20, fontWeight: 'normal', transition: 'background-color 0.3s', '&:hover': { backgroundColor: '#FF7165 ' } }}>
          Submit
        </Button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default IssuedAdvance;