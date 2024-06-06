import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookSearchPage from './pages/BookSearchPage';
import BookshelfPage from './pages/BookshelfPage';
import './App.css';

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(savedBookshelf);
  }, []);

  useEffect(() => {
    localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
  }, [bookshelf]);

  const addToBookshelf = (book) => {
    setBookshelf([...bookshelf, book]);
  };

  const removeFromBookshelf = (key) => {
    setBookshelf(bookshelf.filter((book) => book.key !== key));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookSearchPage onAddToBookshelf={addToBookshelf} />} />
        <Route path="/bookshelf" element={<BookshelfPage bookshelf={bookshelf} onRemoveFromBookshelf={removeFromBookshelf} />} />
      </Routes>
    </Router>
  );
};

export default App;
