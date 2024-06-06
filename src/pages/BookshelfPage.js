import React from 'react';
import Bookshelf from '../components/Bookshelf';
import { Link } from 'react-router-dom';

const BookshelfPage = ({ bookshelf, onRemoveFromBookshelf }) => {
  return (
    <div>
      <h1>My Bookshelf</h1>
      <Link to="/">Back to Search</Link>
      <Bookshelf bookshelf={bookshelf} onRemoveFromBookshelf={onRemoveFromBookshelf} />
      
    </div>
  );
};

export default BookshelfPage;