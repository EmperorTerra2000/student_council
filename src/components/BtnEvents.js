import "./BtnEvents.css";

function BtnEvents(props){
  return (
    <button className={`btnEvents btnEvents_type_${props.classElement}`}>{props.name}</button>
  );
}

export default BtnEvents;