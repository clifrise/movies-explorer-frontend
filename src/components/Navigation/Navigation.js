import React, { useState, useEffect } from 'react';
import { Route, Switch, Link, useLocation } from 'react-router-dom';
import accountImg from '../../images/account.svg';
import closeImg from '../../images/close.svg';
import burgerImg from '../../images/burger.svg';
import './Navigation.css';

function Navigation() {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleMenuClick = function (e) {
    setMenuOpened(!menuOpened);
  };

  let navHeaderClass = menuOpened
    ? 'nav header__nav header__nav_active'
    : 'nav header__nav';
  let navCloseClass = menuOpened
    ? 'nav__close  nav__close_active'
    : 'nav__close';
  let navListClass = menuOpened ? 'nav__list nav__list_mobile' : 'nav__list';
  let overlayClass = menuOpened ? 'overlay overlay_active' : 'overlay';

  const location = useLocation();

  useEffect(() => {
    setMenuOpened(false);
  }, [location]);

  return (
    <Switch>
      <Route path={['/movies', '/saved-movies', '/profile']}>
        <nav className={navHeaderClass}>
          <button
            className={navCloseClass}
            type="button"
            onClick={handleMenuClick}
          >
            <img src={closeImg} alt="Скрыть меню" />
          </button>
          <ul className={navListClass}>
            <li className="nav__list-item nav__list-item_main nav__list-item_menu">
              <Link className="link" to="/">
                Главная
              </Link>
            </li>
            <li className="nav__list-item nav__list-item_menu">
              <Link className="link" to="/movies">
                Фильмы
              </Link>
            </li>
            <li className="nav__list-item nav__list-item_menu">
              <Link className="link" to="/saved-movies">
                Сохраненные
              </Link>
            </li>
            <li className="nav__list-item nav__list-item_menu">
              <Link className="link account" to="/profile">
                <span className="account__item">Аккаунт</span>
                <img
                  className="account__image"
                  src={accountImg}
                  alt="Профиль пользователя"
                />
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="header__burger"
          type="button"
          onClick={handleMenuClick}
        >
          <img src={burgerImg} alt="Мобильное меню" />
        </button>
        <div className={overlayClass}></div>
      </Route>
      <Route exact path="/">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__list-item">
              <Link className="link" to="/signup">
                Регистрация
              </Link>
            </li>
            <li className="nav__list-item">
              <Link to="/signin" className="link button button_green">
                Войти
              </Link>
            </li>
          </ul>
        </nav>
      </Route>
    </Switch>
  );
}

export default Navigation;
