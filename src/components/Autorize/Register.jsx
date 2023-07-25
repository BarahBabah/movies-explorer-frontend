import { useState } from "react";
import logo from "./../../images/logo.svg"
import { Link } from "react-router-dom";
import './Autorize.css'
function Register({ onRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(email, password, name);
  }

  return (
    <div className="autorize">
      <div className="autorize__container">
        <Link className="autorize__logo-link" to="/">
          <img className="autorize__logo" src={logo} alt="логотип" />
        </Link>
        <h1 className="autorize__heading">Добро пожаловать!</h1>
        <form className="autorize__form" noValidate onSubmit={handleSubmit}>
          <label htmlFor="name" className="autorize__label">Имя</label>
          <input id="name" className="autorize__input" type="text" value={name} onChange={handleNameChange} />
          <label htmlFor="name" className="autorize__label autorize__label_error">Что-то пошло не так...</label>
          <label htmlFor="email" className="autorize__label">E-mail</label>
          <input id="email" className="autorize__input" type="email" value={email} onChange={handleEmailChange} />
          <label htmlFor="email" className="autorize__label autorize__label_error">Что-то пошло не так...</label>
          <label htmlFor="password" className="autorize__label">Пароль</label>
          <input id="password" className="autorize__input" type="password" value={password} onChange={handlePasswordChange} />
          <label htmlFor="password" className="autorize__label autorize__label_error">Что-то пошло не так...</label>
          <button type="submit" className="autorize__submit button-hover">Зарегистрироваться</button>
        </form>
        <p className="autorize__paragraph">
          Уже зарегистрированы?
          <Link to="/signin" className="autorize__link link-hover">Войти</Link>
        </p>
      </div>
    </div>

  )
}
export default Register;
