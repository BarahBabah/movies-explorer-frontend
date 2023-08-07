import { useState } from "react";
import logo from "./../../images/logo.svg";
import { Link } from "react-router-dom";
function Login({ onAuthorize }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAuthorize(email, password);
  }
  return (
    <main className="main">
      <div className="autorize">
        <div className="autorize__container">
          <Link className="autorize__logo-link" to="/">
            <img className="autorize__logo" src={logo} alt="логотип" />
          </Link>
          <h1 className="autorize__heading">Рады видеть!</h1>
          <form className="autorize__form" onSubmit={handleSubmit}>
            <label htmlFor="email" className="autorize__label">
              E-mail
            </label>
            <input
              id="email"
              className="autorize__input"
              type="email"
              value={email}
              placeholder="Введите email"
              required
              autoComplete="username"
              onChange={handleEmailChange}
            />
            <label
              htmlFor="email"
              className="autorize__label autorize__label_error"
            >
              Что-то пошло не так...
            </label>
            <label htmlFor="password" className="autorize__label">
              Пароль
            </label>
            <input
              id="password"
              className="autorize__input"
              type="password"
              value={password}
              autoComplete="current-password"
              placeholder="Введите пароль"
              required
              minLength={8}
              maxLength={30}
              onChange={handlePasswordChange}
            />
            <label
              htmlFor="password"
              className="autorize__label autorize__label_error"
            >
              Что-то пошло не так...
            </label>
            <button
              type="submit"
              className="autorize__submit autorize__submit_login button-hover"
            >
              Войти
            </button>
          </form>
          <p className="autorize__paragraph">
            Ещё не зарегистрированы?
            <Link to="/signup" className="autorize__link link-hover">
              Регистрация
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
export default Login;
