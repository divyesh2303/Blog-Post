import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AuthorPosts from './pages/AuthorPosts';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/author/:id" element={<AuthorPosts />} />
      </Routes>
    </Router>
  );
}

export default App;




















