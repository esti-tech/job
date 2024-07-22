import React from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import styles from './Header.css';
const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    navigate('/'); // Redirect to login page
  };
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/jobposting">Job Posting</Link>
          </li>
          <li>
            <Link to="/RegistrationPage">Registration</Link>
          </li>
          {/* <li>
            <Link to="/FormBuilder">Form Builder</Link>
          </li>
          <li>
            <Link to="/CustomBranding">Custom Branding</Link>
          </li>
          <li>
            <Link to="/ThemeDesigner">Theme Designer</Link>
          </li> */}
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;