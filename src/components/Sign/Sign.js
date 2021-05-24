import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import logoImg from '../../images/logo.svg';
import { SERVER_ERROR } from '../../utils/constants';
import './Sign.css';

function Sign({ title, children, isSuccess }) {
  return (
    <section className="sign">
      <section className="sign__container">
        <Link to="/" className="sign__logo">
          <img src={logoImg} alt="Логотип Movies" className="logo" />
        </Link>
        <h1 className="sign__title">{title}</h1>
        {children}
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
        {!isSuccess ? <p className="sign__error">{SERVER_ERROR}</p> : null}
      </section>
    </section>
  );
}

export default Sign;
