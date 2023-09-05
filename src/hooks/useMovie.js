import { useState, useEffect } from "react";
import * as moviesApi from "./../utils/moviesApi.js";
import mainApi from "../utils/mainApi.js";
import shortDuration from "./../utils/constants.js";
function useMovie() {
  const [isEmptyMoviesInput, setIsEmptyMoviesInput] = useState(true);
  const [isEmptyMoviesSavedInput, setIsEmptyMoviesSavedInput] = useState(true);
  const [allMovies, setAllMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [sortedMovies, setSortedMovies] = useState(
    JSON.parse(localStorage.getItem("sortedMovies")) || []
  );
  const [sortedSavedMovies, setSortedSavedMovies] = useState([]);

  //
  const [moviesInput, setMoviesInput] = useState(
    JSON.parse(localStorage.getItem("moviesInput")) || ""
  );
  const [savedMoviesInput, setSavedMoviesInput] = useState("");

  //
  const [shortMovies, setShortMovies] = useState(
    JSON.parse(localStorage.getItem("shortMovies")) || false
  );
  const [shortMoviesSaved, setShortMoviesSaved] = useState(false);
  const [visibleMovies, setVisibleMovies] = useState(12); // Изменено на 12, так как для 1280px нужно 4 ряда по 3 карточки

  function getMovies() {
    const MOVIES_PATH = "https://api.nomoreparties.co";
    moviesApi.getMovies().then((moviesArray) => {
      const newMoviesArray = moviesArray.map(
        ({
          country,
          description,
          director,
          duration,
          id,
          image,
          nameEN,
          nameRU,
          trailerLink,
          year,
        }) => ({
          country,
          description,
          director,
          duration,
          movieId: id,
          image: MOVIES_PATH + image.url,
          nameEN,
          nameRU,
          trailerLink,
          year,
          thumbnail: MOVIES_PATH + image.formats.thumbnail.url,
        })
      );
      setAllMovies(newMoviesArray);
      localStorage.setItem("movies", JSON.stringify(newMoviesArray));
    });
  }

  const calculateVisibleMovies = () => {
    if (window.innerWidth >= 1280) {
      return 12; // Изменено на 12 для 1280px
    } else if (window.innerWidth >= 768) {
      return 8; // 4 ряда по 2 карточки
    } else if (480 >= (window.innerWidth >= 320)) {
      return 5; // 5 карточек по 1 в ряд
    } else {
      return 0;
    }
  };
  const showMore = () => {
    let moreMovies = 0;

    if (window.innerWidth >= 1280) {
      moreMovies = 3;
    } else if (window.innerWidth >= 768) {
      moreMovies = 2;
    } else if (window.innerWidth >= 320) {
      moreMovies = 2;
    }

    setVisibleMovies(visibleMovies + moreMovies);
  };
  function getSavedMovies() {
    mainApi.getMoviesList().then((res) => {
      setSavedMovies(res);
      setSortedSavedMovies(res);
    });
  }

  function sortMovies(movies, searchForm, checked) {
    return movies.filter((movie) =>
      checked
        ? movie.duration <= shortDuration &&
          (movie.nameRU.toLowerCase().includes(searchForm.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(searchForm.toLowerCase()))
        : movie.nameRU.toLowerCase().includes(searchForm.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(searchForm.toLowerCase())
    );
  }

  function searchMovies() {
    const search = sortMovies(allMovies, moviesInput, shortMovies);
    setSortedMovies(search);

    //   локальные хранилища
    localStorage.setItem("moviesInput", JSON.stringify(moviesInput));
    localStorage.setItem("shortMovies", JSON.stringify(shortMovies));
    localStorage.setItem("sortedMovies", JSON.stringify(search));
    if (moviesInput) {
      setIsEmptyMoviesInput(false);
    }
  }

  function searchSavedMovies() {
    const search = sortMovies(savedMovies, savedMoviesInput, shortMoviesSaved);
    setSortedSavedMovies(search);
  }

  const isLikes = (movie) =>
    savedMovies.some((savedMovies) => savedMovies.movieId === movie.movieId);

  function addMovie(movie) {
    mainApi
      .addMovie(movie)
      .then((res) => {
        setSavedMovies([res, ...savedMovies]);
      })
      .catch((err) => console.log(err));
  }

  function deleteMovie(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        getSavedMovies();
      })
      .catch((err) => console.log(err));
  }

  const toggleMovie = (movie) => {
    const movieDelete = movie._id
      ? movie
      : savedMovies.find((i) => i.movieId === movie.movieId);
    isLikes(movie) ? deleteMovie(movieDelete) : addMovie(movie);
  };

  return {
    allMovies,
    sortedMovies,
    moviesInput,
    setMoviesInput,
    shortMovies,
    setShortMovies,
    isEmptyMoviesInput,
    setVisibleMovies,
    visibleMovies,
    calculateVisibleMovies,
    showMore,
    getMovies,
    getSavedMovies,
    searchMovies,
    searchSavedMovies,
    toggleMovie,
    isLikes,
    deleteMovie,
    isEmptyMoviesSavedInput,
    setIsEmptyMoviesSavedInput,
    savedMoviesInput,
    setSavedMoviesInput,
    sortedSavedMovies,
    shortMoviesSaved,
    setShortMoviesSaved,
    setIsEmptyMoviesInput,
    savedMovies,
    setSortedMovies,
  };
}
export default useMovie;
