import "./CardProgress.css";

function CardProgress(props){
  return (
  <div className={`cardProgress cardProgress_type_${props.classElement}`}>
    <img className={`cardProgress__element cardProgress__element_type_${props.classElement}`} alt="прогресс" src={props.srcElement}></img>
  </div>);
}

export default CardProgress;