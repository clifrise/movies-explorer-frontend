import React, { useState, useEffect } from 'react';
import { Route, Switch, NavLink, useLocation } from 'react-router-dom';
import accountImg from '../../images/account.svg';
import closeImg from '../../images/close.svg';
import burgerImg from '../../images/burger.svg';
import './Navigation.css';

function Navigation({ loggedIn }) {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleMenuClick = function (e) {
    setMenuOpened(!menuOpened);
  };

  let navHeaderClass = menuOpened ? 'nav header__nav header__nav_active' : 'nav header__nav';
  let navCloseClass = menuOpened ? 'nav__close  nav__close_active' : 'nav__close';
  let navListClass = menuOpened ? 'nav__list nav__list_mobile' : 'nav__list';
  let overlayClass = menuOpened ? 'overlay overlay_active' : 'overlay';

  const location = useLocation();

  useEffect(() => {
    setMenuOpened(false);
  }, [location]);

  return (
    <Switch>
      {loggedIn ? (
        <Route exact path={['/movies', '/saved-movies', '/profile', '/']}>
          <nav className={navHeaderClass}>
            <button className={navCloseClass} type="button" onClick={handleMenuClick}>
              <img src={closeImg} alt="Скрыть меню" />
            </button>
            <ul className={navListClass}>
              <li className="nav__list-item nav__list-item_main nav__list-item_menu">
                <NavLink exact className="link" activeClassName="link_active" to="/">
                  Главная
                </NavLink>
              </li>
              <li className="nav__list-item nav__list-item_menu">
                <NavLink className="link" activeClassName="link_active" to="/movies">
                  Фильмы
                </NavLink>
              </li>
              <li className="nav__list-item nav__list-item_menu">
                <NavLink className="link" activeClassName="link_active" to="/saved-movies">
                  Сохраненные
                </NavLink>
              </li>
              <li className="nav__list-item nav__list-item_menu">
                <NavLink className="link account" to="/profile">
                  <span className="account__item">Аккаунт</span>
                  <img className="account__image" src={accountImg} alt="Профиль пользователя" />
                </NavLink>
              </li>
            </ul>
          </nav>
          <button className="header__burger" type="button" onClick={handleMenuClick}>
            <img src={burgerImg} alt="Мобильное меню" />
          </button>
          <div className={overlayClass}></div>
        </Route>
      ) : (
        <Route exact path="/">
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__list-item">
                <NavLink className="link" to="/signup">
                  Регистрация
                </NavLink>
              </li>
              <li className="nav__list-item">
                <NavLink to="/signin" className="link button button_green">
                  Войти
                </NavLink>
              </li>
            </ul>
          </nav>
        </Route>
      )}
    </Switch>
  );
}

export default Navigation;
