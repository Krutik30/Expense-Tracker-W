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
// import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { useNavigate } from 'react-router-dom';

// const AdminHeader: React.FC = () => {
//     return (
//         <>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: "none", md: 'block' } }}>
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
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
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

//                 <Box sx={{ display: { md: 'flex' }, flexGrow: 1 }}>
//                     {user.auth && user.role === 'ADMIN' && <AdminHeader />}
//                     {user.auth && user.role === 'EMPLOYEE' && <EmployeeHeader />}
//                 </Box>

//                 <Box sx={{ display: {  md: 'flex' } }}>
//                     {user.auth && (
//                         <Button color="inherit" onClick={handleLogout}>
//                             Logout
//                         </Button>
//                     )}
//                 </Box>

//                 <Box sx={{ display: { md: 'none' } }}>
//                     <IconButton
//                         color="inherit"
//                         aria-label="open drawer"
//                         edge="end"
//                         onClick={handleDrawerToggle}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                 </Box>
//             </Toolbar>
//         </AppBar>
//     );
// }

// export default Header;









// FInallll
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import './Header.css'; // Import CSS file for additional styling
import { IoMdPersonAdd } from "react-icons/io"; //add employee fill
import { RiMoneyDollarCircleFill } from "react-icons/ri"; //salary 
import { FaMoneyBillTrendUp } from "react-icons/fa6"; //advnce
import { FaListAlt } from "react-icons/fa"; //list
import { IoLogOutSharp } from "react-icons/io5"; //logout
import { GiWallet } from "react-icons/gi"; //wallet
 import Logo from '../../src/assets/FINAL_LOGO.svg'




const AdminHeader: React.FC = () => {
    return (
        <>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: "none", md: 'block'} }}>
                (Admin)
            </Typography>
            <Button color="inherit" component={Link} to="/dashboard" className="header-button " sx={{ fontFamily: 'Arial', fontSize: '16px' ,  '&:hover': {
            borderBottom: '2px solid #FBE8A6'
        } }}>
                Dashboard
            </Button>
            <Button color="inherit" component={Link} to="/add/employee" className="header-button"sx={{ fontFamily: 'Arial', fontSize: '16px',  '&:hover': {
            borderBottom: '2px solid #FBE8A6'
        }  }} >
                Add Employee
            </Button>
            <Button color="inherit" component={Link} to="/salary/issue" className="header-button" sx={{ fontFamily: 'Arial', fontSize: '16px',  '&:hover': {
            borderBottom: '2px solid #FBE8A6'
        }  }}>
                Salary Issue
            </Button>
            <Button color="inherit" component={Link} to="/issued/advance" className="header-button" sx={{ fontFamily: 'Arial', fontSize: '16px',  '&:hover': {
            borderBottom: '2px solid #FBE8A6'
        }  }}>
                Issued Advance
            </Button>
            <Button color="inherit" component={Link} to="/list/employee" className="header-button" sx={{ fontFamily: 'Arial', fontSize: '16px',  '&:hover': {
            borderBottom: '2px solid #FBE8A6'
        }  }}>
                List of Employees
            </Button>
        </>
    );
};

