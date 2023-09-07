import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Functional Components
import Preloader from "../Preloader/Preloader.jsx";
import Header from "./../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Main from "../Main/Main.jsx";
import Movies from "../Movies/Movies.jsx";
import MoviesSaved from "../MoviesSaved/MoviesSaved.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import Profile from "../Profile/Profile.jsx";
import Login from "../Autorize/Login.jsx";
import Register from "../Autorize/Register.jsx";

// ProtectedRoute и CurrentUserContext
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import CurrentUserContext from "../../context/CurrentUserContext.jsx";
// hooks и api
import useAuth from "../../hooks/useAuth.js";
import mainApi from "../../utils/mainApi.js";
import useMovie from "../../hooks/useMovie.js";
function App() {
  const location = useLocation();

  const {
    isLoggedIn,
    handleRegister,
    handleAuthorize,
    handleTokenCheck,
    setCurrentUser,
    setLoggedIn,
    currentUser,
  } = useAuth();

  const {
    allMovies,
    sortedMovies,
    setSortedMovies,
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
    savedMovies,
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
  } = useMovie();

  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.clear();
    setCurrentUser({});
    setSortedMovies([]);
    setMoviesInput("");
    setIsEmptyMoviesInput(true);

    setLoggedIn(false);
    navigate("/");
  };

  useEffect(() => {
    handleTokenCheck();
    if (isLoggedIn) {
      mainApi
        .getCurrentUser()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  const isContentPage = () => {
    const path = location.pathname;
    return ["/", "/movies", "/saved-movies", "/profile"].includes(path);
  };

  // НИЖЕ ВСЁ ДЛЯ ФИЛЬМОВ
  useEffect(() => {
    const handleResize = () => {
      const newVisibleMovies = calculateVisibleMovies();
      setVisibleMovies(newVisibleMovies);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Вызовем один раз при загрузке страницы
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      // getMovies();

      getSavedMovies();
    }
  }, [isLoggedIn]);

  useEffect(searchMovies, [allMovies, shortMovies]);

  useEffect(searchSavedMovies, [shortMoviesSaved, savedMovies]);

  return (
    <>
      {isLoading && <Preloader setLoading={setLoading} />}
      <CurrentUserContext.Provider value={currentUser}>
        {isContentPage() && <Header loggedIn={isLoggedIn} />}
        <Routes>
          {/* <Route
            path="/signup"
            element={<Register onRegister={handleRegister} />}
          /> */}
          <Route
            path="/signup"
            element={
              <ProtectedRoute
                element={Register}
                loggedIn={!isLoggedIn}
                onRegister={handleRegister}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <ProtectedRoute
                element={Login}
                loggedIn={!isLoggedIn}
                onAuthorize={handleAuthorize}
              />
            }
          />
          {/* <Route
            path="/signin"
            element={<Login onAuthorize={handleAuthorize} />}
          /> */}
          <Route path="/" element={<Main />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={isLoggedIn}
                onLogout={handleLogout}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                searchMovies={searchMovies}
                loggedIn={isLoggedIn}
                setShortMovies={setShortMovies}
                shortMovies={shortMovies}
                movies={sortedMovies}
                handleAddMovie={toggleMovie}
                setMoviesInput={setMoviesInput}
                moviesInput={moviesInput}
                setIsEmptyInput={setIsEmptyMoviesInput}
                isEmptyInput={isEmptyMoviesInput}
                visibleMovies={visibleMovies}
                showMore={showMore}
                isLikes={isLikes}
                getMovies={getMovies}
                calculateVisibleMovies={calculateVisibleMovies}
                setVisibleMovies={setVisibleMovies}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={MoviesSaved}
                searchMovies={searchSavedMovies}
                loggedIn={isLoggedIn}
                setShortMovies={setShortMoviesSaved}
                shortMovies={shortMoviesSaved}
                movies={sortedSavedMovies}
                setMoviesInput={setSavedMoviesInput}
                moviesInput={savedMoviesInput}
                setIsEmptyInput={setIsEmptyMoviesSavedInput}
                isEmptyInput={isEmptyMoviesSavedInput}
                handleAddMovie={deleteMovie}
                isLikes={isLikes}
              />
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        {isContentPage() && !location.pathname.includes("/profile") && (
          <Footer />
        )}
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
