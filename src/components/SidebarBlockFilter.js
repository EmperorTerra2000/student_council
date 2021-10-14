import SidebarListFilter from "./SidebarListFilter";

function SidebarBlockFilter(props){
  return (
    <ul className="filterTable__block" style={props.style}>
      {props.values.map((item, i) => (
        <div key={i}>
          <SidebarListFilter value={item}/>
        </div>
      ))}
    </ul>
  );
}

export default SidebarBlockFilter;