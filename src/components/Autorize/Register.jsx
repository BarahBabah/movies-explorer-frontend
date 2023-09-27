import React from "react";
import logo from "./../../images/logo.svg";
import { Link } from "react-router-dom";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import "./Autorize.css";
function Register({ onRegister }) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    setErrorText,
    errorText,
    handleServerError,
  } = useFormWithValidation();

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorText("");
    try {
      await onRegister(values.email, values.password, values.name);
    } catch (error) {
      handleServerError(error);
    }
  }

  return (
    <main className="main">
      <div className="autorize">
        <div className="autorize__container">
          <Link className="autorize__logo-link" to="/">
            <img className="autorize__logo" src={logo} alt="логотип" />
          </Link>
          <h1 className="autorize__heading">Добро пожаловать!</h1>
          <form className="autorize__form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="name" className="autorize__label">
              Имя
            </label>
            <input
              id="name"
              name="name"
              className="autorize__input"
              type="text"
              value={values.name || ""}
              required
              pattern="^[a-zA-Zа-яЁёА-Я\s\-]+$"
              placeholder="Введите имя пользователя"
              minLength={2}
              maxLength={30}
              onChange={handleChange}
            />
            <label
              htmlFor="name"
              className={`autorize__label autorize__label_error ${
                errors.name ? "has-error" : ""
              }`}
            >
              {errors.name || "Что-то пошло не так..."}
            </label>
            <label htmlFor="email" className="autorize__label">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              className="autorize__input"
              type="email"
              value={values.email || ""}
              placeholder="Введите email"
              required
              pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
              autoComplete="username"
              onChange={handleChange}
            />
            <label
              htmlFor="email"
              className={`autorize__label autorize__label_error ${
                errors.email ? "has-error" : ""
              }`}
            >
              {errors.email || "Что-то пошло не так..."}
            </label>
            <label htmlFor="password" className="autorize__label">
              Пароль
            </label>
            <input
              id="password"
              name="password"
              className="autorize__input"
              type="password"
              autoComplete="current-password"
              value={values.password || ""}
              placeholder="Введите пароль"
              required
              minLength={8}
              maxLength={30}
              onChange={handleChange}
            />
            <label
              htmlFor="password"
              className={`autorize__label autorize__label_error ${
                errors.password ? "has-error" : ""
              }`}
            >
              {errors.password || "Что-то пошло не так..."}
            </label>
            <label
              className={`autorize__label autorize__label_error autorize__label_error-submit ${
                errorText ? "has-error" : ""
              }`}
            >
              {errorText || "Что-то пошло не так..."}
            </label>
            <button
              type="submit"
              disabled={!isValid}
              className={`autorize__submit ${
                !isValid ? "disabled" : "button-hover"
              }`}
            >
              Зарегистрироваться
            </button>
          </form>
          <p className="autorize__paragraph">
            Уже зарегистрированы?
            <Link to="/signin" className="autorize__link link-hover">
              Войти
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
export default Register;
