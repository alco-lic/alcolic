import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/user/SignupForm";
import Login from "./components/user/LoginForm";

import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Signup />} />
        <Route element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
