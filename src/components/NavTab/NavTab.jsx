import { Link } from 'react-router-dom';
import './NavTab.css';

function NavTab() {
  return (
    <nav className="navtab">
      <ul className='navtab-list'>
        <li className='navtab-item'>
          <a className="navtab-link link-hover" href="#project">О проекте</a>
        </li>
        <li className='navtab-item'>
          <a className="navtab-link link-hover" href="#techs">Технологии</a>
        </li>
        <li className='navtab-item'>
          <a className="navtab-link link-hover" href="#student">Студент</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavTab;
