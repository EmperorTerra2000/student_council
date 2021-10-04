import "./Organization.css";

function Organization(props){
  return (
    <figure className="organization">
      <img className="organization__img" src={props.src} alt={props.name} />
      <figcaption className="organization__name">{props.name}</figcaption>
    </figure>
  );
}

export default Organization;