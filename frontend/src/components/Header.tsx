import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const EmployeeHeader: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    (Employee)
                </Typography>
                {/* Render menu icon on smaller screens */}
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenuOpen}
                    sx={{ display: { xs: 'block', md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                {/* Render menu options */}
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    onClick={handleMenuClose}
                >
                    <MenuItem component={Link} to="/dashboard">Dashboard</MenuItem>
                    <MenuItem component={Link} to="/add/expense">Add Expense</MenuItem>
                    <MenuItem component={Link} to="/request/salary">Request Salary</MenuItem>
                    <MenuItem component={Link} to="/list/expense">List of Expenses</MenuItem>
                    <MenuItem component={Link} to="/wallet">Wallet</MenuItem>
                    <MenuItem component={Link} to="/history">History</MenuItem>
                </Menu>
                {/* Render buttons on larger screens */}
                <Button color="inherit" component={Link} to="/dashboard" sx={{ display: { xs: 'none', md: 'block' } }}>
                    Dashboard
                </Button>
                <Button color="inherit" component={Link} to="/add/expense" sx={{ display: { xs: 'none', md: 'block' } }}>
                    Add Expense
                </Button>
                <Button color="inherit" component={Link} to="/request/salary" sx={{ display: { xs: 'none', md: 'block' } }}>
                    Request Salary
                </Button>
                <Button color="inherit" component={Link} to="/list/expense" sx={{ display: { xs: 'none', md: 'block' } }}>
                    List of Expenses
                </Button>
                <Button color="inherit" component={Link} to="/wallet" sx={{ display: { xs: 'none', md: 'block' } }}>
                    Wallet
                </Button>
                <Button color="inherit" component={Link} to="/history" sx={{ display: { xs: 'none', md: 'block' } }}>
                    History
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default EmployeeHeader;
