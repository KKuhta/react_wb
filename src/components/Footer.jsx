import React from 'react';
import '../scss/app.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <Link to="/" className="footer__logo">
          Wild Boars
        </Link>
        <ul className="footer__menu">
          <li>
            <a href="tel:+79263083488" className="footer__tel">
              +7 (926) 308 34-88
            </a>
          </li>
          <li>
            <a href="mailto:kkuhta@mail.ru">kkuhta@mail.ru</a>
          </li>
          <li>г. Краснодар, ул. Садовая, 15</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
