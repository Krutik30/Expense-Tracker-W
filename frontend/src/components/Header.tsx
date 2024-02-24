// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header: React.FC = () => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const userRole = localStorage.getItem('userRole') as 'admin' | 'employee' | null;

    const handleLogout = () => {
        // Handle logout logic
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userRole');
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Expense Tracker
                </Typography>
                {isAuthenticated && userRole === 'admin' && (
                    <>
                        <Button color="inherit" component={Link} to="/dashboard">
                            Dashboard
                        </Button>
                        <Button color="inherit" component={Link} to="/profile">
                            Profile
                        </Button>
                    </>
                )}
                {isAuthenticated && userRole === 'employee' && (
                    <>
                        <Button color="inherit" component={Link} to="/dashboard">
                            Dashboard
                        </Button>
                        <Button color="inherit" component={Link} to="/profile">
                            Profile
                        </Button>
                    </>
                )}
                {isAuthenticated && (
                    <Button color="inherit" onClick={handleLogout}>
                        Logout
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
