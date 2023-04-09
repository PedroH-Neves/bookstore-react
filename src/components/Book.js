import React from 'react';

function Book() {
  return (
    <li key={null}>
      {Book.title}
      by
      {Book.author}
    </li>
  );
}

export default Book;
