import React, { useState } from 'react';

function BookList() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = { title, author };
    setBooks([...books, newBook]);
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={null}>
            {book.title}
            by
            {book.author}
          </li>
        ))}
      </ul>

      <h2>Add a Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input id="title" type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div>
          <input id="author" type="text" value={author} onChange={(event) => setAuthor(event.target.value)} />
        </div>
        <button type="submit">Add new book</button>
      </form>
    </div>
  );
}

export default BookList;
