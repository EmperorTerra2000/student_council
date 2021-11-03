function SidebarListFilter({value, handleClick, listDocuments}){
  const isFilter = listDocuments.length == 0 ? false : listDocuments.every(item => {
    return item.tag == value;
  });
  const classList = isFilter ? 'filterTable__list filterTable__list_active' : 'filterTable__list';
  
  // if(value == "Все") classList = 'filterTable__list filterTable__list_active';

  return (
    <li className={classList} onClick={handleClick}>{value}</li>
  );
}

export default SidebarListFilter;