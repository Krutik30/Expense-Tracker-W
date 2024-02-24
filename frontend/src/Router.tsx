import { Navigate, Route, Routes } from 'react-router-dom';
import { Page } from './components/Page';
import { Dashboard } from './Pages/Dashboard';
import LoginForm from './Pages/Auth/LoginForm';
import SignUpForm from './Pages/Auth/SignUpForm';
import AddEmployee from './Pages/AddEmployee.tsx';
import SalaryIssued from './Pages/SalaryIssued.tsx';
import IssuedAdvance from './Pages/IssuedAdvance';
import ListOfEmployee from './Pages/ListOfEmployee';
import AddExpense from './Pages/AddExpense';
import RequestSalary from './Pages/RequestSalary';
import ListOfExpense from './Pages/ListOfExpense';
import Wallet from './Pages/Wallet';
import HistoryComponent from './Pages/History';
import Profile from './Pages/Profile';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/auth">
                <Route path="login" element={<Page Component={LoginForm} roleRequired={false} />} />
                <Route path="signup" element={<Page Component={SignUpForm} roleRequired={false} />} />
            </Route>
            <Route path="/dashboard" element={<Page Component={Dashboard} roleRequired="ADMIN" />} />
            <Route path="/add/employee" element={<Page Component={AddEmployee} roleRequired="ADMIN" />} />
            <Route path="/salary/issue" element={<Page Component={SalaryIssued} roleRequired="ADMIN" />} />
            <Route path="/issued/advance" element={<Page Component={IssuedAdvance} roleRequired="ADMIN" />} />
            <Route path="/list/employee" element={<Page Component={ListOfEmployee} roleRequired="ADMIN" />} />
            <Route path="/add/expense" element={<Page Component={AddExpense} roleRequired="EMPLOYEE" />} />
            <Route path="/request/salary" element={<Page Component={RequestSalary} roleRequired="EMPLOYEE" />} />
            <Route path="/list/expense" element={<Page Component={ListOfExpense} roleRequired="EMPLOYEE" />} />
            <Route path="/wallet" element={<Page Component={Wallet} roleRequired="EMPLOYEE" />} />
            <Route path="/history" element={<Page Component={HistoryComponent} roleRequired="EMPLOYEE" />} />
            <Route path="/profile" element={<Page Component={Profile} roleRequired={['ADMIN', 'EMPLOYEE']} />} />
        </Routes>
    );
}

export default Router;
