import React from 'react';
import
{
  BrowserRouter as Router, Routes, Route, Link,
}
  from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import Book from './components/BookList';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/categories">Categories</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Book />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
