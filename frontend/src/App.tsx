/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { BrowserRouter, } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Router from "./Router"
import SalaryForm from "./components/SalaryForm"
import EmployeeForm from "./components/EmployeeForm"

import AdvanceForm, { AdvanceFormData } from "./components/AdvanceForm"
import ExpenseForm, { ExpenseFormData } from "./components/ExpenseForm"
import ExpenseCategoryForm from "./components/ExpenseCategory"
import Header from "./components/Header"

function App() {


  return(
    <>
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
         
    <EmployeeForm/>
    <SalaryForm employeeId={0}/>
    
    <AdvanceForm onSubmit={function (formData: AdvanceFormData): void {
        console.log('Submitted data:', formData);
      } }/>
      <ExpenseForm onSubmit={function (formData: ExpenseFormData): void {
        console.log('Submitted data:', formData);
      } }/>
      
    
      <ExpenseCategoryForm
  onSubmit={(formData) => {
    // Handle the submitted form data (e.g., send it to the server)
    console.log('Submitted data:', formData);
  }}
/>
    </>
  )
}

export default App
