import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
function MoviesCard({ movie, handleAddMovie, isLikes }) {
  const location = useLocation();
  const isMoviesPath = () => location.pathname === "/movies";
  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;

  return (
    <li className="card">
      <div className="card__container">
        <div className="card__figcaption">
          <h2 className="card__heading">{movie.nameRU}</h2>
          <p className="card__time">{`${hours}ч ${minutes}м`}</p>
        </div>
        <button
          type="button"
          className={`card__spec button-hover ${
            isMoviesPath()
              ? !isLikes(movie)
                ? "card__spec_saved"
                : "card__spec_not-saved"
              : "card__spec_movies"
          }`}
          onClick={() => handleAddMovie(movie)}
        ></button>
      </div>
      <img
        className="card__thumbnail"
        src={movie.thumbnail}
        alt={movie.nameRU}
        onClick={() => window.open(`${movie.trailerLink}`, "_blank")}
      />
    </li>
  );
}
export default MoviesCard;
