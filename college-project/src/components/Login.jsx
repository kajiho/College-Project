import React, { useState } from 'react';
import Library from "./Liabary.jsx"


const Login = ({ onLogin }) => {
    const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'student'
});

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username && formData.password) {
        onLogin(formData);
    } else {
        alert('Please enter both username and password');
    }
    };

    return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 fade-in">
        <div className="bg-white rounded-2xl shadow-2xl p-8 transform transition-all duration-300 hover:scale-105">
          {/* College Header */}
            <div className="text-center mb-8">
            <div className="mx-auto w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4">
                NCMT
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">
                Nepalgunj College of Management and Technology
            </h2>
            <p className="mt-2 text-sm text-gray-600">
                Department of Computer Applications
            </p>
            <p className="mt-4 text-2xl font-bold text-blue-600">
                Welcome to the Login Portal
            </p>
            </div>

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
                <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                Login As
                </label>
                <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="form-input"
                >
                    <option value="student">Student</option>
                    <option value="faculty">Faculty</option>
                    <option value="admin">Administrator</option>
                </select>
                </div>

                <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                    Username or Email
                </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your username or email"
                    required
                />
                </div>

                <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your password"
                    required
                />
                </div>
            </div>

            <div>
                <button type="submit" className="btn-primary">
                Log In
                </button>
            </div>
            
            <div className="text-center">
                <p className="text-sm text-gray-600">
                Enter any username and password
                </p>
            </div>
            </form>
        </div>
        </div>
    </div>
);
};

export default Login;