import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import RollbarErrorBoundary from './components/RollbarErrorBoundary';
import './App.css';

function App() {
  return (
    <Router>
      <RollbarErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </RollbarErrorBoundary>
    </Router>
  );
}

export default App;