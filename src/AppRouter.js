import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationPage from './RegistrationUser';
import JobPostingPage from './JobPosting';
import Dashboard from './Dashboard';


function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/jobposting" element={<JobPostingPage />} />
        <Route path="/RegistrationPage" element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;