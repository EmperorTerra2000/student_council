import iconInst from "../images/icon-inst.svg";
import iconVk from "../images/icon-vk.svg";

import "./PersonTeam.css";

function PersonTeam({typeSelector, infoCard, avatar}){
  return (
    <li className={`person person_${typeSelector}`}>
      <img className={`person__img person__img_${typeSelector}`} src={avatar} />
      <div className={`person__info person__info_${typeSelector}`}>
        <p className={`person__name person__name_${typeSelector}`}>{infoCard.name}</p>
        <p className={`person__duty person__duty_${typeSelector}`}>{infoCard.duty}</p>
        <p className={`person__contact person__contact_${typeSelector}`}>{infoCard.contact}</p>
        <div className={`person__block person__block_${typeSelector}`}>
          <a href={infoCard.linkInst} style={{'textDecoration': 'none', 'display': 'block', 'marginRight': 26}}><img className="person__social-icon" src={iconInst} /></a>
          <a href={infoCard.linkVk} style={{'textDecoration': 'none', 'display': 'block'}}><img className="person__social-icon" src={iconVk} /></a>
        </div>
      </div>
    </li>
  );
}

export default PersonTeam;