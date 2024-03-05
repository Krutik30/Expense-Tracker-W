import { Card, CardMedia, CardContent, CardActionArea, Grid, Typography} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import {grey} from '@mui/material/colors';
import SuspenseErrorBoundary from '../../components/RequireComponent/SuspenseErrorBoundry';

function ExpenseCard({ expense }: any) {
  return (
      <Grid item xs={12} md={6} lg={4} className=''>
      <Card sx={{ m: 3, borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
        <CardActionArea sx={{}}>
          <CardMedia
            component="img"
            className='h-36'
            src={expense.ImagesSlip[0]}
            alt={expense.Purpose}
            sx={{borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
          />
          <CardContent  sx={{backgroundColor: '#D2FDFF', p: 3 }}>
            <Typography sx={{fontSize:'26px'}} variant="h6" gutterBottom>
              {expense.Purpose}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Amount: ${Number(expense?.Amount)?.toFixed(2)}
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
              <DownloadIcon sx={{ color: "#303C6C",transition: 'background-color 0.3s', '&:hover': { color: '#FF7165 ' } }}></DownloadIcon>
              <BookmarkIcon sx={{ color: "#303C6C",transition: 'background-color 0.3s', '&:hover': { color: '#FF7165 ' } }}></BookmarkIcon>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

function ListOfExpenses() {

  const expenses = JSON.parse(localStorage.getItem('expenses') || '[]')

  console.log(expenses);
  return (
    <div className='p-24 min-h-screen bg-sky_et'>
      <Grid container spacing={2} className=''>
        <SuspenseErrorBoundary>
          {expenses.length && expenses.map((expense: any, index: number) => (
            <ExpenseCard key={index} expense={expense} />
          ))}
        </SuspenseErrorBoundary>
      </Grid>
    </div>
  );
}

export default ListOfExpenses;
