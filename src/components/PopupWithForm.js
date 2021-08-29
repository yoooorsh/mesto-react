import React from 'react';

function PopupWithForm(props) {
  const popupVisibleClass = props.isOpen ? 'popup_visible' : '';

  return (
  <div className={`popup popup_content_${props.name} ${popupVisibleClass}`}>
      <div className="popup__union">
        <button className="popup__close-button" onClick={props.onClose} type="button"></button>
        <h2 className="popup__header">{props.title}</h2>
        <form className="popup__container" name={`${props.name}`} noValidate>
            {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;