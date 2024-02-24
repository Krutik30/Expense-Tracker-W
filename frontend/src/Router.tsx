import { Navigate, Route, Routes } from 'react-router-dom';
import { Page } from './components/Page';
import { Dashboard } from './pages/Dashboard';
import LoginForm from './pages/Auth/LoginForm';
import SignUpForm from './pages/Auth/SignUpForm';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/auth">
                <Route path="login" element={<Page Component={LoginForm} roleRequired={false} />} />
                <Route path="signup" element={<Page Component={SignUpForm} roleRequired={false} />} />
            </Route>
            <Route path="/dashboard" element={<Page Component={Dashboard} roleRequired="ADMIN" />} />
            <Route path="/profile" element={<Page Component={Dashboard} roleRequired="ADMIN" />} />
        </Routes>
    );
}

export default Router;
