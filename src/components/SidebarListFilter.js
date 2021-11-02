import React from "react";

function SidebarListFilter({value, handlerClick, filterName, listFilter}){
  React.useEffect(() => {
    console.log(listFilter['year']);
    // const classList = ['filterTable__list'];
    // if(listFilter[filterName] == value) classList.push('filterTable__list_active');

    // console.log(classList, listFilter['event'], value);
    // console.log(listFilter);
  }, [listFilter]);
  // const classList = ['filterTable__list'];
  // if(listFilter[filterName] == value) classList.push('filterTable__list_active');

  
  return (
    <li className={`filterTable__list `} onClick={(evt) => handlerClick(evt, filterName)}>{value}</li>
  );
}

export default SidebarListFilter;