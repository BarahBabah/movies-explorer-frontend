import { useState, useContext, useEffect, memo } from "react";
import CurrentUserContext from "./../../context/CurrentUserContext";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import api from "../../utils/mainApi.js";
import "./Profile.css";
function Profile({ onLogout, setCurrentUser }) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    // setErrorText,
    errorText,
    handleServerError,
  } = useFormWithValidation();

  const currentUser = useContext(CurrentUserContext);

  const [edit, setEdit] = useState(false);

  const [isFormChanged, setIsFormChanged] = useState(false); // Добавляем состояние для отслеживания изменений

  const message = "Данные успешно обновлены";
  const [isMessage, setMessage] = useState("");

  const disableState =
    !isValid || !isFormChanged || currentUser.name === values.name;

  function handleLogout() {
    onLogout();
  }

  function handleEdit(e) {
    e.preventDefault();
    setEdit(true);
  }

  function handleChangeWithTracking(event) {
    handleChange(event); // Вызываем обработчик изменения поля
    setIsFormChanged(true); // Обновляем состояние изменений формы
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.updateUser(values.name, values.email).then((res) => {
        console.log(res);
        setCurrentUser(res);
        setEdit(false);
        setMessage(message);
        setTimeout(() => {
          setMessage("");
        }, 2000);
      });
    } catch (error) {
      console.log(error);
      handleServerError(error);
    }
  }

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  return (
    <main className="main">
      <section className="profile">
        <h1 className="profile__heading">Привет, {currentUser.name}!</h1>
        <form className="profile__form">
          <div className="profile__form-container">
            <label className="profile__label">
              Имя
              <input
                type="text"
                id="name"
                name="name"
                className="profile__input"
                value={values.name || ""}
                placeholder="Введите имя"
                minLength={2}
                maxLength={30}
                onChange={handleChangeWithTracking}
                disabled={!edit}
                pattern="^[a-zA-Zа-яЁёА-Я\s\-]+$"
                required
              />
            </label>
            <label
              htmlFor="name"
              className={`profile__label-error profile__label-line ${
                errors.name ? "has-error" : ""
              }`}
            >
              {errors.name || "Что-то пошло не так..."}
            </label>
            <label className="profile__label">
              E-mail
              <input
                id="email"
                name="email"
                type="email"
                className="profile__input"
                placeholder="Введите email"
                value={values.email || ""}
                onChange={handleChangeWithTracking}
                pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                required
                disabled={!edit}
              />
            </label>
            <label
              htmlFor="email"
              className={`profile__label-error ${
                errors.email ? "has-error" : ""
              }`}
            >
              {errors.email || "Что-то пошло не так..."}
            </label>
          </div>
          {!edit && (
            <>
              <label
                className={`profile__label-error profile__label-error-edit  ${
                  isMessage ? "profile__label-error_color_green" : ""
                }`}
              >
                {isMessage || "Что-то пошло не так..."}
              </label>
              <button
                type="button"
                className="profile__button profile__button_submit button-hover"
                onClick={handleEdit}
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
            </>
          )}
          {edit && (
            <>
              <label
                className={`profile__label-error profile__label-error-edit ${
                  errorText ? "has-error" : ""
                }`}
              >
                {errorText || "Что-то пошло не так..."}
              </label>
              <button
                type="submit"
                className={`profile__button profile__button_edit ${
                  !disableState ? "button-hover" : ""
                }`}
                onClick={handleSubmit}
                disabled={disableState}
              >
                Сохранить
              </button>
            </>
          )}
        </form>
      </section>
    </main>
  );
}
export default memo(Profile);
