import { useState } from "react";
import "./Profile.css";
function Profile({ onLogout }) {
  function handleLogout() {
    onLogout();
  }
  const [name, setName] = useState("Виталий");
  const [email, setEmail] = useState("pochta@yandex.ru");

  function handleNameChange(value) {
    setName(value);
  }
  function HandleEmailChange(value) {
    setEmail(value);
  }

  return (
    <section className="profile">
      <h1 className="profile__heading">Привет, {name}!</h1>
      <form className="profile__form">
        <div className="profile__form-container">
          <label className="profile__label">
            Имя
            <input
              type="text"
              className="profile__input"
              value={name}
              placeholder={name}
              onChange={(e) => handleNameChange(e.target.value)}
            />
          </label>
          <label className="profile__label">
            E-mail
            <input
              type="email"
              className="profile__input"
              value={email}
              placeholder={email}
              onChange={(e) => HandleEmailChange(e.target.value)}
            />
          </label>
        </div>
        {/* <p className="profile__error">При обновлении профиля произошла ошибка.</p> */}
        <button
          type="submit"
          className="profile__button profile__button_submit button-hover"
        >
          Редактировать
        </button>
        <button
          type="button"
          className="profile__button profile__button_logout button-hover"
          onClick={handleLogout}
        >
          Выйти из аккаунта
        </button>
      </form>
    </section>
  );
}
export default Profile;
