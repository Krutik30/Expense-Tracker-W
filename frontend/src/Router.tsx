import { Navigate, Route, Routes } from 'react-router-dom';
import { Page } from './components/Page';
import { Dashboard } from './pages/Dashboard.tsx';
import LoginForm from './pages/Auth/LoginForm.tsx';
import SignUpForm from './pages/Auth/SignUpForm.tsx';
import AddEmployee from './pages/AddEmployee.tsx';
import SalaryIssued from './pages/SalaryIssued.tsx';
import IssuedAdvance from './pages/IssuedAdvance.tsx';
import ListOfEmployee from './pages/ListOfEmployee.tsx';
import AddExpense from './pages/AddExpense.tsx';
import RequestSalary from './pages/RequestSalary.tsx';
import ListOfExpense from './pages/ListOfExpense.tsx';
import Wallet from './pages/Wallet.tsx';
import HistoryComponent from './pages/History.tsx';
import Profile from './pages/Profile.tsx';

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
