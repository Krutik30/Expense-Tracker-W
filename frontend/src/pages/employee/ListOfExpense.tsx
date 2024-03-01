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
            src='https://www.shutterstock.com/image-vector/realistic-paper-shop-receipt-barcode-260nw-768909406.jpg'
            alt={expense.Purpose}
            sx={{ borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
          />
          <CardContent sx={{ p: 3 }}>
            <Typography sx={{fontSize:'26px'}} variant="h6" gutterBottom>
              {expense.Purpose}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Amount: ${expense.Amount.toFixed(2)}
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
  return (
    <div className='p-24'>
      <Grid container spacing={2}>
        {expenses.map((expense, index) => (
          <ExpenseCard key={index} expense={expense} />
        ))}
      </Grid>
    </div>
  );
}

export default ListOfExpenses;

const expenses = [
  {
    ExpenseID: 1,
    EmployeeID: 101,
    Date: "2024-02-20",
    Amount: 100.5,
    CategoryID: 1,
    Purpose: "Office Supplies",
    ApprovalStatus: "Approved",
    ApprovedByAdminID: 201,
    ImagesSlip: ["image1.jpg", "image2.jpg"],
    ApprovedByAdmin: {
      AdminID: 201,
      Name: "John Doe"
    },
    Employee: {
      EmployeeID: 101,
      Name: "Alice Smith"
    },
    Category: {
      CategoryID: 1,
      Name: "Office Supplies"
    }
  },
  {
    ExpenseID: 2,
    EmployeeID: 102,
    Date: "2024-02-21",
    Amount: 75.25,
    CategoryID: 2,
    Purpose: "Transportation",
    ApprovalStatus: "Pending",
    ImagesSlip: ["image3.jpg"],
    Employee: {
      EmployeeID: 102,
      Name: "Bob Johnson"
    },
    Category: {
      CategoryID: 2,
      Name: "Transportation"
    }
  },
  {
    ExpenseID: 3,
    EmployeeID: 103,
    Date: "2024-02-22",
    Amount: 200,
    CategoryID: 3,
    Purpose: "Dinner Meeting",
    ApprovalStatus: "Approved",
    ApprovedByAdminID: 202,
    ImagesSlip: ["image4.jpg", "image5.jpg"],
    ApprovedByAdmin: {
      AdminID: 202,
      Name: "Jane Smith"
    },
    Employee: {
      EmployeeID: 103,
      Name: "Charlie Brown"
    },
    Category: {
      CategoryID: 3,
      Name: "Meals & Entertainment"
    }
  },
  {
    ExpenseID: 4,
    EmployeeID: 104,
    Date: "2024-02-23",
    Amount: 50.75,
    CategoryID: 4,
    Purpose: "Office Supplies",
    ApprovalStatus: "Approved",
    ApprovedByAdminID: 203,
    ImagesSlip: ["image6.jpg"],
    ApprovedByAdmin: {
      AdminID: 203,
      Name: "Emily Wilson"
    },
    Employee: {
      EmployeeID: 104,
      Name: "David Jones"
    },
    Category: {
      CategoryID: 4,
      Name: "Miscellaneous"
    }
  },
  {
    ExpenseID: 5,
    EmployeeID: 105,
    Date: "2024-02-24",
    Amount: 150.5,
    CategoryID: 5,
    Purpose: "Travel Expenses",
    ApprovalStatus: "Rejected",
    ImagesSlip: ["image7.jpg"],
    Employee: {
      EmployeeID: 105,
      Name: "Eva Martinez"
    },
    Category: {
      CategoryID: 5,
      Name: "Travel"
    }
  }
];