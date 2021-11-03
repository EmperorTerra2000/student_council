import Document from "./Document";
import document_1 from '../images/document-1.svg'
import React from "react";

function DocumentsList({listDocuments}){
  return (
    <div className="documents__main">
      <ul className="documents__list">
        {listDocuments.map((item, index) => (
          <Document key={index} infoCard={item} srcImage={document_1}/>
        ))}
      </ul>
    </div>
  )
}

export default DocumentsList;