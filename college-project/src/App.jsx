import React, { useState } from 'react';
import Navbar from "./components/Navbar.jsx"
import MainContent from "./components/MainContent.jsx"
import Login from "./components/Login.jsx"

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {isLoggedIn ? (
        <>
          <Navbar 
            activeSection={activeSection} 
            onSectionChange={handleSectionChange}
            onLogout={handleLogout}
            user={user}
          />
          <MainContent activeSection={activeSection} user={user} />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;