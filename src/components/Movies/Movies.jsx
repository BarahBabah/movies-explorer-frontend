import React from "react";
import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "../More/More";
function Movies(props) {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList />
      <More />
    </section>
  );
}
export default Movies;
