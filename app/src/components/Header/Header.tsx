import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={'/'}> Main </Link>
          </li>
          <li>
            <Link to={'/news'}> News </Link>
          </li>
          <li>
            <Link to={'/mint'}> Mint </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
