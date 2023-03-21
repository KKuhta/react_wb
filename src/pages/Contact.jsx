import React from 'react';
import '../scss/app.scss';
import Map from '../img/Map.png';

const Contact = () => {
  return (
    <div>
      <div className="contact" id="contact">
        <div className="container">
          <h2 className="contact__title">Главный офис</h2>
        </div>
      </div>
      <img src={Map} alt="Map" />
    </div>
  );
};

export default Contact;
