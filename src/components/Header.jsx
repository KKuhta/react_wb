import React from 'react';

import '../scss/app.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/" className="header__logo">
          Wild Boars
        </Link>
        <ul className="header__menu">
          <li>
            <Link to="/about">О компании</Link>
            <Link to="/services">Услуги</Link>
            <Link to="/contact">Контакты</Link>
          </li>
          <li></li>
          <li></li>
        </ul>
        <a href="tel:+79263083488" className="header__tel">
          +7 (926) 308 34-88
        </a>
      </div>
    </div>
  );
};

export default Header;
