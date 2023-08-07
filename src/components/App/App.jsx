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
// hooks
import useAuth from "../../hooks/useAuth.js";
function App() {
  const location = useLocation();

  const {
    isLoggedIn,
    handleRegister,
    handleAuthorize,
    handleLogout,
    handleTokenCheck,
  } = useAuth();

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    handleTokenCheck();
  }, []);

  const isContentPage = () => {
    const path = location.pathname;
    return ["/", "/movies", "/saved-movies", "/profile"].includes(path);
  };

  return (
    <>
      {isLoading && <Preloader setLoading={setLoading} />}
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
        <Route path="/profile" element={<Profile onLogout={handleLogout} />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<MoviesSaved />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {isContentPage() && !location.pathname.includes("/profile") && <Footer />}
    </>
  );
}

export default App;
