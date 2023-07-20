import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <section className='not-found'>
      <h1 className='not-found__heading'>404</h1>
      <p className='not-found__paragraph'>Страница не найдена</p>
      <Link className='return'>Назад</Link>
    </section>
  )
}

export default NotFound;
