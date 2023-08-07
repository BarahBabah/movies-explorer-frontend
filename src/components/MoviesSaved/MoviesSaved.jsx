import React from "react";
import "./MoviesSaved.css";
import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
function MoviesSaved(props) {
  return (
    <main className="main">
      <section className="movies">
        <SearchForm />
        <MoviesCardList />
        <div className="poop"></div>
      </section>
    </main>
  );
}
export default MoviesSaved;
