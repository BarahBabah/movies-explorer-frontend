import React from "react";
import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "../More/More";
function Movies(props) {
  return (
    <main className="main">
      <section className="movies">
        <SearchForm />
        <MoviesCardList />
        <More />
      </section>
    </main>
  );
}
export default Movies;
