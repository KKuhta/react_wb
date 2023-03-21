import React from 'react';
import Ruk from '../img/uiface2.png';
import Dev1 from '../img/uifaces.png';
import Dev2 from '../img/uifaces3.png';
import Dev3 from '../img/uifaces4.png';
import Dev4 from '../img/uiface4.png';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <h2 className="about__title">Чем занимаемся?</h2>
        <div className="about__text">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
        </div>
        <div>
          <h2 className="about__title">Руководитель</h2>
          <div className="about__ruk">
            <img src={Ruk} alt="Руководитель" />
            <p>Иван Иванов</p>
          </div>
        </div>
        <div>
          <h2 className="about__title">Разработчики</h2>
          <div className="about__twodev">
            <div className="about__dev">
              <img src={Dev1} alt="Dev1" />
              <p>Артем Павлов</p>
            </div>
            <div className="about__dev">
              <img src={Dev2} alt="Dev2" />
              <p>Павел Павлов</p>
            </div>
          </div>
          <div className="about__twodev">
            <div className="about__dev">
              <img src={Dev3} alt="Dev1" />
              <p>Сергей Павлов</p>
            </div>
            <div className="about__dev">
              <img src={Dev4} alt="Dev2" />
              <p>Богдан Павлов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
