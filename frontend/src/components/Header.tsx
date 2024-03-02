import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import './Header.css'; // Import CSS file for additional styling
import Logo from '../assets/FINAL_LOGO.svg';

const AdminHeader: React.FC = () => {
    return (
        <>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: "none", md: 'block' } }}>
                (Admin)
            </Typography>
            <Button color="inherit" component={Link} to="/dashboard" className="header-button">
                Dashboard
            </Button>
            <Button color="inherit" component={Link} to="/add/employee" className="header-button">
                Add Employee
            </Button>
            <Button color="inherit" component={Link} to="/salary/issue" className="header-button">
                Salary Issue
            </Button>
            <Button color="inherit" component={Link} to="/issued/advance" className="header-button">
                Issued Advance
            </Button>
            <Button color="inherit" component={Link} to="/list/employee" className="header-button">
                List of Employees
            </Button>
            <Button color="inherit" component={Link} to="/profile" className="header-button">
                Profile
            </Button>
        </>
    );
};

const EmployeeHeader: React.FC = () => {
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h6" component="div" sx={{ display: { xs: 'none', md: 'block' } }}>
                    (Employee)
                </Typography>
                <Button color="inherit" component={Link} to="/dashboard" className="header-button">
                    Dashboard
                </Button>
                <Button color="inherit" component={Link} to="/add/expense" className="header-button">
                    Add Expense
                </Button>
                <Button color="inherit" component={Link} to="/list/expense" className="header-button">
                    List of Expenses
                </Button>
                <Button color="inherit" component={Link} to="/wallet" className="header-button">
                    Wallet
                </Button>
                <Button color="inherit" component={Link} to="/history" className="header-button">
                    History
                </Button>
                <Button color="inherit" component={Link} to="/profile" className="header-button">
                    Profile
                </Button>
            </Box>
        </>
    );
};

const Header: React.FC = () => {
    const navigate = useNavigate();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate(0);
    };

    const user = JSON.parse(localStorage.getItem('user') || '{}');

    return (
        <AppBar position="fixed">
            <Toolbar>
                <img src={Logo} width='150px' height='auto' />
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
                    {user.auth && user.role === 'ADMIN' && <AdminHeader />}
                    {user.auth && user.role === 'EMPLOYEE' && <EmployeeHeader />}
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {user.auth && (
                        <Button color="inherit" onClick={handleLogout} className="header-button">
                            Logout
                        </Button>
                    )}
                </Box>
            </Toolbar>
            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={handleDrawerToggle}
            >
                <List>
                    {user.auth && user.role === 'ADMIN' && (

                        <>
                            <Typography variant="h6" component="div" sx={{
                                flexGrow: 1,
                                backgroundColor: 'rgb(30, 64, 175)',
                                color: '#f0f0f0'
                            }}>
                                (Employee)
                            </Typography>
                            <ListItem button component={Link} to="/dashboard">
                                <ListItemText primary="Dashboard" />
                            </ListItem>
                            <ListItem button component={Link} to="/add/employee">
                                <ListItemText primary="Add Employee" />
                            </ListItem>
                            <ListItem button component={Link} to="/salary/issue">
                                <ListItemText primary="Salary Issue" />
                            </ListItem>
                            <ListItem button component={Link} to="/issued/advance">
                                <ListItemText primary="Issued Advance" />
                            </ListItem>
                            <ListItem button component={Link} to="/list/employee">
                                <ListItemText primary="List of Employees" />
                            </ListItem>
                            <ListItem button component={Link} to="/profile">
                                <ListItemText primary="Profile of Admin" />
                            </ListItem>
                        </>
                    )}
                    {user.auth && user.role === 'EMPLOYEE' && (

                        <>
                            <Typography variant="h6" component="div" sx={{
                                flexGrow: 1,
                                backgroundColor: 'rgb(30, 64, 175)',
                                color: '#f0f0f0'
                            }}>
                                (Admin)
                            </Typography>
                            <ListItem button component={Link} to="/dashboard">
                                <ListItemText primary="Dashboard" />
                            </ListItem>
                            <ListItem button component={Link} to="/add/expense">
                                <ListItemText primary="Add Expense" />
                            </ListItem>
                            <ListItem button component={Link} to="/list/expense">
                                <ListItemText primary="List of Expenses" />
                            </ListItem>
                            <ListItem button component={Link} to="/wallet">
                                <ListItemText primary="Wallet" />
                            </ListItem>
                            <ListItem button component={Link} to="/history">
                                <ListItemText primary="History" />
                            </ListItem>
                            <ListItem button component={Link} to="/profile">
                                <ListItemText primary="Profile of Employee" />
                            </ListItem>
                        </>
                    )}
                    {user.auth && (
                        <ListItem button onClick={handleLogout}>
                            <ListItemText primary="Logout" />
                        </ListItem>
                    )}
                </List>
            </Drawer>
        </AppBar>
    );
}

export default Header;
