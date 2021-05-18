import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
  return (
    <Switch>
      <Route exact path={['/movies', '/saved-movies', '/profile', '/']}>
        <header className="header">
          <div className="header__container">
            <Logo />
            <Navigation />
          </div>
        </header>
      </Route>
    </Switch>
  );
}

export default Header;
