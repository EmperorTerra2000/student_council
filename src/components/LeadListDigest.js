import React from "react";

function LeadListDigest({handleClick, data, activeDigest}){
  const isActive = data.title === activeDigest.title;

  return (
    <li className={`lead__nav-link lead__link ${isActive ? 'lead__link_active' : ''}`} onClick={handleClick}>{data.title.toUpperCase()}</li>
  );
}

export default LeadListDigest;