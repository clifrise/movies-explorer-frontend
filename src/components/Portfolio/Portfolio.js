import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <p className="portfolio__header">Портфолио</p>
      <div className="portfolio__item">
        <a href="https://github.com/clifrise/how-to-learn" className="link portfolio__link">
          Статичный сайт
        </a>
      </div>
      <div className="portfolio__item">
        <a
          href="https://clifrise.github.io/russian-travel/index.html"
          className="link portfolio__link"
        >
          Адаптивный сайт
        </a>
      </div>
      <div className="portfolio__item">
        <a href="http://ruslanbelyi.students.nomoredomains.icu/" className="link portfolio__link">
          Одностраничное приложение
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
