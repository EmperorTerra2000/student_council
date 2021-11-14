import './PageNotFound.css';
import page_404 from '../images/404.svg';

function PageNotFound(){
  return (
    <main className="main">
      <section className="notFound page__spacing">
        <div className="notFound__content">
          <img className="notFound__image" alt="404" src={page_404}/>
          <h1 className="notFound__title">ЧТО-ТО ПОШЛО НЕ ТАК:(</h1>
          <p className="notFound__subtitle">Мы уже работаем над этим</p>
        </div>
      </section>
    </main>
  );
}

export default PageNotFound;