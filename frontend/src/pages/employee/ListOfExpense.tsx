import { Card, CardMedia, CardContent, CardActionArea, Grid, Typography } from '@mui/material';

function ExpenseCard({ expense }: any) {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card sx={{ m: 2, borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={expense.ImagesSlip[0]}
            alt={expense.Purpose}
            sx={{ borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
          />
          <CardContent sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              {expense.Purpose}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Amount: ${Number(expense.Amount).toFixed(2)}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Category: {expense.Category?.Name}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Approved By: {expense.ApprovedByAdmin?.Name || 'Not approved'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Employee ID: {expense.EmployeeID}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

function ListOfExpenses() {

  const expenses = JSON.parse(localStorage.getItem('expense') || '[]')

  console.log(expenses);
  return (
    <div className='p-24'>
      <Grid container spacing={2}>
        {expenses.map((expense: any, index: number) => (
          <ExpenseCard key={index} expense={expense} />
        ))}
      </Grid>
    </div>
  );
}

export default ListOfExpenses;
