import "./Button.css";

function Button(props){
  return (
    <button className={`btn ${props.selectors}`} style={props.style} disabled={props.disabled}>{props.name}</button>
  );
}

export default Button;