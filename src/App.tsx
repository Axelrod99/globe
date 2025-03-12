import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Signup from "./pages/Auth/signup";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Admin-SignUp" element={<Signup />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Admin-Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
