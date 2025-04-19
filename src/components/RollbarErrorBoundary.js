import React from 'react';
import { ErrorBoundary } from '@rollbar/react';
import './ErrorBoundary.css';

// Custom fallback UI component to show when an error is caught
function ErrorFallback({ error, resetError }) {
  return (
    <div className="error-fallback">
      <h2>Something went wrong</h2>
      <p>
        An error occurred and has been reported to our team. 
        You can try refreshing the page or going back to the home page.
      </p>
      {error && <p className="error-message">Error: {error.message}</p>}
      {resetError && (
        <button className="reset-button" onClick={resetError}>
          Reset Application
        </button>
      )}
    </div>
  );
}

// Enhanced error boundary with custom fallback UI
function RollbarErrorBoundary({ children }) {
  return (
    <ErrorBoundary fallbackUI={ErrorFallback}>
      {children}
    </ErrorBoundary>
  );
}

export default RollbarErrorBoundary;