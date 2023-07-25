import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
function MoviesCardList(props) {
  const location = useLocation();

  return (
    <section className="">
      <ol className="movies__list">
        {location.pathname === "/movies" && (
          <>
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
          </>
        )}
        {location.pathname === "/saved-movies" && (
          <>
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
          </>
        )}
      </ol>
    </section>
  );
}
export default MoviesCardList;
