import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider, ErrorBoundary } from '@rollbar/react';

// Rollbar configuration
const rollbarConfig = {
  accessToken: 'edd42e75a1f64fbdb534b174079f0bb1',
  environment: 'production',
  captureUncaught: true,
  captureUnhandledRejections: true,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider config={rollbarConfig}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();