import Portfolio from "../Portfolio/Portfolio";
import "./AboutMe.css";
import photo from "./../../images/photo.png";
function AboutMe() {
  return (
    <>
      {" "}
      <section className="about-me" id="student">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me-container">
          <div className="about-me__person-container">
            <h3 className="about-me-subtitle">Виталий</h3>
            <p className="about-me__personal">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__paragraph">
              Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет
              экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю
              слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить.
              С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;.
              После того, как прошёл курс по&nbsp;веб-разработке, начал
              заниматься фриланс-заказами и ушёл с&nbsp;постоянной работы.
            </p>
            <a
              className="github"
              target="blank"
              href="https://github.com/BarahBabah"
            >
              Github
            </a>
          </div>
          <img className="about-me__photo" src={photo} alt="фото" />
        </div>
        <Portfolio />
      </section>
    </>
  );
}

export default AboutMe;
