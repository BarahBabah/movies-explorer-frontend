import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer className="footer">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__container">
          <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
          <ul className="footer__list">
            <li className="footer__item">
              <a
                className="footer__link link-hover"
                target="blank"
                href="https://practicum.yandex.ru"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__item">
              <a
                className="footer__link link-hover"
                target="blank"
                href="https://github.com/BarahBabah"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
