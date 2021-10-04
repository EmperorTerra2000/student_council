import "./Button.css";

function Button(props){
  return (
    <button className={`btn ${props.selectors}`}>{props.name}</button>
  );
}

export default Button;