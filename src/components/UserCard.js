import "./UserCard.css";

function UserCard(props){
  return (
    <figure className={`userCard ${props.selector}`}>
      <img className={`userCard__image userCard__image_type_${props.typeClass}`} alt={props.name} src={props.srcImg}/>
      <figcaption className={`userCard__name userCard__name_type_${props.typeClass}`} style={props.style}>{props.name}</figcaption>
    </figure>
  );
}

export default UserCard;