import React from "react";
import "./MoviesSaved.css";
import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
function MoviesSaved({
  searchMovies,
  setShortMovies,
  movies,
  setMoviesInput,
  moviesInput,
  setIsEmptyInput,
  handleAddMovie,
  isLikes,
  shortMovies,
}) {
  return (
    <main className="main">
      <section className="movies">
        <SearchForm
          searchMovies={searchMovies}
          setShortMovies={setShortMovies}
          shortMovies={shortMovies}
          setMoviesInput={setMoviesInput}
          moviesInput={moviesInput}
          setIsEmptyInput={setIsEmptyInput}
        />
        <MoviesCardList
          movies={movies}
          handleAddMovie={handleAddMovie}
          isLikes={isLikes}
        />
        <div className="poop"></div>
      </section>
    </main>
  );
}
export default MoviesSaved;
