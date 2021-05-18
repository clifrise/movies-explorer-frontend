import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section id="technologies" className="technologies">
      <div className="technologies__container">
        <h2 className="section-header technologies__section-header">
          Технологии
        </h2>
        <div className="technologies__content">
          <p className="technologies__header">7 технологий</p>
          <p className="technologies__description">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <ul className="technologies__list">
            <li className="technologies__list-item">HTML</li>
            <li className="technologies__list-item">CSS</li>
            <li className="technologies__list-item">JS</li>
            <li className="technologies__list-item">React</li>
            <li className="technologies__list-item">Git</li>
            <li className="technologies__list-item">Express.js</li>
            <li className="technologies__list-item">mongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Techs;
