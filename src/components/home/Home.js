import "./Home.css";
import "../account/Account.css";
import React from "react";

import LeadEventPopup from "../LeadEventPopup";
import LeadListDigest from "../LeadListDigest";
import aboutImg from "../../images/about.jpg";
import SidebarTableFilter from "../SidebarTableFilter";
import SidebarBlockFilter from "../SidebarBlockFilter";
import Organization from "../Organization";
import Stock from "../Stock";
import Button from "../Button";
import PersonTeam from "../PersonTeam";
import DocumentsList from "../DocumentsList";

import {communities, stocks, persons, digest, events, departures} from "./constants.js";

function Home(){
  const [isLeadEventPopupOpen, setIsLeadEventPopupOpen] = React.useState(false);
  const [listDocuments, setListDocuments] = React.useState([]);
  const [activeDigest, setActiveDigest] = React.useState(digest[0]);
  
  React.useEffect(() => {
    fetch('./sort_documents.php', {
      method: 'POST',
    })
      .then(res => res.json())
      .then(data => {
        // console.log('ответ от сервера', data)
        setListDocuments(data)
      });

    // console.log('Внутри useEffect', listDocuments);
  }, []);

  // console.log('снаружи useEffect', listDocuments);

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

  //собитые при нажатии на фильтр
  function handleFilterListClick(evt){
    const respon = evt.target.innerText == "Все" ? '' : evt.target.innerText;
    const obj = respon == '' ? {} : {tag: respon}
    console.log(evt.target.innerText);
    fetch('./sort_documents.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(obj),
    })
      .then(res => res.json())
      .then(data => {
        // console.log('ответ от сервера', data)
        setListDocuments(data)
      });
  }

  function handleChoiceDigest(event){
    console.log(event.target.innerText);
    const digestNow = digest.find((item) => {
      return item.title.toUpperCase() == event.target.innerText; 
    });

    // console.log(digestNow);

    setActiveDigest(digestNow);
  }

  return (
    <>
      <LeadEventPopup isOpen={isLeadEventPopupOpen} onClose={handleCloseAllPopup} digestInfo={activeDigest}/>
      <main className="main">
        <section className="lead">
          <div className="lead__bckground" style={{'backgroundImage': `url(${activeDigest.image})`}}>
            <div className="lead__linear-gradient">
              <div className="lead__content page__spacing">
                <div className="lead__event">
                  <p className="lead__event-data">{activeDigest.date}</p>
                  <h2 className="lead__event-name">{activeDigest.title}</h2>
                  <p className="lead__event-description">{activeDigest.description}</p>
                  <div onClick={handleLeadEventPopupClick}><Button name="Подробнее" selectors="btn_active btn_type_lead-detailed"/></div>
                  <a href={activeDigest.link}><Button name="Регистрация" selectors="btn_active btn_type_lead-regist"/></a>
                </div>
                <ul className="lead__nav-links">
                  {digest.map((item, index) => (
                    <LeadListDigest key={index} handleClick={handleChoiceDigest} data={item} activeDigest={activeDigest}/>
                  ))}
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
                return <Organization key={index} infoCard={item} />
              })}
              <div className="organizations__spoiler-list">
              </div>
            </div>
            <div className="main__btn-block">
              {/* <Button name="Больше" selectors="btn_active btn_type_section" /> */}
              <a href="#"><Button name="Хочу к вам" selectors="btn_active btn_type_section"/></a>
            </div>
          </article>
        </section>
        <section className="events" id="events">
          <article className="organizations page__spacing">
            <h2 className="main__title">Мероприятия</h2>
            <span className="main__line-title"></span>
            <div className="organizations__logo-list">
              {events.map((item, index) => {
                return <Organization key={index} infoCard={item} />
              })}
              <div className="organizations__spoiler-list">
              </div>
            </div>
            <div className="main__btn-block">
              {/* <Button name="Больше" selectors="btn_active btn_type_section" /> */}
              <a href="#"><Button name="Хочу к вам" selectors="btn_active btn_type_section"/></a>
            </div>
          </article>
        </section>
        <section className="departures" id="departures">
          <article className="organizations page__spacing">
            <h2 className="main__title">Выезды</h2>
            <span className="main__line-title"></span>
            <div className="organizations__logo-list">
              {departures.map((item, index) => {
                return <Organization key={index} infoCard={item} />
              })}
              <div className="organizations__spoiler-list"></div>
            </div>
            <div className="main__btn-block">
              {/* <Button name="Больше" selectors="btn_active btn_type_section" /> */}
              <a href="#"><Button name="Хочу к вам" selectors="btn_active btn_type_section"/></a>
            </div>
          </article>
        </section>
        {/* ПЛЮШКИ, раскомментируйте, если они нужны */}
        {/* <section className="stocks" id="stocks">
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
        </section> */}
        <section className="team" id="team" style={{marginTop: 25}}>
          <div className="team__content page__spacing">
            <h2 className="main__title">Команда</h2>
            <span className="main__line-title"></span>
            <PersonTeam typeSelector="type_director" infoCard={persons[0]}/>
            <ul className="team__list-person">
              {persons.map((item, index) => {
                if(index == 0) return;
                return <PersonTeam key={index - 1} infoCard={item}/>
              })}
            </ul>
            <div className="main__btn-block main__btn-block_type_team">
              {/* <Button name="Больше" selectors="btn_active btn_type_section" /> */}
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
              <SidebarBlockFilter handleClick={handleFilterListClick} listDocuments={listDocuments} values={['Все','Выезды', 'Мероприятия', 'Стипендии']} style={{marginTop: 0}}/>
            </SidebarTableFilter>
            <DocumentsList listDocuments={listDocuments}/>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;