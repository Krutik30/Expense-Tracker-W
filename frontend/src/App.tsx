
import { BrowserRouter, } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Header from "./components/Header"
import Router from "./Router"
import SalaryForm from "./components/SalaryForm"
import EmployeeForm from "./components/EmployeeForm"
import LoginForm from "./Pages/Auth/LoginForm"

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
    </>
  )
}

export default App
