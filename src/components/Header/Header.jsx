import { useState } from "react";
import logo from "./../../images/logo.svg"
import { Link, useLocation } from 'react-router-dom';
import Navigation from "../Navigation/Navigation";
import './Header.css'
function Header({ loggedIn }) {
  const location = useLocation();

  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const handleBurgerMenuToggle = () => {
    setBurgerMenuOpen(prevState => !prevState);
  };

  return (
    <header className='header'>
      <div className="header__container">
        <Link className="header__logo-link" to="/">
          <img className="header__logo" src={logo} alt="logotype" />
        </Link>
        {loggedIn
          ?
          <>
            <button className={`navigation__menu`} onClick={handleBurgerMenuToggle}></button>
            <Navigation isBurgerMenuOpen={isBurgerMenuOpen} setBurgerMenuOpen={setBurgerMenuOpen} handleBurgerMenuToggle={handleBurgerMenuToggle} />
          </>
          :
          <nav className="header__auth-container">
            <Link to="/signup" className="header__link link-hover">Регистрация</Link>
            <Link to="/signin" className="header__button button-hover">Войти</Link>
          </nav>
        }
      </div>
    </header>
  );
}
export default Header;
