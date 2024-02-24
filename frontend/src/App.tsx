/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { BrowserRouter, } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Header from "./components/Header"
import Router from "./Router"
import SalaryForm from "./components/SalaryForm"
import EmployeeForm from "./components/EmployeeForm"

import AdvanceForm, { AdvanceFormData } from "./components/AdvanceForm"
import LoginForm from "./pages/Auth/LoginForm"

function App() {
  return(
    <>
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
         
    <LoginForm/>
    <EmployeeForm/>
    <SalaryForm employeeId={0}/>
    
    <AdvanceForm onSubmit={function (formData: AdvanceFormData): void {
        throw new Error(`Function not implemented. ${formData}`)
      } }/>
    
    </>
  )
}

export default App
