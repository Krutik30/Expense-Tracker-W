
import { TextField,Button } from "@mui/material";
import React, { useState } from "react";
import CustomAutocompleteField from "../../components/CustomAutoCompleteField";
import { Status } from "../../config";
import { requestMe } from "../../utils/requestMe";

export interface AdvanceFormData {
  EmployeeID: number,
  AdvanceAmount: number,
  DateIssued: string,
  Reason: string,
  Status: string,
}

function RequestAdvance() {

  const [formData, setFormData] = useState<AdvanceFormData>({
    EmployeeID: JSON.parse(localStorage.getItem('user') || "{}").staff.StaffId,
    AdvanceAmount: 0,
    DateIssued: '',
    Reason: '',
    Status: 'PENDING',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'number' ? Number(value) : value,
    });
  };

  const handleAutoCompleteChange = (name: string, value: string | null) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value || '',
    }));
  };


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    console.log(formData);
    try {
      await requestMe("/advance/addAdvance", {
        method: "post",
        body: JSON.stringify(formData),
      });
      const advance = JSON.parse(localStorage.getItem('advance') || '[]')
      localStorage.setItem('advance', JSON.stringify([...advance, formData]))
    } catch (error) {
      console.error("Error submitting employee data:", error);
    }

  };


  return (
    <div className=" bg-sky_et min-h-screen flex items-center justify-center">
      <div className="bg-aqua_et rounded-lg shadow-md p-8 space-y-4 w-2/5">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Request Advance</h2>
        <form
          className="grid grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          <div>
            <TextField
              InputLabelProps={{ shrink: true }}
              id="AdvanceAmount"
              label="Advance Amount"
              variant="outlined"
              className="w-full mb-4"
              type="number"
              value={formData.AdvanceAmount}
              onChange={handleInputChange}
              name="AdvanceAmount"
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
              value={formData.DateIssued}
              onChange={handleInputChange}
              name="DateIssued"
            />
          </div>
          <div>
            <TextField
              id="Reason"
              label="Reason"
              variant="outlined"
              className="w-full mb-4"
              value={formData.Reason}
              onChange={handleInputChange}
              type="text"
              name="Reason"
            />
          </div>
          <div>
            <CustomAutocompleteField
              id="category"
              options={Status}
              label="Status"
              value={formData.Status}
              name="Status"
              onChange={handleAutoCompleteChange}
            />
          </div>
          <div className='col-span-2 text-center'>
            <Button type="submit" variant="contained" color="primary" size="large" sx={{ width: "100%", backgroundColor: "#303C6C", fontSize: 20, fontWeight: 'normal', transition: 'background-color 0.3s', '&:hover': { backgroundColor: '#FF7165 ' } }}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RequestAdvance