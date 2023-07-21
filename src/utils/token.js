// import { useNavigate } from 'react-router-dom';
import * as auth from './auth.js';

export function handleTokenCheck(navigate, setLoggedIn, setProfileEmail, setProfileName) {
  const jwt = localStorage.getItem('jwt');
  if (jwt) {
    auth.getContent(jwt)
      .then(response => {
        if (response) {
          setLoggedIn(true);
          navigate('/');
          setProfileEmail(response.email);
          setProfileName(response.name);
        }
      });
  }
}
