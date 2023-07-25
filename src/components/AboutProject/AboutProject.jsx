import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./AboutProject.css";
function AboutProject(props) {
  const location = useLocation();

  return (
    <section className="about-project" id="project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__columns">
        <div className="about-project__column">
          <h3 className="about-project__columns-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__columns-paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__column">
          <h3 className="about-project__columns-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__columns-paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__bar">
        <div className="about-project__bar-back-end">1 неделя</div>
        <p className="about-project__bar-paragraph">Back-end</p>
        <div className="about-project__bar-back-front">4 недели</div>
        <p className="about-project__bar-paragraph">Front-end</p>
      </div>
    </section>
  );
}
export default AboutProject;
