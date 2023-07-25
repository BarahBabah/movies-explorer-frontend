import React from "react";
import "./MoviesSaved.css";
import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
function MoviesSaved(props) {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList />
      <div className="poop"></div>
    </section>
  );
}
export default MoviesSaved;
