import React from "react";
import logo from "./../../images/logo.svg"
import { Link, useLocation } from 'react-router-dom';
import Navigation from "../Navigation/Navigation";
import './Header.css'
function Header({ loggedIn }) {
  const location = useLocation();
  return (
    <header className='header'>
      <div className="header__container">
        <Link className="header__logo-link" to="/">
          <img className="header__logo" src={logo} alt="logotype" />
        </Link>
        {loggedIn
          ?
          <Navigation />
          :
          <div className="header__auth-container">
            <Link to="/signup" className="header__link link-hover">Регистрация</Link>
            <Link to="/signin" className="header__button button-hover">Войти</Link>
          </div>
        }
      </div>
    </header>
  );
}
export default Header;
