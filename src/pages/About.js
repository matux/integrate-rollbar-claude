import React from 'react';
import { Link } from 'react-router-dom';
import { useRollbarLogger } from '../utils/rollbar';
import './About.css';

function About() {
  const rollbar = useRollbarLogger();

  // Log a page view to Rollbar when the component mounts
  React.useEffect(() => {
    rollbar.info('User visited About page', { page: 'About' });
  }, [rollbar]);

  // Example of a function that would cause an unhandled error
  const handleCauseUnhandledError = () => {
    // This error will be caught by the Rollbar ErrorBoundary
    const nonExistentFunction = undefined;
    nonExistentFunction();
  };

  return (
    <div className="about-container">
      <div className="centered-content">
        <p>This is the About page</p>
        <Link to="/" className="back-link">Back to Home</Link>
        
        <div className="error-demo">
          <button 
            onClick={handleCauseUnhandledError} 
            className="unhandled-error-button"
          >
            Cause Unhandled Error
          </button>
          <p className="note">This will crash the component, but Rollbar will catch it!</p>
        </div>
      </div>
    </div>
  );
}

export default About;