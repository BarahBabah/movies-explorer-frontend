import React from "react";
import "./Portfolio.css";
function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a
            className="portfolio__link link-hover"
            target="blank"
            href="https://github.com/BarahBabah/how-to-learn"
          >
            Статичный сайт
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link link-hover"
            target="blank"
            href="https://github.com/BarahBabah/russian-travel"
          >
            Адаптивный сайт
          </a>
          {/* репозиторий проекта удален, ссылки не будет */}
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link link-hover"
            target="blank"
            href="https://github.com/BarahBabah/react-mesto-api-full-gha"
          >
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
