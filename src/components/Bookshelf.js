import React from 'react';
import '../styles/Bookshelf.css';

const Bookshelf = ({ bookshelf, onRemoveFromBookshelf }) => {
  return (
    <div className="bookshelf">
      {bookshelf.map((book) => (
        <div key={book.key} className="book-card">
          <h3>{book.title}</h3>
          <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
          <button onClick={() => onRemoveFromBookshelf(book.key)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Bookshelf;
