import "./Document.css";

function Document(props){
  return (
    <li className="document">
      <img className="document__img" src={props.srcImg} />
      <p className="document__name">{props.name}</p>
    </li>
  );
}

export default Document;