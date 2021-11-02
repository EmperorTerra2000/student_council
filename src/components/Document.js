import "./Document.css";

function Document({infoCard, srcImage}){
  return (
    <li className="document">
      <a href={infoCard.link} className="document__link">
        <img className="document__img" src={srcImage} />
        <p className="document__name">{infoCard.name}</p>
      </a>
    </li>
  );
}

export default Document;