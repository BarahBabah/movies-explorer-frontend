import { useState } from 'react';
import Header from './../Header/Header.jsx'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer.jsx';
import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies.jsx'
import MoviesSaved from '../MoviesSaved/MoviesSaved.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import Profile from '../Profile/Profile.jsx'
import Login from '../Autorize/Login.jsx';
import Register from '../Autorize/Register.jsx';

function App() {
  const location = useLocation();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const isContentPage = () => {
    const path = location.pathname;
    return ['/', '/movies', '/saved-movies', "/profile"].includes(path);
  }

  return (
    <>
      {isContentPage() && <Header loggedIn={isLoggedIn} />}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<MoviesSaved />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      {isContentPage() && !location.pathname.includes('/profile') && <Footer />}

    </>
  )
}

export default App;
