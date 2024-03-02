import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import profileIcon from '../assets/usericon.png';

function Profile() {
  const profileData = JSON.parse(localStorage.getItem('profile') || '{}');
  const { EmployeeID, FirstName, LastName, Email, ContactNumber, EmploymentStartDate, Expense } = profileData;
  const [value, setValue] = useState(0);

  const handleChange = (_event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <div className=" min-h-screen mx-auto p-6 bg-sky_et rounded-md shadow-md">
      <h2 className="text-3xl font-semibold mb-4 text-center p-4 underline">Profile Details</h2>
      <div className="mb-4 grid grid-cols-3 gap-2 bg-aqua_et p-6 rounded-lg">
        <div>
          <img className='w-36 rounded-lg' src={profileIcon} alt="" />
        </div>
        <div>
          <p className="font-semibold">Employee ID:</p>
          <p className="font-semibold">Name:</p>
          <p className="font-semibold">Email:</p>
          <p className="font-semibold">Contact Number:</p>
          <p className="font-semibold">Employment Start Date:</p>
        </div>
        <div>
          <p>{EmployeeID}</p>
          <p>{FirstName} {LastName}</p>
          <p>{Email}</p>
          <p>{ContactNumber}</p>
          <p>{EmploymentStartDate}</p>
        </div>
      </div>
      <div className="mx-auto p-6 bg-aqua_et w-full rounded-lg">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="profile tabs">
            <Tab label="Advance" />
            <Tab label="Salary" />
            <Tab label="Expense" />
          </Tabs>
        </Box>
        {value === 0 && (
          <div>
            {/* Advance tab content */}
            <h3 className="text-xl font-semibold mb-4">Advance Details</h3>
            <p>Advance tab content goes here...</p>
          </div>
        )}

        {value === 1 && (
          <div>
            {/* Salary tab content */}
            <h3 className="text-xl font-semibold mb-4">Salary Details</h3>
            <p>Salary tab content goes here...</p>
          </div>
        )}

        {value === 2 && (
          <div>
            {/* Expense tab content */}
            <h3 className="text-2xl font-semibold mb-4">Expenses</h3>
            {Expense && Expense.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {Expense.map((expense: { ExpenseID: React.Key | null | undefined; Date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; Amount: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; Category: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; Purpose: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; ApprovalStatus: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; ImagesSlip: any[]; }) => (
                  <div key={expense.ExpenseID} className="bg-sky_et rounded-md p-3 grid grid-cols-2 gap-1 text-wrap">
                    <div>
                      <p className="font-semibold">Date:</p>
                      <p className="font-semibold">Amount:</p>
                      <p className="font-semibold">Category:</p>
                      <p className="font-semibold">Purpose:</p>
                      <p className="font-semibold">Approval Status:</p>
                      <p className="font-semibold">Expense Slip Images:</p>
                    </div>
                    <div>
                      <p>{expense.Date}</p>
                      <p>{expense.Amount}</p>
                      <p>{expense.Category}</p>
                      <p>{expense.Purpose}</p>
                      <p>{expense.ApprovalStatus}</p>
                    </div>
                    {expense.ImagesSlip.length > 0 && (
                      <div className="">
                        {expense.ImagesSlip.map((image: string | undefined, index: number) => (
                          <div key={index} className="">
                            <img src={image} alt={`Expense Slip ${index + 1}`} className="w-96 rounded-md" />
                          </div>
                        ))}
                      </div>
                    )}

                  </div>
                ))}
              </div>
            ) : (
              <p>No expenses found.</p>
            )}
          </div>
        )}

      </div>

    </div>
  );
}

export default Profile;
