/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Router from "./Router";

import Header from "./components/Header";

function App() {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
