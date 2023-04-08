import React from 'react';

const Book = () => (
  <div>
    <h1>
      Harry potter by JK
      <button type="button">Delete</button>
    </h1>
    <form>
      <input placeholder="add title" />
      <input placeholder="add author" />
    </form>
  </div>
);

export default Book;
