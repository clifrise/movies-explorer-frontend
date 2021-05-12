import React from 'react';
import './NavTab.css';

function NavTab() {
  return (
    <nav className="nav promo__nav">
      <ul className="nav__list nav__list_promo">
        <li className="nav__list-item nav__list-item_promo">
          <a className="link promo__link" href="#about">
            О проекте
          </a>
        </li>
        <li className="nav__list-item nav__list-item_promo">
          <a className="link promo__link" href="#technologies">
            Технологии
          </a>
        </li>
        <li className="nav__list-item nav__list-item_promo">
          <a className="link promo__link" href="#student">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
