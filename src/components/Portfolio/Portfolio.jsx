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
            <p className="portfolio__link-paragraph">Статичный сайт</p>
            <span className="portfolio__link-arrow">↗</span>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link link-hover"
            target="blank"
            href="https://github.com/BarahBabah/russian-travel"
          >
            <p className="portfolio__link-paragraph">Адаптивный сайт</p>
            <span className="portfolio__link-arrow">↗</span>
          </a>
          {/* репозиторий проекта удален, ссылки не будет */}
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link link-hover"
            target="blank"
            href="https://github.com/BarahBabah/react-mesto-api-full-gha"
          >
            <p className="portfolio__link-paragraph">
              Одностраничное приложение
            </p>
            <span className="portfolio__link-arrow">↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
