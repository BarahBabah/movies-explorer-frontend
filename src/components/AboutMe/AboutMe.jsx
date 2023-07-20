import { Link } from 'react-router-dom';
import Portfolio from '../Portfolio/Portfolio';
import './AboutMe.css';
import photo from './../../images/photo.png'
function AboutMe() {
  return (<>    <section className='about-me' id='student'>
      <h2 className="about-me__title">Студент</h2>
      <div className='about-me-container'>
        <div className='about-me__person-container'>
          <h3 className='about-me-subtitle'>Виталий</h3>
          <p className="about-me__personal">Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__paragraph'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и&#160;дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a className='github' target='blank' href="https://github.com/BarahBabah">Github</a>
        </div>
        <img className='about-me__photo' src={photo} alt="фото" />
      </div>
      <Portfolio/>
    </section>
    </>
  )
}

export default AboutMe;
