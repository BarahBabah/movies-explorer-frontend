import { useState } from "react";
import logo from "./../../images/logo.svg";
import { Link } from "react-router-dom";
import useFormWithValidation from "../../hooks/useFormWithValidation";
function Login({ onAuthorize }) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setErrorText,
    errorText,
    handleServerError,
  } = useFormWithValidation();

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorText("");
    try {
      await onAuthorize(values.email, values.password);
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
          <h1 className="autorize__heading">Рады видеть!</h1>
          <form className="autorize__form" onSubmit={handleSubmit}>
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
              value={values.password || ""}
              autoComplete="current-password"
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
              className={`autorize__label autorize__label_error autorize__label_error-submit autorize__label_error-submit_login ${
                errorText ? "has-error" : ""
              }`}
            >
              {errorText || "Что-то пошло не так..."}
            </label>
            <button
              type="submit"
              disabled={!isValid}
              className={`autorize__submit autorize__submit_login ${
                !isValid ? "disabled" : "button-hover"
              }`}
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
