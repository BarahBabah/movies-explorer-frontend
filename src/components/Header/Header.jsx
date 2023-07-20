import React from "react";
import logo from "./../../images/logo.svg"
import { Link, useLocation } from 'react-router-dom';
import './Header.css'
function Header({loggedIn}) {
  const location = useLocation();
  return (
    <header className='header'>
      <div className="header__container">
        <Link className="header__logo-link"  to="/">
          <img src={logo} alt="logotype" />
        </Link>
        <div className="header__auth-container">
          <Link to="/signup" className="header__link">Регистрация</Link>
          <Link to="/signin" className="header__button">Войти</Link>
        </div>
      </div>
    </header>
  );
}
export default Header;
