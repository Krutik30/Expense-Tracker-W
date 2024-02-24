// AdminHeader.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const AdminHeader: React.FC = () => {
    const handleLogout = () => {
        localStorage.clear()
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Expense Tracker (Admin)
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
                <Button color="inherit" onClick={handleLogout}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};

const EmployeeHeader: React.FC = () => {
    const handleLogout = () => {
        localStorage.clear()
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Expense Tracker (Employee)
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
                <Button color="inherit" onClick={handleLogout}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export { AdminHeader, EmployeeHeader};
