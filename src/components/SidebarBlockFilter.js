import SidebarListFilter from "./SidebarListFilter";
import React from "react";

function SidebarBlockFilter({style, values, handleClick, listDocuments}){
  return (
    <ul className="filterTable__block" style={style}>
      {values.map((item, i) => (
        <SidebarListFilter key={i} value={item} handleClick={handleClick} listDocuments={listDocuments}/>
      ))}
    </ul>
  );
}

export default SidebarBlockFilter;