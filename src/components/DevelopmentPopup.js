import React from "react";
import devImage from "../images/devPopup.jpg";

function DevelopmentPopup({isOpen, onClose}){
  const popupRef = React.useRef();

  React.useEffect(() => {
    function closeOverlayPopup(evt){
      if(evt.target !== evt.currentTarget) return;
      onClose();
    }

    popupRef.current.addEventListener('mousedown', closeOverlayPopup);

    return () => {
      popupRef.current.removeEventListener('mousedown', closeOverlayPopup);
    };
  });

  return (
    <div ref={popupRef} className={`popup ${isOpen ? 'popup_active' : ''}`}>
      <div className="popup__container">
        <button className="popup__close" onClick={onClose}></button>
        <div className="popup__content">
          <div className='popup__block-image'>
            <img alt='Находится в разработке' src={devImage} className={`popup__image ${isOpen ? 'popup__image_opened' : ''}`}></img>
          </div>
          <div className='popup__block-info'>
            <h2 className='popup__title' style={{marginTop: 20}}>Находится в разработке !</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DevelopmentPopup;