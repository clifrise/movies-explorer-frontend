import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';
import logoImg from '../../images/logo.svg';

function Logo() {
  return (
    <Link to="/">
      <img src={logoImg} alt="Логотип Movies" className="logo" />
    </Link>
  );
}

export default Logo;
