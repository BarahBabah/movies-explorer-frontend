import { Link } from 'react-router-dom';
import './Navigation.css';
import account from "./../../images/account.svg"
function Navigation() {
  return (
    <div className='navigation'>
      <Link to="/movies" className="navigation__link navigation__link_movies link-hover">Фильмы</Link>
      <Link to="/saved-movies" className="navigation__link link-hover">Сохранённые фильмы</Link>
      <Link to="/profile" className="navigation__link navigation__link_account link-hover">
        <img className="navigation__image" src={account} alt="Аккаунт" />
      </Link>
    </div>
  )
}

export default Navigation;
