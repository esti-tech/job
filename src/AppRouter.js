import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationPage from './RegistrationUser';
import JobPostingPage from './JobPosting';
import Dashboard from './Dashboard';
import FormBuilder from './components/FormBuilder';
import CustomBranding from './components/CustomBranding';
import ThemeDesigner from './components/ThemeDesigner';
function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/jobposting" element={<JobPostingPage />} />
        <Route path="/RegistrationPage" element={<RegistrationPage />} />
        <Route path="/FormBuilder" element={<FormBuilder />} />
        <Route path="/CustomBranding" element={<CustomBranding />} />
        <Route path="/ThemeDesigner" element={<ThemeDesigner />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;