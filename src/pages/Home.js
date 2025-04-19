import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Our React App</h1>
        <h2>A simple template to get you started</h2>
      </header>
      
      <main>
        <p>Click below to navigate to another page:</p>
        <Link to="/about" className="nav-link">Go to About Page</Link>
      </main>
      
      <footer>
        <p>&copy; 2025 Simple React App</p>
      </footer>
    </div>
  );
}

export default Home;