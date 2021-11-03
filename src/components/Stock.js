import "./Stock.css";
import Button from "./Button";

function Stock({infoCard}){
  return (
    <li className="stock">
      <h3 className="stock__percent">{infoCard.percent}</h3>
      <h4 className="stock__organization">{infoCard.org}</h4>
      <p className="stock__description">{infoCard.description}</p>
      <a href={infoCard.link} className="link-btn"><Button name="Подробнее" selectors="btn_active"/></a>
    </li>
  );
}

export default Stock;