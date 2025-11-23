import React, { useState } from 'react';

const Navbar = ({ activeSection, onSectionChange, onLogout, user }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { id: 'home', label: 'Home',  },
        { id: 'form', label: 'Student Form',  },
        { id: 'library', label: 'Library',  },
        { id: 'about', label: 'About Us',  },
        { id: 'contact', label: 'Contact',  }
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = (sectionId) => {
        onSectionChange(sectionId);
        setIsMobileMenuOpen(false);
    };

    return (
    <nav className="bg-gradient-to-r from-blue-800 to-purple-800 shadow-lg sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo and College Name */}
        <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 bg-white rounded-full p-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                NCMT
            </div>
            </div>
            <div className="text-white flex flex-col">
                <h1 className="text-lg font-bold">Nepalgunj Campus</h1>
                <p className="text-xs text-blue-200">Department of Computer Applications</p>
            </div>
        </div>

          {/* Desktop Navigation */}
        <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            {navItems.map(item => (
                <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`nav-link px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === item.id 
                    ? 'text-blue-300 bg-blue-900 bg-opacity-50' 
                    : 'text-white hover:text-blue-300'
                }`}
                >
                <span className="mr-2">{item.icon}</span>
                {item.label}
                </button>
            ))}
            </div>
        </div>

          {/* User Info and Logout */}
        <div className="hidden md:flex items-center space-x-4">
            <span className="text-white text-sm">Welcome, {user?.username}</span>
            <button
                onClick={onLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
            >
                Logout
            </button>
        </div>

          {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
            <span className="text-white text-sm">Hi, {user?.username}</span>
            <button
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-300 focus:outline-none"
            >
            <div className="space-y-1">
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
            </button>
        </div>
    </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-900 bg-opacity-50 rounded-lg mt-2">
            {navItems.map(item => (
            <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                activeSection === item.id 
                    ? 'text-blue-300 bg-blue-800' 
                    : 'text-white hover:text-blue-300 hover:bg-blue-700'
                }`}
            >
                <span className="mr-2">{item.icon}</span>
                {item.label}
            </button>
            ))}
            <button
                onClick={onLogout}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-red-600 hover:bg-red-700"
            >
                🚪 Logout
            </button>
        </div>
    </div>
    </div>
    </nav>
    );
};

export default Navbar;