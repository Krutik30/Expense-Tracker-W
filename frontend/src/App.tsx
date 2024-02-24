import { BrowserRouter, } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Header from "./components/Header"
import Router from "./Router"

function App() {
  return(
    <>
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
