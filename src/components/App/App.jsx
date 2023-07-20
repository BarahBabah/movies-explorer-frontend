import { useState, useEffect } from 'react';
import Header from './../Header/Header.jsx'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer.jsx';
import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies.jsx'
import MoviesSaved from '../MoviesSaved/MoviesSaved.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import Profile from '../Profile/Profile.jsx'
import Login from '../Autorize/Login.jsx';
import Register from '../Autorize/Register.jsx';
import * as auth from './../../utils/auth.js';
function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    handleTokenCheck();
  }, [])

  // новое
  function handleTokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.getContent(jwt)
        .then(response => {
          if (response) {
            setLoggedIn(true);
            navigate('/');
          }
        })
    }
  }

  // Регистрация и авторизация
  function handleRegister(email, password, name) {
    auth.register(email, password, name)
      .then(response => {
        if (response) {
          navigate('/signin');
        }
      }).catch(err => {
        console.log(err);
      })
  }
  function handleAuthorize(email, password) {
    auth.authorize(email, password)
      .then(response => {
        if (response) {
          localStorage.setItem('jwt', response.token);
          setLoggedIn(true);
          navigate('/movies');
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
  function handleLogout() {
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    navigate('/');
  };

  const isContentPage = () => {
    const path = location.pathname;
    return ['/', '/movies', '/saved-movies', "/profile"].includes(path);
  }

  return (
    <>
      {isContentPage() && <Header loggedIn={isLoggedIn} />}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signup' element={<Register onRegister={handleRegister} />} />
        <Route path='/signin' element={<Login onAuthorize={handleAuthorize} />} />
        <Route path='/profile' element={<Profile onLogout={handleLogout} />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<MoviesSaved />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      {isContentPage() && !location.pathname.includes('/profile') && <Footer />}

    </>
  )
}

export default App;
