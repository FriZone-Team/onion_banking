import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./modules/Home/Home";
import Transaction from "./modules/Transaction/Transaction";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { NotLogin } from "./pages/NotLogin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignInPage></SignInPage>}></Route>
          <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
          <Route path="*" element={<NotLogin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
