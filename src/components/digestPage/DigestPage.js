import "./DigestPage.css";
import { useParams } from "react-router";

import iconVk from '../../images/icon-vk.svg';
import iconInst from '../../images/icon-inst.svg';
import iconDigest from '../../images/icon-digest.svg';
import ReactHtmlParser from 'react-html-parser';
import Button from "../Button";
import React from "react";

function DigestPage({digestList}) {
  const { id } = useParams();
  console.log(digestList, id);

  const digest = digestList.find(item => item.id === Number(id));

  function lengthDeterminationTitle(){
    if(digest.title){
      return digest.title.length > 24 
      ? { fontSize: 42 }
      : {};
    }
  }

  return(
    <main className="main">
      <section className="digestInfo page__spacing page__spacing_type_digest">
        <div className="digestInfo__block-title">
          <img alt="иконка мероприятия" className="digestInfo__icon" src={iconDigest}></img>
          <h1 className="digestInfo__title" style={lengthDeterminationTitle()}>{digest.title}</h1>
        </div>
        <div className="digestInfo__block-content">
          <aside className="digestInfo__list-link">
            {/* <a className="digestInfo__link" href=""><img alt="Инстаграм" className="iconSocial iconSocial_type_large" src={iconInst}></img></a>
            <a className="digestInfo__link" href=""><img alt="Вконтакте" className="iconSocial iconSocial_type_large" src={iconVk}></img></a> */}
          </aside>
          <article className="digestInfo__block-description">
            <div className="digestInfo__description">
              <h2 className="digestInfo__date">{digest.date}</h2>
              {ReactHtmlParser(digest.description)}
            </div>
            {digest.link && (
              <a href={digest.link} target = "_blank"><Button name="Регистрация" selectors="btn_active btn_type_lead-regist"/></a>
            )}
          </article>
        </div>
      </section>
    </main>
  )
}

export default DigestPage;