import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import BuildsPage from './components/BuildsPage';
import TestsPage from './components/TestsPage';
import DeploymentsPage from './components/DeploymentsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-custom">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/builds" element={<BuildsPage />} />
            <Route path="/tests" element={<TestsPage />} />
            <Route path="/deployments" element={<DeploymentsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;