import { Link } from "react-router-dom";
import "./Navigation.css";
import account from "./../../images/account.svg";
function Navigation({ isBurgerMenuOpen, handleBurgerMenuToggle }) {
  return (
    <nav
      className={`navigation ${
        isBurgerMenuOpen ? "navigation__menu_active" : ""
      }`}
    >
      {isBurgerMenuOpen ? (
        <>
          <button
            className={`navigation__menu navigation__menu_exit`}
            onClick={handleBurgerMenuToggle}
          ></button>
          <Link
            to="/"
            className="navigation__link navigation__link_main navigation__link link-hover"
          >
            Главная
          </Link>
        </>
      ) : (
        <></>
      )}
      <Link
        to="/movies"
        className="navigation__link navigation__link_movies link-hover"
      >
        Фильмы
      </Link>
      <Link
        to="/saved-movies"
        className="navigation__link navigation__link_saved link-hover"
      >
        Сохранённые фильмы
      </Link>
      <Link
        to="/profile"
        className="navigation__link navigation__link_account link-hover"
      >
        <img className="navigation__image" src={account} alt="Аккаунт" />
      </Link>
    </nav>
  );
}

export default Navigation;
