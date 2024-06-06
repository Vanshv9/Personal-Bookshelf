import React from 'react';
import BookCard from './BookCard';
import '../styles/booklist.css'

const BookList = ({ books, onAddToBookshelf }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.key} book={book} onAddToBookshelf={onAddToBookshelf} />
      ))}
    </div>
  );
};

export default BookList;
