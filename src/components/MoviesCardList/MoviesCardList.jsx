import React, { useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
function MoviesCardList({
  movies,
  handleAddMovie,
  visibleMovies,
  isEmptyInput,
  isLikes,
  isLoadingMovies,
}) {
  return (
    <>
      <>
        {isEmptyInput ? (
          <ol className="movies__list">
            <li className="movies__item movies__list-not-found">
              Введите ключевое слово
            </li>
          </ol>
        ) : isLoadingMovies ? (
          <Preloader />
        ) : (
          <>
            {movies.length === 0 ? (
              <ol className="movies__list">
                <li className="movies__item movies__list-not-found">
                  Ничего не найдено
                </li>
              </ol>
            ) : (
              <ol className="movies__list">
                {movies.slice(0, visibleMovies).map((movie) => (
                  <MoviesCard
                    key={movie.movieId}
                    movie={movie}
                    handleAddMovie={handleAddMovie}
                    isLikes={isLikes}
                  />
                ))}
              </ol>
            )}
          </>
        )}
      </>
    </>
  );
}

export default MoviesCardList;
