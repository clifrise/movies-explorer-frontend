import React from 'react';
import Portfolio from '../Portfolio/Portfolio';
import studentImg from '../../images/ruslanbelyi.png';
import './AboutMe.css';

function AboutMe() {
  return (
    <section id="student" className="student">
      <h2 className="section-header student__section-header">Студент</h2>
      <div className="student__content">
        <img src={studentImg} alt="Руслан Белый" className="student__image" />
        <p className="student__header">Руслан</p>
        <p className="student__subheader">Фронтенд-разработчик, 37 лет</p>
        <p className="student__description">
          В 2010 году закончил ВоГТУ. С нуля делаю сайты и сервисы интернет-платежей, помогаю найти
          и исправить технические ошибки в работающих проектах. Консультирую по продвижению сайтов в
          поисковых системах. Умею запускать большие проекты: в 2010 году вместе с командой
          разработал и запустил интернет-банк Сбербанка России. В 2012 запустил сайт платежной
          системы Rapida. В 2020 году запустил сайт «Бизнес Секреты» от Тинькофф Банка.
        </p>
        <nav className="nav student__nav">
          <ul className="nav__list">
            <li className="nav__list-item nav__list-item_external">
              <a
                href="https://github.com/clifrise"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="nav__list-item nav__list-item_external">
              <a
                href="https://www.facebook.com/clifrise"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
        <Portfolio />
      </div>
    </section>
  );
}

export default AboutMe;
