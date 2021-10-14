import './RegistCard.css';
import venueLogo from '../images/venue-logo.svg';
import card_progress_1 from '../images/card-progress-1.svg';
import card_progress_2 from '../images/card-progress-2.svg';
import card_progress_3 from '../images/card-progress-3.svg';

import BtnEvents from './BtnEvents';
import UserCard from './UserCard';
import CardEditing from './CardEditing';
import CardProgress from './CardProgress';

function RegistCard(props){
  let cardProgress;
  let cardSelectorProgress;

  switch(props.data.stateNomer) {
    case 1:
      cardProgress = card_progress_1;
      cardSelectorProgress = '';
      break;
    case 2:
      cardProgress = card_progress_2;
      cardSelectorProgress = 'editing';
      break;
    case 3:
      cardProgress = card_progress_3;
      cardSelectorProgress = 'wait';
      break;
    case 4:
      cardProgress = "Регистрация";
      cardSelectorProgress = '';
      break;
    case 5:
      cardProgress = "Сообщить об участии"
      cardSelectorProgress = 'inform';
      break;

    default:
      cardProgress = card_progress_3;
      cardSelectorProgress = 'wait';
  }

  return (
    <li className="registCard">
      <img className="registCard__image" alt="мероприятие" src={props.data.imageEvent} />
      <div className="registCard__block-info">
        <p className="registCard__date">{props.data.date}</p>
        <p className="registCard__venue"><span className="registCard__venue-logo" style={{backgroundImage: `url(${venueLogo})`}}></span>{props.data.venue}</p>
      </div>
      {props.data.isEditing ? <CardEditing /> : ''}
      <div className="registCard__detailed">
        <h3 className="registCard__title">{props.data.title}</h3>
        <img className="registCard__logo" alt="логотип мероприятия" src={props.data.imageOrganization}/>
        <p className="registCard__duty">Главный организатор</p>
        <UserCard name={props.data.nameUserOrg} typeClass="events" srcImg={props.data.imageUserOrg}/>
        {props.data.stateNomer > 3 && props.data.stateNomer < 6 ? <BtnEvents name={cardProgress} classElement={cardSelectorProgress} /> : <CardProgress srcElement={cardProgress} classElement={cardSelectorProgress} />}        
      </div>
    </li>
  );
}

export default RegistCard;