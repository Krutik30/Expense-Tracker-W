// // AdminHeader.tsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
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
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1, display:{xs:"none", md:'flex'} }}>
//                 (Employee)
//             </Typography>
//             <Box sx={{ flexGrow: 1, display:{xs:"none", md:'flex'} }}>
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
//             </Box>
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
//                 <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
//                     Expense Tracker
//                 </Typography>
//                 {user.auth && user.role === 'ADMIN' && <AdminHeader />}
//                 {user.auth && user.role === 'EMPLOYEE' && <EmployeeHeader />}
//                 {user.auth && (
//     <Button 
//         color="inherit" 
//         onClick={handleLogout}
//         sx={{ flexGrow: 1, display: { xs: "none", md: 'flex' } }}
//     >
//         Logout
//     </Button>
// )}

// {/* for smaller Devices */}

// <Box>

// </Box>
//             </Toolbar>
//         </AppBar>
//     )
// }

// export default Header;


// NEha Code
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, Button, Box, Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { useNavigate } from 'react-router-dom';

// const AdminHeader: React.FC = () => {
//     return (
//         <>
//             <Typography variant="h6" component="div"  sx={{ flexGrow: 1, display:{xs:"none", md:'block'} }}>
//                 (Admin)
//             </Typography>
           
         
//            <Button color="inherit" component={Link} to="/dashboard">
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
//              {/* Typography and buttons rendered inline */}
//              <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                 <Typography variant="h6" component="div" sx={{ display: { xs: 'none', md: 'block' } }}>
//                     (Employee)
//                 </Typography>
//                 <Button color="inherit" component={Link} to="/dashboard">
//                     Dashboard
//                 </Button>
//                 <Button color="inherit" component={Link} to="/add/expense">
//                     Add Expense
//                 </Button>
//                 <Button color="inherit" component={Link} to="/request/salary">
//                     Request Salary
//                 </Button>
//                 <Button color="inherit" component={Link} to="/list/expense">
//                     List of Expenses
//                 </Button>
//                 <Button color="inherit" component={Link} to="/wallet">
//                     Wallet
//                 </Button>
//                 <Button color="inherit" component={Link} to="/history">
//                     History
//                 </Button>
//             </Box>
//         </>
//     );
// };

// const Header: React.FC = () => {
//     const navigate = useNavigate();
//     const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//     const handleDrawerToggle = () => {
//         setIsDrawerOpen(!isDrawerOpen);
//     };

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
//                 <Box sx={{ display: { xs: 'block', md: 'none' } }}>
//                     <IconButton
//                         color="inherit"
//                         aria-label="open drawer"
//                         edge="end"
//                         onClick={handleDrawerToggle}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                 </Box>
//                 <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
//                     {user.auth && user.role === 'ADMIN' && <AdminHeader />}
//                     {user.auth && user.role === 'EMPLOYEE' && <EmployeeHeader />}
//                 </Box>
//                 <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//                     {user.auth && (
//                         <Button color="inherit" onClick={handleLogout}>
//                             Logout
//                         </Button>
//                     )}
//                 </Box>
//             </Toolbar>
//             <Drawer
//                 anchor="right"
//                 open={isDrawerOpen}
//                 onClose={handleDrawerToggle}
//             >
//                 <List>
//                     {user.auth && user.role === 'ADMIN' && (
//                         <>
//                             <ListItem button component={Link} to="/dashboard">
//                                 <ListItemText primary="Dashboard" />
//                             </ListItem>
//                             <ListItem button component={Link} to="/add/employee">
//                                 <ListItemText primary="Add Employee" />
//                             </ListItem>
//                             <ListItem button component={Link} to="/salary/issue">
//                                 <ListItemText primary="Salary Issue" />
//                             </ListItem>
//                             <ListItem button component={Link} to="/issued/advance">
//                                 <ListItemText primary="Issued Advance" />
//                             </ListItem>
//                             <ListItem button component={Link} to="/list/employee">
//                                 <ListItemText primary="List of Employees" />
//                             </ListItem>
//                         </>
//                     )}
//                     {user.auth && user.role === 'EMPLOYEE' && (
//                         <>
//                             <ListItem button component={Link} to="/dashboard">
//                                 <ListItemText primary="Dashboard" />
//                             </ListItem>
//                             <ListItem button component={Link} to="/add/expense">
//                                 <ListItemText primary="Add Expense" />
//                             </ListItem>
//                             <ListItem button component={Link} to="/request/salary">
//                                 <ListItemText primary="Request Salary" />
//                             </ListItem>
//                             <ListItem button component={Link} to="/list/expense">
//                                 <ListItemText primary="List of Expenses" />
//                             </ListItem>
//                             <ListItem button component={Link} to="/wallet">
//                                 <ListItemText primary="Wallet" />
//                             </ListItem>
//                             <ListItem button component={Link} to="/history">
//                                 <ListItemText primary="History" />
//                             </ListItem>
//                         </>
//                     )}
//                     {user.auth && (
//                         <ListItem button onClick={handleLogout}>
//                             <ListItemText primary="Logout" />
//                         </ListItem>
//                     )}
//                 </List>
//             </Drawer>
//         </AppBar>
//     );
// }

// export default Header;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo_main.svg'
import './Header.css'; // Import CSS file for additional styling

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
                <Button color="inherit" component={Link} to="/request/salary" className="header-button">
                    Request Salary
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
        <AppBar position="static" sx={{bgcolor:'black'}}>
           
            <Toolbar>
            <img src={Logo} alt="Logo" style={{ width: '150px', height: 'auto' }} />
                {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Expense Tracker
                </Typography> */}
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
                                  <Typography variant="h6" component="div"   sx={{ 
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
                        </>
                    )}
                    {user.auth && user.role === 'EMPLOYEE' && (

                        <>
                         <Typography variant="h6" component="div"   sx={{ 
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
                            <ListItem button component={Link} to="/request/salary">
                                <ListItemText primary="Request Salary" />
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
