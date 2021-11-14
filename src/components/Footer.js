import "./Footer.css";

import iconVk from '../images/icon-vk.svg';
import iconInst from '../images/icon-inst.svg';
import logoFooter from '../images/logo-footer.svg';

function Footer(){
  return (
    <footer className="footer">
      <div className="footer__bckground"></div>
      <div className="footer__content page__spacing">
        <div className="footer__block-logo">
          <a className="footer__link-logo" href="#"><img src={logoFooter} className="footer__logo" alt="Логотип студсовета" /></a>
          <a className="footer__link-logo" href="#"><p className="footer__text-logo">Студенческий совет</p></a>
        </div>
        <div className="footer__icons">
          <a className="footer__link-icon" href="https://vk.com/studsovet_bmstu" target = "_blank"><img src={iconVk} alt="Вконтакте" className="footer__icon" /></a>
          <a className="footer__link-icon" href="https://instagram.com/studsovet_bmstu?utm_medium=copy_link" target = "_blank"><img src={iconInst} alt="Инстаграм" className="footer__icon" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;