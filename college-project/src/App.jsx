import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import MainContent from './components/MainContent';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    setActiveSection('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {isLoggedIn && <Navbar user={user} onLogout={handleLogout} />}
        
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={
            !isLoggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/" />
          } />
          
          <Route path="/" element={
            isLoggedIn ? <MainContent activeSection="home" /> : <Navigate to="/login" />
          } />

          <Route path="/home" element={
            isLoggedIn ? <MainContent activeSection="home" /> : <Navigate to="/login" />
          } />

          <Route path="/library" element={
            isLoggedIn ? <MainContent activeSection="library" /> : <Navigate to="/login" />
          } />

          <Route path="/form" element={
            isLoggedIn ? <MainContent activeSection="form" /> : <Navigate to="/login" />
          } />

          <Route path="/about" element={
            isLoggedIn ? <MainContent activeSection="about" /> : <Navigate to="/login" />
          } />

          <Route path="/contact" element={
            isLoggedIn ? <MainContent activeSection="contact" /> : <Navigate to="/login" />
          } />

          <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;