import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { useAuth } from "./context/AuthContext";
import { Home, Signup, Login } from "./pages";
import { ToasterWrapper } from "./utils";
const App = () => {
  const {
    state: { isLoggedIn },
  } = useAuth();

  return (
    <div>
      <ToasterWrapper />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {!isLoggedIn && <Route path="/signup" element={<Signup />} />}
        {!isLoggedIn && <Route path="/login" element={<Login />} />}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
