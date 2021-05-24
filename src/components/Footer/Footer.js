import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <Switch>
      <Route exact path={['/movies', '/saved-movies', '/']}>
        <footer className="footer">
          <div className="footer__container">
            <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__notice">
              <span className="footer__copyright">© 2021</span>
              <nav className="nav footer__nav">
                <ul className="nav__list nav__list_footer">
                  <li className="nav__list-item nav__list-item_external nav__list-item_footer">
                    <a
                      href="https://praktikum.yandex.ru"
                      className="link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Яндекс.Практикум
                    </a>
                  </li>
                  <li className="nav__list-item nav__list-item_external nav__list-item_footer">
                    <a
                      href="https://github.com/clifrise"
                      className="link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </li>
                  <li className="nav__list-item nav__list-item_external nav__list-item_footer">
                    <a
                      href="https://www.facebook.com/clifrise"
                      className="link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </footer>
      </Route>
    </Switch>
  );
}

export default Footer;
