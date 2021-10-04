import "./Home.css";

import aboutImg from "../../images/about.jpg";
import SidebarTableFilter from "../SidebarTableFilter";
import SidebarBlockFilter from "../SidebarBlockFilter";
import Organization from "../Organization";
import Stock from "../Stock";
import Button from "../Button";
import PersonTeam from "../PersonTeam";
import Document from "../Document";

import organizLogo_2 from "../../images/organiz-logo-2.jpg";
import organizLogo_3 from "../../images/organiz-logo-3.jpg";
import organizLogo_4 from "../../images/organiz-logo-4.jpg";

import person_1 from "../../images/person-1.jpg";
import person_2 from "../../images/person-2.jpg";
import person_3 from "../../images/person-3.jpg";
import person_4 from "../../images/person-4.jpg";
import person_5 from "../../images/person-5.jpg";

import document_1 from "../../images/document-1.svg";

function Home(){
  return (
    <main className="main">
      <section className="lead">
        <div className="lead__bckground">
          <div className="lead__linear-gradient">
            <div className="lead__content page__spacing">
              <div className="lead__event">
                <p className="lead__event-data">12 сентября</p>
                <h2 className="lead__event-name">Квизон</h2>
                <p className="lead__event-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#"><Button name="Подробнее" selectors="btn_active btn_type_lead-detailed"/></a>
                <a href="#"><Button name="Регистрация" selectors="btn_active btn_type_lead-regist"/></a>
              </div>
              <ul className="lead__nav-links">
                <li className="lead__nav-link"><a className="lead__link" href="#">МИСС ОЧАРОВАНИЕ</a></li>
                <li className="lead__nav-link"><a className="lead__link" href="#">ТУССОВОЧКА</a></li>
                <li className="lead__nav-link"><a className="lead__link" href="#">Квизоn</a></li>
                <li className="lead__nav-link"><a className="lead__link" href="#">ВЕЛОЗАЕЗД</a></li>
                <li className="lead__nav-link"><a className="lead__link" href="#">HALLOWEEN</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="about__linear-gradient">
          <div className="about__content page__spacing">
            <article className="about__block">
              <h2 className="about__title">О нас</h2>
              <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra dignissim eget duis gravida. Etiam penatibus ipsum euismod ultrices iaculis ac, non adipiscing. Lacus pellentesque sapien vitae aliquam dolor sit eu. Sed neque et morbi rhoncus congue. Orci fames eu eget eget pharetra, in nullam. Cursus integer integer neque, consectetur euismod quam convallis tincidunt. Fermentum congue tortor pellentesque lobortis est hac fermentum. In maecenas eget magna condimentum leo eu vestibulum, semper. Nunc, commodo neque aliquam ut nisl, elementum. Ipsum nullam porttitor sed faucibus quis phasellus. Dignissim pharetra, elit ipsum neque commodo amet, pharetra.</p>
              <a href="#"><Button name="Положение" selectors="btn_active btn_type_about-detailed"/></a>
            </article>
            <img className="about__img" src={aboutImg} alt="логотип студсовета" />
          </div>
        </div>
      </section>
      <section className="communities" id="communities">
        <article className="organizations page__spacing">
          <h2 className="main__title">Клубы и сообщества</h2>
          <span className="main__line-title"></span>
          <div className="organizations__logo-list">
            <Organization src={organizLogo_2} name='CO "Приёмная комиссия"' />
            <Organization src={organizLogo_2} name='CO "Приёмная комиссия"' />
            <Organization src={organizLogo_2} name='CO "Приёмная комиссия"' />
            <Organization src={organizLogo_2} name='CO "Приёмная комиссия"' />
            <Organization src={organizLogo_2} name='CO "Приёмная комиссия"' />
            <Organization src={organizLogo_2} name='CO "Приёмная комиссия"' />
            <Organization src={organizLogo_2} name='CO "Приёмная комиссия"' />
            <Organization src={organizLogo_2} name='CO "Приёмная комиссия"' />
            <Organization src={organizLogo_2} name='CO "Приёмная комиссия"' />
            <Organization src={organizLogo_2} name='CO "Приёмная комиссия"' />
            <Organization src={organizLogo_2} name='CO "Приёмная комиссия"' />
            <Organization src={organizLogo_2} name='CO "Приёмная комиссия"' />
            <Organization src={organizLogo_2} name='CO "Приёмная комиссия"' />
            <Organization src={organizLogo_2} name='CO "Приёмная комиссия"' />
            <Organization src={organizLogo_2} name='CO "Приёмная комиссия"' />
            <div className="organizations__spoiler-list">
            </div>
          </div>
          <div className="main__btn-block">
            <Button name="Больше" selectors="btn_active btn_type_section" />
            <a href="#"><Button name="Хочу к вам" selectors="btn_active btn_type_section"/></a>
          </div>
        </article>
      </section>
      <section className="events" id="events">
        <article className="organizations page__spacing">
          <h2 className="main__title">Мероприятия</h2>
          <span className="main__line-title"></span>
          <div className="organizations__logo-list">
            <Organization src={organizLogo_3} name='Бауманские гончие псы' />
            <Organization src={organizLogo_3} name='Бауманские гончие псы' />
            <Organization src={organizLogo_3} name='Бауманские гончие псы' />
            <Organization src={organizLogo_3} name='Бауманские гончие псы' />
            <Organization src={organizLogo_3} name='Бауманские гончие псы' />
            <Organization src={organizLogo_3} name='Бауманские гончие псы' />
            <Organization src={organizLogo_3} name='Бауманские гончие псы' />
            <Organization src={organizLogo_3} name='Бауманские гончие псы' />
            <div className="organizations__spoiler-list">
            </div>
          </div>
          <div className="main__btn-block">
            <Button name="Больше" selectors="btn_active btn_type_section" />
            <a href="#"><Button name="Хочу к вам" selectors="btn_active btn_type_section"/></a>
          </div>
        </article>
      </section>
      <section className="departures" id="departures">
        <article className="organizations page__spacing">
          <h2 className="main__title">Выезды</h2>
          <span className="main__line-title"></span>
          <div className="organizations__logo-list">
            <Organization src={organizLogo_4} name='Орлы !' />
            <Organization src={organizLogo_4} name='Орлы !' />
            <Organization src={organizLogo_4} name='Орлы !' />
            <Organization src={organizLogo_4} name='Орлы !' />
            <Organization src={organizLogo_4} name='Орлы !' />
            <Organization src={organizLogo_4} name='Орлы !' />
            <Organization src={organizLogo_4} name='Орлы !' />
            <div className="organizations__spoiler-list"></div>
          </div>
          <div className="main__btn-block">
            <Button name="Больше" selectors="btn_active btn_type_section" />
            <a href="#"><Button name="Хочу к вам" selectors="btn_active btn_type_section"/></a>
          </div>
        </article>
      </section>
      <section className="stocks" id="stocks">
        <div className="stocks__bckground">
          <div className="stocks__content page__spacing">
            <h2 className="main__title main__title_type_stocks">Плюшки</h2>
            <span className="main__line-title main__line-title_type_stocks"></span>
            <p className="main__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra dignissim eget duis gravida. Etiam penatibus ipsum euismod ultrices iaculis ac, non adipiscing. </p>
            <ul className="stocks__list">
              <Stock percent="-28%" organization="Кант" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra dignissim "/>
              <Stock percent="-28%" organization="Кант" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra dignissim "/>
              <Stock percent="-28%" organization="Кант" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra dignissim "/>
              <Stock percent="-28%" organization="Кант" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra dignissim "/>
              <Stock percent="-28%" organization="Кант" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra dignissim "/>
              <Stock percent="-28%" organization="Кант" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra dignissim "/>
            </ul>
          </div>
        </div>
      </section>
      <section className="team" id="team">
        <div className="team__content page__spacing">
          <h2 className="main__title">Команда</h2>
          <span className="main__line-title"></span>
          <PersonTeam typeSelector="type_director"  name="Ирина Трапезникова" duty="Председатель" contact="8 (925) 184 42 08" avatar={person_1} />
          <ul className="team__list-person">
            <PersonTeam name="Leslie Alexander" duty="Nursing Assistant" contact="(207) 555-0119" avatar={person_2}/>
            <PersonTeam name="Leslie Alexander" duty="Nursing Assistant" contact="(207) 555-0119" avatar={person_3}/>
            <PersonTeam name="Leslie Alexander" duty="Nursing Assistant" contact="(207) 555-0119" avatar={person_4}/>
            <PersonTeam name="Leslie Alexander" duty="Nursing Assistant" contact="(207) 555-0119" avatar={person_5}/>
            <PersonTeam name="Leslie Alexander" duty="Nursing Assistant" contact="(207) 555-0119" avatar={person_2}/>
            <PersonTeam name="Leslie Alexander" duty="Nursing Assistant" contact="(207) 555-0119" avatar={person_3}/>
            <PersonTeam name="Leslie Alexander" duty="Nursing Assistant" contact="(207) 555-0119" avatar={person_4}/>
            <PersonTeam name="Leslie Alexander" duty="Nursing Assistant" contact="(207) 555-0119" avatar={person_5}/>
          </ul>
          <div className="main__btn-block main__btn-block_type_team">
            <Button name="Больше" selectors="btn_active btn_type_section" />
            <a href="#"><Button name="Хочу к вам" selectors="btn_active btn_type_section"/></a>
          </div>
        </div>
      </section>
      <section className="documents" id="documents">
        <div className="documents__bckground"></div>
        <div className="documents__title page__spacing">
          <h2 className="main__title main__title_type_documents">Полезные документы</h2>
          <span className="main__line-title main__line-title_type_documents"></span>
        </div>
        <div className="documents__content page__spacing">
          <SidebarTableFilter>
            <SidebarBlockFilter values={['2020', '2019', '2018' ]}/>
            <SidebarBlockFilter values={['Выезды', 'Мероприятия', 'Стипендии']} style={{marginTop: 53}}/>
          </SidebarTableFilter>
          <div className="documents__main">
            <ul className="documents__list">
              <Document name="План капкан на сессию" srcImg={document_1}/>
              <Document name="План капкан на сессию" srcImg={document_1}/>
              <Document name="План капкан на сессию" srcImg={document_1}/>
              <Document name="План капкан на сессию" srcImg={document_1}/>
              <Document name="План капкан на сессию" srcImg={document_1}/>
              <Document name="План капкан на сессию" srcImg={document_1}/>
              <Document name="План капкан на сессию" srcImg={document_1}/>
              <Document name="План капкан на сессию" srcImg={document_1}/>
              <Document name="План капкан на сессию" srcImg={document_1}/>
              <Document name="План капкан на сессию" srcImg={document_1}/>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;