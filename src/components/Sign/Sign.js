import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import logoImg from '../../images/logo.svg';
import './Sign.css';

function Sign(props) {
  return (
    <section className="sign">
      <section className="sign__container">
        <Link to="/" className="sign__logo">
          <img src={logoImg} alt="Логотип Movies" className="logo" />
        </Link>
        <h1 className="sign__title">{props.title}</h1>
        {props.children}
        <Switch>
          <Route path="/signup">
            <div className="sign__registration">
              Уже зарегистрированы?{' '}
              <Link className="link link_blue" to="/signin">
                Войти
              </Link>
            </div>
          </Route>
          <Route path="/signin">
            <div className="sign__registration">
              Ещё не зарегистрированы?{' '}
              <Link className="link link_blue" to="/signup">
                Регистрация
              </Link>
            </div>
          </Route>
        </Switch>
      </section>
    </section>
  );
}

export default Sign;
