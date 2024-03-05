/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Router from "./Router";

import Header from "./components/Header";
import SuspenseErrorBoundary from "./components/RequireComponent/SuspenseErrorBoundry";

function App() {
  return (
    <div>
      <ToastContainer />
      <SuspenseErrorBoundary>
        <BrowserRouter>
          <Header />
          <SuspenseErrorBoundary>
            <Router />
          </SuspenseErrorBoundary>
        </BrowserRouter>
      </SuspenseErrorBoundary>
    </div>
  );
}

export default App;
