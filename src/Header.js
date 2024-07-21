import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;