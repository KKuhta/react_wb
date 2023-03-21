import React from 'react';
import Tarifs from '../components/Tarifs';
import Lite from '../img/Lite.png';
import Medium from '../img/Medium.png';
import Pro from '../img/Pro.png';
import Luxury from '../img/Luxury.png';

const Home = () => {
  return (
    <div>
      <div className="billboard">
        <div className="container">
          <h2 className="billboard__title">Мечтаешь о собственном сайте?</h2>
          <h2 className="billboard__title">Тогда тебе к нам</h2>
          <p className="billboard__text">Лучшие Web-программисты сделают сайт для тебя!</p>
          <div className="billboard__buttona">
            <a href="#tarifs" className="billboard__button">
              Выбрать тариф
            </a>
          </div>
        </div>
      </div>
      <Tarifs />
      <div className="works">
        <div className="container">
          <h2 className="works__title">Примеры работ</h2>
          <div className="works__siteS">
            <div className="works__siteBlock">
              <h3>"Lite"</h3>

              <div className="works__img">
                <img src={Lite} alt="Lite" />
              </div>
            </div>
            <div className="works__siteBlock">
              <h3>"Medium"</h3>
              <div className="works__img">
                <img src={Medium} alt="Medium" />
              </div>
            </div>
          </div>
          <div className="works__siteM">
            <div className="works__siteBlock">
              <h3>"Pro"</h3>
              <div className="works__img">
                <img src={Pro} alt="Pro" />
              </div>
            </div>
            <div className="works__siteBlock">
              <h3>"Luxury"</h3>
              <div className="works__img">
                <img src={Luxury} alt="Luxury" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
