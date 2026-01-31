import React, { useState } from 'react';

const Library = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('all');
    const [borrowedBooks, setBorrowedBooks] = useState([]);

  // BCA Subjects Books Data
    const [bcaBooks, setBcaBooks] = useState([
    {
        id: 1,
        subject: 'Programming in C',
        books: [
            { id: 1, name: 'The C Programming Language', author: 'Brian W. Kernighan, Dennis M. Ritchie', edition: '2nd', available: true },
            { id: 2, name: 'Programming in ANSI C', author: 'E. Balagurusamy', edition: '8th', available: true },
            { id: 3, name: 'Let Us C', author: 'Yashavant Kanetkar', edition: '16th', available: true }
        ]
        },
    {
        id: 2,
        subject: 'Data Structures',
        books: [
            { id: 1, name: 'Data Structures Using C and C++', author: 'Aaron M. Tenenbaum', edition: '2nd', available: true },
            { id: 2, name: 'Data Structures and Algorithms', author: 'Alfred V. Aho, Jeffrey D. Ullman', edition: '1st', available: true },
            { id: 3, name: 'Data Structures Through C', author: 'Yashavant Kanetkar', edition: '3rd', available: true }
        ]
    },
    {
        id: 3,
        subject: 'Database Management Systems',
        books: [
            { id: 1, name: 'Database System Concepts', author: 'Abraham Silberschatz, Henry F. Korth', edition: '7th', available: true },
            { id: 2, name: 'Fundamentals of Database Systems', author: 'Ramez Elmasri, Shamkant B. Navathe', edition: '7th', available: true },
            { id: 3, name: 'Database Management Systems', author: 'Raghu Ramakrishnan, Johannes Gehrke', edition: '3rd', available: true }
        ]
    },
    {
        id: 4,
        subject: 'Object Oriented Programming with C++',
        books: [
            { id: 1, name: 'The C++ Programming Language', author: 'Bjarne Stroustrup', edition: '4th', available: true },
            { id: 2, name: 'Object Oriented Programming with C++', author: 'E. Balagurusamy', edition: '8th', available: true },
            { id: 3, name: 'Let Us C++', author: 'Yashavant Kanetkar', edition: '2nd', available: true }
        ]
    },
    {
        id: 5,
        subject: 'Computer Networks',
        books: [
            { id: 1, name: 'Computer Networks', author: 'Andrew S. Tanenbaum', edition: '5th', available: true },
            { id: 2, name: 'Data Communications and Networking', author: 'Behrouz A. Forouzan', edition: '5th', available: true },
            { id: 3, name: 'TCP/IP Protocol Suite', author: 'Behrouz A. Forouzan', edition: '4th', available: true }
        ]
    },
    {
        id: 6,
        subject: 'Web Technologies',
        books: [
            { id: 1, name: 'Web Technologies: A Computer Science Perspective', author: 'Jeffrey C. Jackson', edition: '1st', available: true },
            { id: 2, name: 'Learning Web Design', author: 'Jennifer Niederst Robbins', edition: '5th', available: true },
            { id: 3, name: 'HTML and CSS: Design and Build Websites', author: 'Jon Duckett', edition: '1st', available: true }
        ]
    },
    ]);

    const subjects = ['all', ...bcaBooks.map(item => item.subject)];

  // Function to handle book borrowing
    const handleBorrowBook = (subjectId, bookId) => {
        setBcaBooks(prevBooks =>
        prevBooks.map(subject => {
            if (subject.id === subjectId) {
                return {
                ...subject,
                    books: subject.books.map(book =>
                    book.id === bookId
                ? { ...book, available: false }
                : book
            )
        };
        }
        return subject;
    })
    )
};

  // Function to handle book return
    const handleReturnBook = (subjectId, bookId) => {
        setBcaBooks(prevBooks =>
            prevBooks.map(subject => {
                if (subject.id === subjectId) {
                return {
                ...subject,
                books: subject.books.map(book =>
                book.id === bookId
                    ? { ...book, available: true }
                    : book
            )
        };
        }
        return subject;
    })
    );

    // Remove from borrowed books list
    setBorrowedBooks(prev =>
    prev.filter(book => !(book.id === bookId && book.subject === bcaBooks.find(s => s.id === subjectId)?.subject))
    );

    alert('Book returned successfully!');
};

    const filteredBooks = bcaBooks.filter(subject => {
    const matchesSubject = selectedSubject === 'all' || subject.subject === selectedSubject;
    const matchesSearch = subject.books.some(book =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return matchesSubject && (searchTerm === '' || matchesSearch);
});

  // Calculate statistics
    const totalBooks = bcaBooks.flatMap(subject => subject.books).length;
    const availableBooks = bcaBooks.flatMap(subject => subject.books).filter(book => book.available).length;
    const issuedBooks = totalBooks - availableBooks;

return (
    <div className="fade-in">
        <div className="section-card">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome to BCA Library </h2>
        <p className="text-gray-600 mb-6">Explore our extensive collection of BCA course books and resources</p>
        
        {/* Search and Filter Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search Books</label>
            <input
            type="text"
            placeholder="Search by book name or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-input"
            />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Subject</label>
            <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="form-input"
            >
            {subjects.map(subject => (
                <option key={subject} value={subject}>
                {subject === 'all' ? 'All Subjects' : subject}
                </option>
            ))}
            </select>
        </div>
    </div>

        {/* Library Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-100 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{bcaBooks.length}</div>
            <div className="text-sm text-blue-800">Subjects</div>
        </div>
        <div className="bg-green-100 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{availableBooks}</div>
            <div className="text-sm text-green-800">Books Available</div>
        </div>
        <div className="bg-purple-100 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">{totalBooks}</div>
            <div className="text-sm text-purple-800">Total Books</div>
        </div>
        <div className="bg-orange-100 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">{issuedBooks}</div>
            <div className="text-sm text-orange-800">Books Issued</div>
        </div>
        </div>

        {/* Books Display */}
        <div className="space-y-6">
        {filteredBooks.map(subject => (
            <div key={subject.id} className="border-l-4 border-blue-500 bg-blue-50 rounded-r-lg p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{subject.subject}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {subject.books.map(book => (
                <div key={book.id} className="bg-white rounded-lg p-4 shadow border hover:shadow-md transition-shadow duration-300">
                    <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-800 flex-1">{book.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        book.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                        {book.available ? 'Available' : 'Issued'}
                    </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                        <span>Edition: {book.edition}</span>
                    </div>
                    <div className="flex space-x-2">
                    <button
                        onClick={() => book.available ? handleBorrowBook(subject.id, book.id) : handleReturnBook(subject.id, book.id)}
                        className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors duration-300 ${
                            book.available
                            ? 'bg-blue-500 hover:bg-blue-600 text-white'
                            : 'bg-gray-500 hover:bg-gray-600 text-white'
                        }`}
                    >
                        {book.available ? '📖 Borrow Book' : '↩️ Return Book'}
                    </button>
                    </div>
                </div>
                ))}
            </div>
            </div>
        ))}
        </div>

        {/* Borrowed Books Section */}
        {borrowedBooks.length > 0 && (
        <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">📋 My Borrowed Books</h3>
            <div className="bg-yellow-50 rounded-lg p-4">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2 text-left">Book Name</th>
                        <th className="px-4 py-2 text-left">Author</th>
                        <th className="px-4 py-2 text-left">Subject</th>
                        <th className="px-4 py-2 text-left">Borrow Date</th>
                        <th className="px-4 py-2 text-left">Due Date</th>
                        <th className="px-4 py-2 text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {borrowedBooks.map((book, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2">{book.name}</td>
                        <td className="px-4 py-2">{book.author}</td>
                        <td className="px-4 py-2">{book.subject}</td>
                        <td className="px-4 py-2">{book.borrowDate}</td>
                        <td className="px-4 py-2">{book.dueDate}</td>
                        <td className="px-4 py-2">
                        <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                            Issued
                        </span>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    </div>
    )}
    </div>
    </div>
);
};

export default Library;