import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="centered-content">
        <p>This is the About page</p>
        <Link to="/" className="back-link">Back to Home</Link>
      </div>
    </div>
  );
}

export default About;