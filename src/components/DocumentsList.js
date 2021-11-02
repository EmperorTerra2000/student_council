import Document from "./Document";
import document_1 from '../images/document-1.svg'

function DocumentsList({listData}){
  return (
    <div className="documents__main">
      <ul className="documents__list">
        {listData.map((item, index) => (
          <Document key={index} infoCard={item} srcImage={document_1}/>
        ))}
      </ul>
    </div>
  )
}

export default DocumentsList;