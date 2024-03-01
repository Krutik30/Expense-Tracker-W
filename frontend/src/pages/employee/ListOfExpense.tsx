import { Card, CardMedia, CardContent, CardActionArea, Grid, Typography} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { blue, grey} from '@mui/material/colors';

function ExpenseCard({ expense }: any) {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card sx={{ m: 3, borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            className='h-36'
            src={expense.ImagesSlip[0]}
            alt={expense.Purpose}
            sx={{ borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
          />
          <CardContent sx={{ p: 3 }}>
            <Typography sx={{fontSize:'26px'}} variant="h6" gutterBottom>
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
            <Typography sx={{
              padding: "5px",
              position: "absolute", bottom: 140, left: 310,
              display: 'flex', flexDirection: 'row', gap:'8px',
              color: grey[600],
            }}>
              <DownloadIcon sx={{":hover" :{ color: blue[500]}}}></DownloadIcon>
              <BookmarkIcon sx={{":hover" :{ color: blue[500]}}}></BookmarkIcon>
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
    <div className='p-24 bg-gradient-to-r from-orange-700 via-orange-500 to-orange-400 h-screen'>
      <Grid container spacing={2}>
        {expenses.map((expense: any, index: number) => (
          <ExpenseCard key={index} expense={expense} />
        ))}
      </Grid>
    </div>
  );
}

export default ListOfExpenses;
