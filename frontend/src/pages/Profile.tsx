import React from 'react';

function Profile() {
  const profileData = JSON.parse(localStorage.getItem('profile') || '{}');
  const { EmployeeID, FirstName, LastName, Email, ContactNumber, EmploymentStartDate, Expense } = profileData;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
      <h2>Profile Details</h2>
      <div style={{ marginBottom: '20px' }}>
        <p><strong>Employee ID:</strong> {EmployeeID}</p>
        <p><strong>Name:</strong> {FirstName} {LastName}</p>
        <p><strong>Email:</strong> {Email}</p>
        <p><strong>Contact Number:</strong> {ContactNumber}</p>
        <p><strong>Employment Start Date:</strong> {EmploymentStartDate}</p>
      </div>

      {Expense && Expense.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>Expenses</h3>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            {Expense.map((expense: any) => (
              <li key={expense.ExpenseID}>
                <p><strong>Date:</strong> {expense.Date}</p>
                <p><strong>Amount:</strong> {expense.Amount}</p>
                <p><strong>Category:</strong> {expense.Category}</p>
                <p><strong>Purpose:</strong> {expense.Purpose}</p>
                <p><strong>Approval Status:</strong> {expense.ApprovalStatus}</p>
                {expense.ImagesSlip.length > 0 && (
                  <div style={{ marginTop: '10px' }}>
                    <p><strong>Expense Slip Images:</strong></p>
                    <ul style={{ listStyle: 'none', padding: '0' }}>
                      {expense.ImagesSlip.map((image: string, index: number) => (
                        <li key={index}>
                          <img src={image} alt={`Expense Slip ${index + 1}`} style={{ maxWidth: '150px', marginRight: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Profile;
