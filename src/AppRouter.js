import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationPage from './RegistrationUser';
import JobPostingPage from './JobPosting';
import Dashboard from './Dashboard';
import Jobs from './Jobs';
// import FormBuilder from './components/FormBuilder';
// import CustomBranding from './components/CustomBranding';
// import ThemeDesigner from './components/ThemeDesigner';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
function AppRouter ()
{
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Dashboard /> } />
        <Route path="/jobposting" element={ <PrivateRoute><JobPostingPage /></PrivateRoute> } />
        <Route path="/RegistrationPage/:id" element={ <RegistrationPage /> } />
        {/* <Route path="/FormBuilder" element={<FormBuilder />} />
        <Route path="/CustomBranding" element={<CustomBranding />} />
        <Route path="/ThemeDesigner" element={<ThemeDesigner />} /> */}
        <Route path="/login" element={ <Login /> } />
        <Route path="/jobs" element={ <Jobs /> } />
      </Routes>
    </Router>
  );
}

export default AppRouter;