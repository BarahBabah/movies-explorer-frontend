import React from "react";
import "./SearchForm.css";
function SearchForm(props) {
  return (
    <section className="search-form">
      <form className="search-form__container">
        <div className="search-form__label">
          <input
            className="search-form__input"
            placeholder="Фильм"
            type="text"
          />
          <button className="search-form__submit button-hover">Найти</button>
        </div>
        <div className="search-form__options">
          <label className="search-form__option-checkbox-label">
            <input type="checkbox" className="search-form__option-checkbox" />
            <span className="search-form__checkbox-custom"></span>
          </label>
          <span className="search-form__option-text">Короткометражки</span>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
