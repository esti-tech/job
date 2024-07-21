import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationPage from './RegistrationPage';
import JobPostingPage from './JobPosting';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/job-posting" element={<JobPostingPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;