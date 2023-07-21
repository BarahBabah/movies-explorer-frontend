import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Preloader from '../Preloader/Preloader.jsx';
import Header from './../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx';
import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies.jsx'
import MoviesSaved from '../MoviesSaved/MoviesSaved.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import Profile from '../Profile/Profile.jsx'
import Login from '../Autorize/Login.jsx';
import Register from '../Autorize/Register.jsx';
import useAuth from '../../hooks/useAuth.js'
import { handleTokenCheck } from './../../utils/token.js';
function App() {

  const location = useLocation();
  const navigate = useNavigate();

  const { isLoggedIn, setLoggedIn, handleRegister, handleAuthorize, handleLogout } = useAuth();

  const [isLoading, setLoading] = useState(true);
  const [profileEmail, setProfileEmail] = useState('');
  const [profileName, setProfileName] = useState('');

  useEffect(() => {
    handleTokenCheck(navigate, setLoggedIn, setProfileEmail, setProfileName);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const isContentPage = () => {
    const path = location.pathname;
    return ['/', '/movies', '/saved-movies', "/profile"].includes(path);
  }

  return (
    <>
      {isLoading && <Preloader />}
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
