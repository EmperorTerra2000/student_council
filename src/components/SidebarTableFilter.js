import SidebarBlockFilter from "./SidebarBlockFilter";

function SidebarTableFilter(props){
  return (
    <div className="filterTable">
      <p className="filterTable__subtitle">Фильтры</p>
      <div className="filterTable__filters">
        {props.children}
      </div>
    </div>
  );
}

export default SidebarTableFilter;