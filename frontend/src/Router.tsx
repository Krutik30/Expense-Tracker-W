import { Navigate, Route, Routes } from 'react-router-dom';
import { Page } from './components/Page';
import { Dashboard } from './pages/Dashboard';
import LoginForm from './pages/Auth/LoginForm';
import SignUpForm from './pages/Auth/SignUpForm';
import AddEmployee from './pages/Admin/AddEmployee.tsx';
import SalaryIssued from './pages/Admin/SalaryIssued.tsx';
import IssuedAdvance from './pages/Admin/IssuedAdvance.tsx';
import ListOfEmployee from './pages/Admin/ListOfEmployee.tsx';
import AddExpense from './pages/employee/AddExpense.tsx';
import RequestAdvance from './pages/employee/RequestAdvance.tsx';
import ListOfExpense from './pages/employee/ListOfExpense.tsx';
import Wallet from './pages/employee/Wallet.tsx';
import HistoryComponent from './pages/employee/History.tsx';
import Profile from './pages/Profile';
import { Role } from '../config.ts';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/auth">
                <Route path="login" element={<Page Component={LoginForm} roleRequired={false} />} />
                <Route path="signup" element={<Page Component={SignUpForm} roleRequired={false} />} />
            </Route>
            <Route path="/add">
                <Route path="employee" element={<Page Component={AddEmployee} roleRequired={[Role.admin]} />} />
                <Route path="expense" element={<Page Component={AddExpense} roleRequired={[Role.emp]} />} />
            </Route>
            <Route path='/list'>
                <Route path="employee" element={<Page Component={ListOfEmployee} roleRequired={[Role.admin]} />} />
                <Route path="expense" element={<Page Component={ListOfExpense} roleRequired={[Role.emp]} />} />
            </Route>
            <Route path="/dashboard" element={<Page Component={Dashboard} roleRequired={[Role.admin, Role.emp]} />} />
            <Route path="/salary/issue" element={<Page Component={SalaryIssued} roleRequired={[Role.admin]} />} />
            <Route path="/issued/advance" element={<Page Component={IssuedAdvance} roleRequired={[Role.admin]} />} />
            <Route path="/request/advance" element={<Page Component={RequestAdvance} roleRequired={[Role.emp]} />} />
            <Route path="/wallet" element={<Page Component={Wallet} roleRequired={[Role.emp]} />} />
            <Route path="/history" element={<Page Component={HistoryComponent} roleRequired={[Role.emp]} />} />
            <Route path="/profile" element={<Page Component={Profile} roleRequired={[Role.admin, Role.emp]} />} />
        </Routes>
    );
}

export default Router;
