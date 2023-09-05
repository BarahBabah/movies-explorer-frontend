import React, { useState } from "react";
import "./SearchForm.css";
// import useFormWithValidation from "../../hooks/useFormWithValidation";
function SearchForm({
  searchMovies,
  setShortMovies,
  shortMovies,
  setMoviesInput,
  moviesInput,
  setIsEmptyInput,
}) {
  function handleChecked() {
    setShortMovies(!shortMovies);
  }

  function handleChangeInput(evt) {
    setMoviesInput(evt.target.value);
    console.log(evt.target.value || "");
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchMovies();
    setIsEmptyInput(moviesInput === "");
    console.log(shortMovies);
  }

  return (
    <section className="search-form">
      <form className="search-form__container" onSubmit={handleSubmit}>
        <div className="search-form__label">
          <input
            className="search-form__input"
            placeholder="Фильм"
            name="search"
            id="search"
            type="search"
            value={moviesInput}
            onChange={handleChangeInput}
          />
          <button className="search-form__submit button-hover">Найти</button>
        </div>
        <div className="search-form__options">
          <label className="search-form__option-checkbox-label">
            <input
              type="checkbox"
              value={shortMovies}
              checked={shortMovies}
              onChange={handleChecked}
              className="search-form__option-checkbox"
            />
            <span className="search-form__checkbox-custom"></span>
          </label>
          <span className="search-form__option-text">Короткометражки</span>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
