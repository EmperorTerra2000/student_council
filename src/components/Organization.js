import "./Organization.css";

function Organization({srcImage, infoCard}){
  return (
    <figure className="organization">
      <a href = {infoCard.link} className="organization__link">
        <img className="organization__img" src={srcImage} alt={infoCard.name} />
        <figcaption className="organization__name">{infoCard.name}</figcaption>
      </a>
    </figure>
  );
}

export default Organization;