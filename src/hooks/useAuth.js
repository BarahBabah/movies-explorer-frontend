import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as auth from "./../utils/auth.js";

const useAuth = () => {
  const [isLoggedIn, setLoggedIn] = useState(!!localStorage.getItem("jwt"));
  const [currentUser, setCurrentUser] = useState(``);
  const navigate = useNavigate();

  // Регистрация и авторизация
  const handleRegister = (email, password, name) => {
    return auth
      .register(email, password, name)
      .then((response) => {
        if (response) {
          navigate("/signin");
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  const handleAuthorize = (email, password) => {
    return auth
      .authorize(email, password)
      .then((response) => {
        if (response) {
          localStorage.setItem("jwt", response.token);
          setLoggedIn(true);
          navigate("/movies");
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  const handleTokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .getContent(jwt)
        .then(() => setLoggedIn(true))
        .catch((err) => {
          console.log(err);
          setLoggedIn(false);
        });
    }
  };
  return {
    isLoggedIn,
    setLoggedIn,
    setCurrentUser,
    currentUser,
    handleRegister,
    handleAuthorize,
    handleTokenCheck,
  };
};

export default useAuth;
