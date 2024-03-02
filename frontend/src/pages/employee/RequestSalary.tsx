
import { Autocomplete, TextField,Button } from "@mui/material";

function RequestSalary() {
  return (
    <div className=" bg-sky_et min-h-screen flex items-center justify-center">
      <div className="bg-aqua_et rounded-lg shadow-md p-8 space-y-4 w-2/5">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Request Salary</h2>
        <form
          className="grid grid-cols-2 gap-4"
        >
          <div>
            <Autocomplete
              renderInput={(params) => <TextField {...params} label="Employee" />}
              options={['Pending', 'Paid', 'Part']}
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
            />
          </div>
          <div>
            <Autocomplete
              renderInput={(params) => <TextField {...params} label="Status" />}
              options={['Pending', 'Paid', 'Part']}
              className=" w-full"
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

export default RequestSalary