const EmployeeHeader: React.FC = () => {
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h6" component="div" sx={{ display: { xs: 'none', md: 'block', color:'#D2FDFF' } }}>
                    (Employee)
                </Typography>
                <Button color="inherit" component={Link} to="/dashboard" className="header-button"  sx={{ fontFamily: 'Arial', fontSize: '16px',   }}  >
                    Dashboard
                </Button>
                <Button color="inherit" component={Link} to="/add/expense" className="header-button" sx={{ fontFamily: 'Arial', fontSize: '16px',   }} >
                    Add Expense
                </Button>

                <Button color="inherit" component={Link} to="/request/salary" className="header-button" sx={{ fontFamily: 'Arial', fontSize: '16px',   }} >
                    Request Salary
                </Button>
                <Button color="inherit" component={Link} to="/list/expense" className="header-button" sx={{ fontFamily: 'Arial', fontSize: '16px',   }} >

                    List of Expenses
                </Button>
                <Button color="inherit" component={Link} to="/wallet" className="header-button" sx={{ fontFamily: 'Arial', fontSize: '16px',   }} > 
                    Wallet
                </Button>
                <Button color="inherit" component={Link} to="/history" className="header-button" sx={{ fontFamily: 'Arial', fontSize: '16px',   }} >
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
        <AppBar position="fixed" sx={{ backgroundColor: '#303C6C' ,   height: '70px'  }}>
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
                                  <Typography variant="h6" component="div"   sx={{ 
        flexGrow: 1,
       
        
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


// without Responsive


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, Button, Box, Drawer, List, ListItem, ListItemText ,IconButton} from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import './Header.css'; // Import CSS file for additional styling

// const AdminHeader: React.FC = () => {
//     return (
//         <>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { md: 'block'} }}>
//                 (Admin)
//             </Typography>
//             <Button color="inherit" component={Link} to="/dashboard" className="header-button" sx={{ fontFamily: 'Arial', fontSize: '16px', '&:hover': { borderBottom: '2px solid #FBE8A6' } }}>
//                 Dashboard
//             </Button>
//             <Button color="inherit" component={Link} to="/add/employee" className="header-button" sx={{ fontFamily: 'Arial', fontSize: '16px', '&:hover': { borderBottom: '2px solid #FBE8A6' } }}>
//                 Add Employee
//             </Button>
//             <Button color="inherit" component={Link} to="/salary/issue" className="header-button" sx={{ fontFamily: 'Arial', fontSize: '16px', '&:hover': { borderBottom: '2px solid #FBE8A6' } }}>
//                 Salary Issue
//             </Button>
//             <Button color="inherit" component={Link} to="/issued/advance" className="header-button" sx={{ fontFamily: 'Arial', fontSize: '16px', '&:hover': { borderBottom: '2px solid #FBE8A6' } }}>
//                 Issued Advance
//             </Button>
//             <Button color="inherit" component={Link} to="/list/employee" className="header-button" sx={{ fontFamily: 'Arial', fontSize: '16px', '&:hover': { borderBottom: '2px solid #FBE8A6' } }}>
//                 List of Employees
//             </Button>
//         </>
//     );
// };

// const EmployeeHeader: React.FC = () => {
//     return (
//         <>
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                 <Typography variant="h6" component="div" sx={{ display: { md: 'block', color:'#D2FDFF' } }}>
//                     (Employee)
//                 </Typography>
//                 <Button color="inherit" component={Link} to="/dashboard" className="header-button" sx={{ fontFamily: 'Arial', fontSize: '16px' }}>
//                     Dashboard
//                 </Button>
//                 <Button color="inherit" component={Link} to="/add/expense" className="header-button" sx={{ fontFamily: 'Arial', fontSize: '16px' }}>
//                     Add Expense
//                 </Button>
//                 <Button color="inherit" component={Link} to="/request/salary" className="header-button" sx={{ fontFamily: 'Arial', fontSize: '16px' }}>
//                     Request Salary
//                 </Button>
//                 <Button color="inherit" component={Link} to="/list/expense" className="header-button" sx={{ fontFamily: 'Arial', fontSize: '16px' }}>
//                     List of Expenses
//                 </Button>
//                 <Button color="inherit" component={Link} to="/wallet" className="header-button" sx={{ fontFamily: 'Arial', fontSize: '16px' }}> 
//                     Wallet
//                 </Button>
//                 <Button color="inherit" component={Link} to="/history" className="header-button" sx={{ fontFamily: 'Arial', fontSize: '16px' }}>
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
//         <AppBar position="fixed" sx={{ backgroundColor: '#303C6C', height: '70px',  top: 'auto', bottom: 0  }}>
//             <Toolbar>
//                 <Typography className='cursor-pointer' variant="h6" component={Link} sx={{ flexGrow: 1, color:'#D2FDFF' }} to="/dashboard">
//                     Expense Tracker
//                 </Typography>
//                 <Box sx={{ display: { md: 'none' } }}>
//                     <IconButton
//                         color="inherit"
//                         aria-label="open drawer"
//                         edge="end"
//                         onClick={handleDrawerToggle}
//                     >
//                         {/* MenuIcon removed */}
//                     </IconButton>
//                 </Box>
//                 <Box sx={{ display: { md: 'flex' }, flexGrow: 1 }}>
//                     {user.auth && user.role === 'ADMIN' && <AdminHeader />}
//                     {user.auth && user.role === 'EMPLOYEE' && <EmployeeHeader />}
//                 </Box>
//                 <Box sx={{ display: { md: 'flex' } }}>
//                     {user.auth && (
//                         <Button color="inherit" onClick={handleLogout} className="header-button">
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
//                             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                                 (Employee)
//                             </Typography>
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
//                             <Typography variant="h6" component="div" sx={{ flexGrow: 1, backgroundColor: 'rgb(30, 64, 175)', color: '#f0f0f0' }}>
//                                 (Admin)
//                             </Typography>
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

// blue_et:"#303C6C",
//       sky_et:"#B4DFE5",
//       aqua_et:"#D2FDFF"
//  recently added ----------------------------------------


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { BottomNavigation, BottomNavigationAction, AppBar, Toolbar, Typography, Box, Drawer, List, ListItem, ListItemText ,Button, useMediaQuery} from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import './Header.css'; // Import CSS file for additional styling
// import GroupAddIcon from '@mui/icons-material/GroupAdd';
// import PaidIcon from '@mui/icons-material/Paid';
// import AddCardIcon from '@mui/icons-material/AddCard';
// import ListIcon from '@mui/icons-material/List';
// import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';


// import PaymentsIcon from '@mui/icons-material/Payments';
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

// import useTheme from '@mui/material/styles/useTheme';
// import { RiLogoutBoxFill } from "react-icons/ri";
// import Logo from '../../src/assets/FINAL_LOGO.svg'








// const AdminHeader: React.FC = () => {


//     const theme = useTheme();
//     const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
//     return (


//         <BottomNavigation showLabels sx={{  backgroundColor:'#303C6C' , color:'#D2FDFF',}}>
//             <BottomNavigationAction label="Dashboard" icon={<SpaceDashboardIcon />}  component={Link} to="/dashboard" 
//               sx={{ color: '#D2FDFF' ,
//               '&:hover': {
//                 color: '#FBE8A6', 
//             },
//             marginTop: '8px',
          
            
//             }}
        
            
//             />
//             <BottomNavigationAction label="Add_Employees"  icon={<GroupAddIcon />}   component={Link} to="/add/employee"   sx={{ color: '#D2FDFF ',
//           '&:hover': {
//             color: '#FBE8A6', 
//         },
//         marginTop: '8px',
//                             display: isSmallScreen ? 'none' : 'flex',

        
//         }}/>
//             <BottomNavigationAction label="Salary_Issued "  icon={<PaidIcon />} component={Link} to="/salary/issue"   sx={{ color: '#D2FDFF'

//         ,
//         '&:hover': {
//           color: '#FBE8A6', 
//       },
//       marginTop: '8px',
    
//       }}/>
//             <BottomNavigationAction label="Advance" icon={<AddCardIcon/>} component={Link} to="/issued/advance"   sx={{ color: '#D2FDFF' ,
//               '&:hover': {
//                 color: '#FBE8A6', 
//             },
//             marginTop: '8px',
          
//              }}/>
//             <BottomNavigationAction label="Employees"  icon={<ListIcon/>} component={Link} to="/list/employee"  sx={{ color: '#D2FDFF' ,
//               '&:hover': {
//                 color: '#FBE8A6', 
//             },
//             marginTop: '8px',

          
//              }} />
//         </BottomNavigation>
//     );
// };

// const EmployeeHeader: React.FC = () => {
//     return (
//         <BottomNavigation showLabels>
//             <BottomNavigationAction label="Dashboard"  icon={<SpaceDashboardIcon />}  component={Link} to="/dashboard"   sx={{ color: '#D2FDFF' ,
//               '&:hover': {
//                 color: '#FBE8A6', 
//             },
//             marginTop: '8px',
//              }}/>
//             <BottomNavigationAction label="Add Expense" icon={<PaymentsIcon />}   component={Link} to="/add/expense"   sx={{ color: '#D2FDFF',
//               '&:hover': {
//                 color: '#FBE8A6', 
//             },
//             marginTop: '8px',
//              }}/>
//             <BottomNavigationAction label="Request Salary" icon={<PaidIcon />} component={Link} to="/request/salary"   sx={{ color: '#D2FDFF' ,
//               '&:hover': {
//                 color: '#FBE8A6', 
//             },
//             marginTop: '8px',
//             }}/>
//             <BottomNavigationAction label="List of Expenses" icon={<ListIcon/>} component={Link} to="/list/expense"   sx={{ color: '#D2FDFF',
//               '&:hover': {
//                 color: '#FBE8A6', 
//             },
//             marginTop: '8px',
//              }}/>
//             <BottomNavigationAction label="History" icon={<AccountBalanceWalletIcon />} component={Link} to="/history"   sx={{ color: '#D2FDFF' ,
//               '&:hover': {
//                 color: '#FBE8A6', 
//             },
//             marginTop: '8px',
//             }} />
//         </BottomNavigation>
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
//         <>
//             <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 , backgroundColor:'#303C6C' ,height: '75px' }}>
//                 <Toolbar>
//                     <Typography className='cursor-pointer' variant="h6" component={Link} sx={{ flexGrow: 1,    }} to="/dashboard">
//                         <img src={Logo} alt='Logo Image'className='w-[150px] h-auto' />
//                     </Typography>
//                     <Box sx={{ display: { md: 'flex' }, flexGrow: 1 }}>
//                         {user.auth && user.role === 'ADMIN' && <AdminHeader />}
//                         {user.auth && user.role === 'EMPLOYEE' && <EmployeeHeader />}
//                     </Box>
//                     <Box sx={{ display: { md: 'flex' }, marginLeft: '10x' }}>
//                         {user.auth && (
//                             <Button color="inherit" onClick={handleLogout} className="header-button ">
                           
                            
                            
//                             <span>LOGOUT</span>
//                             </Button>
//                         )}
//                     </Box>
//                 </Toolbar>
//             </AppBar>
//             <Drawer
//                 anchor="right"
//                 open={isDrawerOpen}
//                 onClose={handleDrawerToggle}
//             >
//                 <List>
//                     {user.auth && user.role === 'ADMIN' && (
//                         <>
//                             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                                 (Employee)
//                             </Typography>
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
//                             <Typography variant="h6" component="div" sx={{ flexGrow: 1, backgroundColor: 'rgb(30, 64, 175)', color: '#f0f0f0' }}>
//                                 (Admin)
//                             </Typography>
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
//         </>
//     );
// }

// export default Header;
