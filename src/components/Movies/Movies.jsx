// Компонент Movies
import React from "react";
import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "../More/More";

function Movies({
  searchMovies,
  setShortMovies,
  shortMovies,
  movies,
  handleAddMovie,
  setMoviesInput,
  moviesInput,
  setIsEmptyInput,
  visibleMovies,
  isEmptyInput,
  showMore,
  isLikes,
  getMovies,
  setVisibleMovies,
  calculateVisibleMovies,
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
          getMovies={getMovies}
          setVisibleMovies={setVisibleMovies}
          calculateVisibleMovies={calculateVisibleMovies}
        />
        <MoviesCardList
          movies={movies}
          handleAddMovie={handleAddMovie}
          visibleMovies={visibleMovies}
          moviesInput={moviesInput}
          isEmptyInput={isEmptyInput}
          isLikes={isLikes}
        />
        {!isEmptyInput && visibleMovies < movies.length && (
          <More showMore={showMore} />
        )}
      </section>
    </main>
  );
}

export default Movies;
