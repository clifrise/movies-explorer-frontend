import React from 'react';
import Path from '../Path/Path';
import './AboutProject.css';

function AboutProject() {
  return (
    <section id="about" className="about">
      <h2 className="section-header about__section-header">О проекте</h2>
      <div className="about__items">
        <div className="about__item">
          <p className="about__header">Дипломный проект включал 5 этапов</p>
          <p className="about__description">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
            доработки.
          </p>
        </div>
        <div className="about__item">
          <p className="about__header">На выполнение диплома ушло 5 недель</p>
          <p className="about__description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.
          </p>
        </div>
      </div>
      <Path />
    </section>
  );
}

export default AboutProject;
