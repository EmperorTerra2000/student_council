import "./Home.css";
import React from "react";

import LeadEventPopup from "../LeadEventPopup";
import aboutImg from "../../images/about.jpg";
import SidebarTableFilter from "../SidebarTableFilter";
import SidebarBlockFilter from "../SidebarBlockFilter";
import Organization from "../Organization";
import Stock from "../Stock";
import Button from "../Button";
import PersonTeam from "../PersonTeam";
import DocumentsList from "../DocumentsList";

import { communitiesImage, personsImage } from "./imageList";//массив картинок

import {documents, communities, stocks, persons, digest} from "./constants.js";

function Home(){
  const [listDocuments, setListDocuments] = React.useState();
  const [listFilter, setListFilter] = React.useState({year: 0, event: ''});
  const [isLeadEventPopupOpen, setIsLeadEventPopupOpen] = React.useState(false);

  fetch('./sort_documents.php', {
    method: 'POST',
  })
    .then((res) => console.log(res));
  //фильтр документов в таблице
  function filterDocuments(arrayDoc, {year, event}){
    const doc = arrayDoc.filter((item) => {
      if(item.year === year && item.tag === event){
        return true;
      } else return false;
    });
    console.log(doc);

    return doc;
  }

  React.useEffect(() => {
    filterDocuments(documents, listFilter);
  }, []);

  //обработчик при нажатии на список фильтров
  function handleClicListFilter(filterName, value){
    let arr = listFilter;
    arr[filterName] = value;
    
    setListFilter(arr);//переопределяем стейт

    console.log(`Внутри функции ${filterName}`, listFilter);
  }

  //событие открытия попапа при нажатии на соответствующую кнопку
  function handleLeadEventPopupClick(){
    setIsLeadEventPopupOpen(true);
  }

  //закрываем попап
  function handleCloseAllPopup(){
    setIsLeadEventPopupOpen(false);
  }

  //поиск по объекту картинок
  function findCommunitiesImage({name}, objImage){
    return objImage[name];
  }

  return (
    <>
      <LeadEventPopup isOpen={isLeadEventPopupOpen} onClose={handleCloseAllPopup} digestInfo={digest}/>
      <main className="main">
        <section className="lead">
          <div className="lead__bckground">
            <div className="lead__linear-gradient">
              <div className="lead__content page__spacing">
                <div className="lead__event">
                  <p className="lead__event-data">{digest.date}</p>
                  <h2 className="lead__event-name">{digest.title}</h2>
                  <p className="lead__event-description">{digest.description}</p>
                  <div onClick={handleLeadEventPopupClick}><Button name="Подробнее" selectors="btn_active btn_type_lead-detailed"/></div>
                  <a href={digest.link}><Button name="Регистрация" selectors="btn_active btn_type_lead-regist"/></a>
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
              {communities.map((item, index) => {
                const orgLogo = findCommunitiesImage(item, communitiesImage);

                return <Organization srcImage={orgLogo} key={index} infoCard={item} />
              })}
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
              {/* <Organization src={organizLogo_3} name='Бауманские гончие псы' /> */}
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
              {/* <Organization src={organizLogo_4} name='Орлы !' /> */}
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
                {stocks.map((item, index) => (
                  <Stock key={index} infoCard={item} />
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="team" id="team">
          <div className="team__content page__spacing">
            <h2 className="main__title">Команда</h2>
            <span className="main__line-title"></span>
            <PersonTeam typeSelector="type_director" infoCard={persons[0]} avatar={personsImage['Ирина Трапезникова']} />
            <ul className="team__list-person">
              {persons.map((item, index) => {
                if(index == 0) return;
                const personAvatar = findCommunitiesImage(item, personsImage);

                return <PersonTeam key={index - 1} infoCard={item} avatar={personAvatar}/>
              })}
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
              {/* <SidebarBlockFilter values={[2020, 2019, 2018]} filterName="year" setListFilter={setListFilter} listFilter={listFilter}/>
              <SidebarBlockFilter values={['Выезды', 'Мероприятия', 'Стипендии']} style={{marginTop: 53}} filterName="event" setListFilter={setListFilter} listFilter={listFilter}/> */}
              <SidebarBlockFilter values={[2020, 2019, 2018]} filterName="year" handlerClick={handleClicListFilter} listFilter={listFilter}/>
              <SidebarBlockFilter values={['Выезды', 'Мероприятия', 'Стипендии']} style={{marginTop: 53}} filterName="event" handlerClick={handleClicListFilter} listFilter={listFilter}/>
            </SidebarTableFilter>
            <DocumentsList listData={documents} />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;