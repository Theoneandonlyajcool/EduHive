import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import SignIn from "../Pages/SignIn";
import SignUpPage from "../Pages/SignUp";

const Router = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/sign_up" element={<SignUpPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default Router;
