import React from "react";
import { Link, useLocation } from 'react-router-dom';
import './Movies.css'
import SearchForm from '../SearchForm/SearchForm.jsx'
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "../More/More";
import Footer from '../Footer/Footer'
function Movies(props) {
  const location = useLocation();

  return (
    <section className='movies'>
      <SearchForm/>
      <MoviesCardList/>
      <More/>
      <Footer/>
    </section>
  );
}
export default Movies;
