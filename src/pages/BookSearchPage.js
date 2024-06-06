import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import { Link } from 'react-router-dom';
import '../styles/BookSearchPage.css';

const BookSearchPage = ({ onAddToBookshelf }) => {
  const [books, setBooks] = useState([]);

  const searchBooks = async (query) => {
    if (query.length > 0) {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
      setBooks(response.data.docs);
    } else {
      setBooks([]);
    }
  };

  return (
    <div className="book-search-page">
      <h1>Book Search</h1>
      <div className="search-bar">
        <SearchBar onSearch={searchBooks} />
      </div>
      <div className="book-list">
        <BookList books={books} onAddToBookshelf={onAddToBookshelf} />
      </div>
      <Link to="/bookshelf" className="bookshelf-link">Go to My Bookshelf</Link>
    </div>
  );
};

export default BookSearchPage;
