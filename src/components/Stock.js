import "./Stock.css";
import Button from "./Button";

function Stock(props){
  return (
    <li className="stock">
      <h3 className="stock__percent">{props.percent}</h3>
      <h4 className="stock__organization">{props.organization}</h4>
      <p className="stock__description">{props.description}</p>
      <a href="#" className="link-btn"><Button name="Подробнее" selectors="btn_active"/></a>
    </li>
  );
}

export default Stock;