import SidebarListFilter from "./SidebarListFilter";
import React from "react";

function SidebarBlockFilter({style, values, filterName, handlerClick, listFilter}){
  //при начальном монтировании компонента выбираем первые фильтры из списка
  React.useEffect(() => {
    handlerClick(filterName, values[0]);
  }, []);

  function handlerClickList(evt, filterName){
    //если строка полностью является числом, то переносим его в число 
    const value = !isNaN(evt.target.innerText) ? Number(evt.target.innerText) : evt.target.innerText;  

    handlerClick(filterName, value);
  }

  // console.log(`Внутри компонента ${filterName}`, listFilter)

  return (
    <ul className="filterTable__block" style={style}>
      {values.map((item, i) => ( 
        <div key={i}><SidebarListFilter value={item} handlerClick={handlerClickList} filterName={filterName} listFilter={listFilter}/></div>
    ))}
    </ul>
  );
}

export default SidebarBlockFilter;