import "./Header.css";

import logo from "../images/logo.svg";
import headerPerson from "../images/header-person.svg";

function Header(){
  return (
    <>
      <header className="header page__spacing">
        <div className="header__section">
          <div className="header__left-block">
            <a href="/"><img className="logo" alt="логотип СМ3" src={logo} /></a>
          </div>
          <div className="header__center-block">
            <h1 className="header__title">CТУДЕНЧЕСКИЙ СОВЕТ</h1>
            <p className="header__subtitle">МГТУ ИМ. Н.Э. БАУМАНА</p>
          </div>
          <div className="header__right-block">
            <a href="/account"><img className="header__person" src={headerPerson} /></a>
          </div>
        </div>
        <div className="header__nav page__spacing">
          <ul className="header__nav-links">
            <li className="header__nav-link"><a className="header__link" href="/#about">О нас</a></li>
            <li className="header__nav-link"><a className="header__link" href="/#communities" >Клубы</a></li>
            <li className="header__nav-link"><a className="header__link" href="/#events" >Мероприятия</a></li>
            <li className="header__nav-link"><a className="header__link" href="/#departures" >Выезды</a></li>
            <li className="header__nav-link"><a className="header__link" href="/#stocks" >Плюшки</a></li>
            <li className="header__nav-link"><a className="header__link" href="/#team" >Команда</a></li>
            <li className="header__nav-link"><a className="header__link" href="/#documents" >Доки</a></li>
          </ul>
        </div>
      </header>
      <div className="header__bckground"></div>
    </>
  );
}

export default Header; 