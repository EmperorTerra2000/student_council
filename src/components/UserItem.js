import RatingProgress from "../images/rating-progress.svg";
import profileAvatar from "../images/person-4.jpg";

function UserItem(props){
  return (
    <li className="user-item">
      <p className="user-item__item user-item_type_place">1</p>
      {/* <figure className="user-item__item user-item_type_profile">
        <img className="user-item__avatar" alt="аватар пользователя" src={profileAvatar} />
        <figcaption className="user-item__name">Марьяна Соловьева</figcaption>
      </figure> */}
      {props.children}
      <p className="user-item__item user-item_type_group">МТ9-21</p>
      <p className="user-item__item user-item_type_score">286</p>
      <p className="user-item__item user-item_type_duty">Текст</p>
      <img className="user-item__item user-item_type_progress" alt="прогресс пользователя" src={RatingProgress}></img>
    </li>
  );
}

export default UserItem;