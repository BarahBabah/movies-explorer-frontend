import { Link } from 'react-router-dom';
import './NavTab.css';

function NavTab() {
  return (
    <nav className="navtab">
      <ul className='navtab-list'>
        <li className='navtab-item'>
          <a className="navtab-link" href="#project">О проекте</a>
        </li>
        <li className='navtab-item'>
          <a className="navtab-link" href="#techs">Технологии</a>
        </li>
        <li className='navtab-item'>
          <a className="navtab-link" href="#student">Студент</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavTab;
