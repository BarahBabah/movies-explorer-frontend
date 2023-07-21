import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as auth from './../utils/auth.js';

const useAuth = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Регистрация и авторизация
  const handleRegister = (email, password, name) => {
    auth.register(email, password, name)
      .then(response => {
        if (response) {
          navigate('/signin');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleAuthorize = (email, password) => {
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
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    navigate('/');
  };

  return { isLoggedIn, setLoggedIn,  handleRegister, handleAuthorize, handleLogout };
};

export default useAuth;
