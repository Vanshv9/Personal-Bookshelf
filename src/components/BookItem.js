import React from 'react';

const BookItem = ({ book, onAddToBookshelf }) => {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
      <button onClick={() => onAddToBookshelf(book)}>Add to Bookshelf</button>
    </div>
  );
};

export default BookItem;
