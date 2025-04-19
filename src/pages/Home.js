import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRollbarLogger } from '../utils/rollbar';
import './Home.css';

function Home() {
  const rollbar = useRollbarLogger();
  const [hasError, setHasError] = useState(false);

  // Example function to log info to Rollbar
  const handleLogInfo = () => {
    rollbar.info('User clicked the log info button', { page: 'Home' });
    alert('Info logged to Rollbar!');
  };

  // Example function to trigger an error
  const handleTriggerError = () => {
    try {
      // Intentionally cause an error
      throw new Error('This is a test error from the Home page');
    } catch (error) {
      // Log the error to Rollbar
      rollbar.error(error);
      setHasError(true);
      alert('Error logged to Rollbar!');
    }
  };

  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Our React App</h1>
        <h2>A simple template with Rollbar integration</h2>
      </header>
      
      <main>
        <p>Click below to navigate to another page:</p>
        <Link to="/about" className="nav-link">Go to About Page</Link>
        
        <div className="rollbar-actions">
          <h3>Rollbar Test Actions</h3>
          <button onClick={handleLogInfo} className="rollbar-button info">
            Log Info to Rollbar
          </button>
          <button onClick={handleTriggerError} className="rollbar-button error">
            Trigger Test Error
          </button>
          {hasError && (
            <p className="error-message">
              Error triggered and logged to Rollbar!
            </p>
          )}
        </div>
      </main>
      
      <footer>
        <p>&copy; 2025 Simple React App with Rollbar</p>
      </footer>
    </div>
  );
}

export default Home;