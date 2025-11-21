import React from 'react';
import Library from "./Liabary.jsx"

const MainContent = ({ activeSection, user }) => {
    const renderSection = () => {
    switch (activeSection) {
        case 'home':
        return (
        <div className="fade-in">
            <div className="section-card">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Nepalgunj Campus of Management & Technology</h2>
            <p className="text-gray-600 mb-6">Department of Computer Applications</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">📚 Library Access</h3>
                <p className="text-blue-600">Access thousands of books and digital resources for your BCA program.</p>
                </div>

                <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                    <h3 className="text-xl font-semibold text-green-800 mb-2">🎓 Academic Resources</h3>
                    <p className="text-green-600">Find all your course materials, syllabi, and study resources in one place.</p>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
                    <h3 className="text-xl font-semibold text-purple-800 mb-2">👨‍💻 Student Portal</h3>
                    <p className="text-purple-600">Manage your academic journey with our comprehensive student portal.</p>
                </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-4 transition-all duration-300 transform hover:scale-105">
                    📖 Library
                    </button>

                    <button className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-4 transition-all duration-300 transform hover:scale-105">
                    📝 Forms
                </button>

                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-4 transition-all duration-300 transform hover:scale-105">
                    🎯 Courses
                </button>

                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-4 transition-all duration-300 transform hover:scale-105">
                    📅 Events
                </button>
                </div>
            </div>
            </div>
        </div>
        );

    case 'form':
        return (
        <div className="fade-in">
            <div className="section-card">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Student Information Form</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input type="text" className="form-input" placeholder="Enter your full name" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Roll Number</label>
                    <input type="text" className="form-input" placeholder="Enter roll number" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" className="form-input" placeholder="Enter email address" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input type="tel" className="form-input" placeholder="Enter phone number" />
                </div>

                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <textarea className="form-input h-24" placeholder="Enter your address"></textarea>
                </div>

                <div className="md:col-span-2">
                    <button type="submit" className="btn-primary">
                    Submit Form
                    </button>
                </div>
            </form>
            </div>
        </div>
        );

    case 'library':
        return <Library />;

    case 'about':
        return (
        <div className="fade-in">
            <div className="section-card">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">About Nepalgunj Campus of Management & Technology</h2>
                <div className="prose max-w-none">
                <p className="text-gray-600 mb-4">
                    Welcome to Nepalgunj Campus of Management & Technology, a premier institution dedicated to excellence in computer education. 
                    Established with a vision to create future technology leaders, we offer comprehensive BCA programs that 
                    blend theoretical knowledge with practical skills.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h3>
                <p className="text-gray-600 mb-4">
                    To provide quality education in computer applications that empowers students with technical expertise, 
                    critical thinking abilities, and ethical values to succeed in the dynamic IT industry.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">BCA Program Highlights</h3>
                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li>Comprehensive curriculum covering latest technologies</li>
                    <li>Industry-experienced faculty members</li>
                    <li>State-of-the-art computer labs and library</li>
                    <li>Regular workshops and guest lectures</li>
                    <li>100% placement assistance</li>
                </ul>
            </div>
        </div>
    </div>
        );

    case 'contact':
        return (
        <div className="fade-in">
            <div className="section-card">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
                    <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        📍
                        </div>
                        <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-600">Ganeshman Chowk, Surkhet Road, Nepalgunj - 560001</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        📞
                        </div>
                        <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">+91 80 1234 5678</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        ✉️
                        </div>
                        <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">bca@nepalgunjcampus.edu.in</p>
                    </div>
                    </div>
                </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Send Message</h3>
                    <form className="space-y-4">
                    <input type="text" className="form-input" placeholder="Your Name" />
                    <input type="email" className="form-input" placeholder="Your Email" />
                    <input type="text" className="form-input" placeholder="Subject" />
                    <textarea className="form-input h-32" placeholder="Your Message"></textarea>
                    <button type="submit" className="btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );

    default:
        return (
        <div className="section-card">
            <h2 className="text-3xl font-bold text-gray-800">Welcome</h2>
            <p className="text-gray-600">Select a section from the navigation menu to get started.</p>
        </div>
        );
    }
};

    return (
    <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
    {renderSection()}
    </main>
    );
};

export default MainContent;