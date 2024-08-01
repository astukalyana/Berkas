import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import DocumentPage from './DocumentPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/nopel/:nopelId" element={<DocumentPage />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
