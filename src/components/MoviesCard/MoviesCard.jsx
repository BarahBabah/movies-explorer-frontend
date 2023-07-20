import React from "react";
import { Link, useLocation } from 'react-router-dom';
import './MoviesCard.css'
import thumbnail from './../../images/thumbnail.png'
function MoviesCard(props) {
  const location = useLocation();

  return (
    <li className="card">
      <div className="card__container">
        <div className="card__figcaption">
          <h2 className="card__heading">33 слова о дизайне</h2>
          <p className="card__time">1ч 47м</p>
        </div>
        <button className="card__spec"></button>
      </div>
      <img className="card__thumbnail" src={thumbnail} alt="thumbnail" />
    </li>
  );
}
export default MoviesCard;
