import { Navigate, Route, Routes } from 'react-router-dom';
import { Page } from './components/Page';
import { Dashboard } from './pages/Dashboard';
import LoginForm from './pages/Auth/LoginForm';
import SignUpForm from './pages/Auth/SignUpForm';
import AddEmployee from './pages/AddEmployee.tsx';
import SalaryIssued from './pages/SalaryIssued.tsx';
import IssuedAdvance from './pages/IssuedAdvance';
import ListOfEmployee from './pages/ListOfEmployee';
import AddExpense from './pages/AddExpense';
import RequestSalary from './pages/RequestSalary';
import ListOfExpense from './pages/ListOfExpense';
import Wallet from './pages/Wallet';
import HistoryComponent from './pages/History';
import Profile from './pages/Profile';
import { Role } from '../config.ts';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/auth" element={<Navigate to="/auth/login" />} >
                <Route path="login" element={<Page Component={LoginForm} roleRequired={[false]} />} />
                <Route path="signup" element={<Page Component={SignUpForm} roleRequired={[false]} />} />
            </Route>
            <Route path="/dashboard" element={<Page Component={Dashboard} roleRequired={[Role.admin, Role.emp]} />} />
            <Route path="/add" element={<Navigate to="/add/employee" />}>
                <Route path="employee" element={<Page Component={AddEmployee} roleRequired={[Role.admin]} />} />
                <Route path="expense" element={<Page Component={AddExpense} roleRequired={[Role.emp]} />} />
            </Route>
            <Route path='/list' element={<Navigate to="/list/employee" />}>
                <Route path="employee" element={<Page Component={ListOfEmployee} roleRequired={[Role.admin]} />} />
                <Route path="expense" element={<Page Component={ListOfExpense} roleRequired={[Role.emp]} />} />
            </Route>
            <Route path="/salary/issue" element={<Page Component={SalaryIssued} roleRequired={[Role.admin]} />} />
            <Route path="/issued/advance" element={<Page Component={IssuedAdvance} roleRequired={[Role.admin]} />} />
            <Route path="/request/salary" element={<Page Component={RequestSalary} roleRequired={[Role.emp]} />} />
            <Route path="/wallet" element={<Page Component={Wallet} roleRequired={[Role.emp]} />} />
            <Route path="/history" element={<Page Component={HistoryComponent} roleRequired={[Role.emp]} />} />
            <Route path="/profile" element={<Page Component={Profile} roleRequired={[Role.admin, Role.emp]} />} />
        </Routes>
    );
}

export default Router;
