// // AdminHeader.tsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const AdminHeader: React.FC = () => {
//     return (
//         <>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                 (Admin)
//             </Typography>
//             <Button color="inherit" component={Link} to="/dashboard">
//                 Dashboard
//             </Button>
//             <Button color="inherit" component={Link} to="/add/employee">
//                 Add Employee
//             </Button>
//             <Button color="inherit" component={Link} to="/salary/issue">
//                 Salary Issue
//             </Button>
//             <Button color="inherit" component={Link} to="/issued/advance">
//                 Issued Advance
//             </Button>
//             <Button color="inherit" component={Link} to="/list/employee">
//                 List of Employees
//             </Button>
//         </>
//     );
// };

// const EmployeeHeader: React.FC = () => {

//     return (
//         <>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                 (Employee)
//             </Typography>
//             <Button color="inherit" component={Link} to="/dashboard">
//                 Dashboard
//             </Button>
//             <Button color="inherit" component={Link} to="/add/expense">
//                 Add Expense
//             </Button>
//             <Button color="inherit" component={Link} to="/request/salary">
//                 Request Salary
//             </Button>
//             <Button color="inherit" component={Link} to="/list/expense">
//                 List of Expenses
//             </Button>
//             <Button color="inherit" component={Link} to="/wallet">
//                 Wallet
//             </Button>
//             <Button color="inherit" component={Link} to="/history">
//                 History
//             </Button>
//         </>
//     );
// };

// const Header: React.FC = () => {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.clear();
//         navigate(0);
//     };

//     const user = JSON.parse(localStorage.getItem('user') || '{}');

//     return (
//         <AppBar position="static">
//             <Toolbar>
//                 <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                     Expense Tracker
//                 </Typography>
//                 {user.auth && user.role === 'ADMIN' && <AdminHeader />}
//                 {user.auth && user.role === 'EMPLOYEE' && <EmployeeHeader />}
//                 {user.auth && <Button color="inherit" onClick={handleLogout}>
//                     Logout
//                 </Button>}
//             </Toolbar>
//         </AppBar>
//     )
// }

// export default Header;
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
