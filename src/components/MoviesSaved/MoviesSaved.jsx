import React from "react";
import { Link, useLocation } from 'react-router-dom';
import './MoviesSaved.css'
import SearchForm from '../SearchForm/SearchForm.jsx'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
function MoviesSaved(props) {
  const location = useLocation();

  return (
    <section className='movies'>
      <SearchForm/>
      <MoviesCardList/>
      <div className="poop"></div>
    </section>
  );
}
export default MoviesSaved;
