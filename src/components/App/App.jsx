import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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
import * as moviesApi from "../../utils/moviesApi.js";
function App() {
  const location = useLocation();

  const {
    isLoggedIn,
    handleRegister,
    handleAuthorize,
    handleLogout,
    handleTokenCheck,
    setCurrentUser,
    currentUser,
  } = useAuth();

  const [isLoading, setLoading] = useState(true);

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

  useEffect(() => {
    moviesApi.getMovies().then((res) => {
      console.log(res);
    });
  }, []);

  const isContentPage = () => {
    const path = location.pathname;
    return ["/", "/movies", "/saved-movies", "/profile"].includes(path);
  };

  return (
    <>
      {isLoading && <Preloader setLoading={setLoading} />}
      <CurrentUserContext.Provider value={currentUser}>
        {isContentPage() && <Header loggedIn={isLoggedIn} />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/signup"
            element={<Register onRegister={handleRegister} />}
          />
          <Route
            path="/signin"
            element={<Login onAuthorize={handleAuthorize} />}
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={isLoggedIn}
                onLogout={handleLogout}
              />
            }
          />
          <Route
            path="/movies"
            element={<ProtectedRoute element={Movies} loggedIn={isLoggedIn} />}
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute element={MoviesSaved} loggedIn={isLoggedIn} />
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
