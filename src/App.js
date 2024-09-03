/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignUpPage } from "./pages/SignUpPage";
import { AccountSetupPage } from "./pages/AccountSetupPage";
import { MovieDashboardPage } from "./pages/MovieDashboardPage";
import { auth } from "./config/firebase";
import "./App.css";

function App() {
  const user = auth.currentUser;

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/accountsetup" element={<AccountSetupPage />} />
        <Route path="/dashboard" element = {<MovieDashboardPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;




