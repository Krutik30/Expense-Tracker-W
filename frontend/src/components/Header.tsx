// AdminHeader.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png'

const AdminHeader: React.FC = () => {
    return (
        <>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                (Admin)
            </Typography>
            <Button color="inherit" component={Link} to="/dashboard">
                Dashboard
            </Button>
            <Button color="inherit" component={Link} to="/add/employee">
                Add Employee
            </Button>
            <Button color="inherit" component={Link} to="/salary/issue">
                Salary Issue
            </Button>
            <Button color="inherit" component={Link} to="/issued/advance">
                Issued Advance
            </Button>
            <Button color="inherit" component={Link} to="/list/employee">
                List of Employees
            </Button>
        </>
    );
};

const EmployeeHeader: React.FC = () => {

    return (
        <>
        
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                (Employee)
            </Typography>
            <Button color="inherit" component={Link} to="/dashboard">
                Dashboard
            </Button>
            <Button color="inherit" component={Link} to="/add/expense">
                Add Expense
            </Button>
            <Button color="inherit" component={Link} to="/request/salary">
                Request Salary
            </Button>
            <Button color="inherit" component={Link} to="/list/expense">
                List of Expenses
            </Button>
            <Button color="inherit" component={Link} to="/wallet">
                Wallet
            </Button>
            <Button color="inherit" component={Link} to="/history">
                History
            </Button>
        </>
    );
};

const Header: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate(0);
    };

    const user = JSON.parse(localStorage.getItem('user') || '{}');

    return (
        <AppBar position="static" sx={{bgcolor:'black'}}>
           
            <Toolbar>
            <img src={Logo} alt="Logo" style={{ height: '60px', marginRight: '10px' }} />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Expense Tracker
                </Typography>
                {user.auth && user.role === 'ADMIN' && <AdminHeader />}
                {user.auth && user.role === 'EMPLOYEE' && <EmployeeHeader />}
                {user.auth && <Button color="inherit" onClick={handleLogout}>
                    Logout
                </Button>}
            </Toolbar>
        </AppBar>
    )
}

export default Header;
