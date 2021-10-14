import CardProgress from "./CardProgress";
import Button from "./Button";
import card_progress_1 from '../images/card-progress-1.svg';

function ClubCard(props){
  let cardProgress, styleCard, btnSelector;
  let btnDisabled;
  switch(props.data.stateNomer){
    case 1:
      btnSelector = 'btn_active btn_type_club';
      cardProgress = card_progress_1;
      break;

    case 2:
      btnSelector = 'btn_active btn_type_club';
      btnDisabled = false;
      cardProgress = 'Хочу к вам';
      break;

    case 3:
      btnSelector = 'btn_type_club';
      btnDisabled = true;
      styleCard = {opacity: 0.5};
      cardProgress = 'Хочу к вам';
      break;
  }

  return (
    <li className="club" style={styleCard}>
      <img className="club__image" src={props.data.clubImage} alt="изображение клуба"></img>
      <div className="club__block-info">
        <h3 className="club__title">{props.data.title}</h3>
        {props.data.stateNomer > 1
        ? <Button name='Хочу к вам' selectors={btnSelector} disabled={btnDisabled}/> 
        : <CardProgress srcElement={cardProgress} classElement="club" />}
      </div>
    </li>
  );
}

export default ClubCard;