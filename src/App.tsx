import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './pages/Auth/login';
import Dashboard from './pages/Dashboard';
import PlayerOnboard from './pages/PlayerOnboarding/playerOnboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/PlayerOnboard" element={<PlayerOnboard />} />
      </Routes>
    </Router>
  );
}

export default App;
