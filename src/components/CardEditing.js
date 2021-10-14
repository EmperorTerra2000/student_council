import './CardEditing.css';
import cardEditing from '../images/card-editing.svg';

function CardEditing(){
  return(
    <div className='cardEditing'>
      <img className='cardEditing__element' alt="редактирование" src={cardEditing}></img>
    </div>
  );
}

export default CardEditing;