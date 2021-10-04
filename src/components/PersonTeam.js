import iconInst from "../images/icon-inst.svg";
import iconVk from "../images/icon-vk.svg";

import "./PersonTeam.css";

function PersonTeam(props){
  return (
    <li className={`person person_${props.typeSelector}`}>
      <img className={`person__img person__img_${props.typeSelector}`} src={props.avatar} />
      <div className={`person__info person__info_${props.typeSelector}`}>
        <p className={`person__name person__name_${props.typeSelector}`}>{props.name}</p>
        <p className={`person__duty person__duty_${props.typeSelector}`}>{props.duty}</p>
        <p className={`person__contact person__contact_${props.typeSelector}`}>{props.contact}</p>
        <div className={`person__block person__block_${props.typeSelector}`}>
          <img className="person__social-icon" src={iconInst} />
          <img className="person__social-icon" src={iconVk} />
        </div>
      </div>
    </li>
  );
}

export default PersonTeam;