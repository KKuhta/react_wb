import React from 'react';
import '../scss/app.scss';

const Header = () => {
  return (
    <div className="tarifs" id="tarifs">
      <div className="container">
        <h2 className="tarifs__title">Тарифы</h2>
        <div className="tarifs__siteS">
          <div className="tarifs__siteBlock">
            <h3>"Lite"</h3>
            <h4>Цена:</h4>
            <p>от 20000 рублей</p>
          </div>
          <div className="tarifs__siteBlock">
            <h3>"Medium"</h3>
            <h4>Цена:</h4>
            <p>от 30000 рублей</p>
          </div>
        </div>
        <div className="tarifs__siteM">
          <div className="tarifs__siteBlock">
            <h3>"Pro"</h3>
            <h4>Цена:</h4>
            <p>от 80000 рублей</p>
          </div>
          <div className="tarifs__siteBlock">
            <h3>"Luxury"</h3>
            <h4>Цена:</h4>
            <p>от 120000 рублей</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
