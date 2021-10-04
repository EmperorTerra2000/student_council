import SidebarListFilter from "./SidebarListFilter";

function SidebarBlockFilter(props){
  return (
    <ul className="filterTable__block" style={props.style}>
      {props.values.map((item) => (
        <SidebarListFilter value={item}/>
      ))}
    </ul>
  );
}

export default SidebarBlockFilter;