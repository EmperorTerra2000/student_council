import iconInst from "../images/icon-inst.svg";
import iconVk from "../images/icon-vk.svg";

import "./PersonTeam.css";

function PersonTeam({typeSelector, infoCard}){
  return (
    <li className={`person person_${typeSelector}`}>
      <img className={`person__img person__img_${typeSelector}`} src={infoCard.avatar} />
      <div className={`person__info person__info_${typeSelector}`}>
        <p className={`person__name person__name_${typeSelector}`}>{infoCard.name}</p>
        <p className={`person__duty person__duty_${typeSelector}`}>{infoCard.duty}</p>
      </div>
    </li>
  );
}

export default PersonTeam;