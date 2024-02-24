
import React from 'react';
import SignUpForm from './components/Auth/SignUpForm'
import LoginForm from './components/LoginForm';
import EmployeeForm from './components/EmployeeForm';
import './index.css';
import SalaryForm from './components/SalaryForm';


function App() {
  return(
    <div>
   
    <LoginForm/>
    <EmployeeForm/>
    <SalaryForm employeeId={0}/>
    </div>
  )
}

export default App
