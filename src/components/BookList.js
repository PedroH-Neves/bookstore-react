import React, { useState } from 'react';
import NewBookForm from './NewBookForm';
import Book from './Book';

function BookList() {
  const [books] = useState([]);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <Book key={null} title={book.title} author={book.author} />
        ))}
      </ul>
      <h2>Add a Book</h2>
      <NewBookForm />
    </div>
  );
}

export default BookList;
