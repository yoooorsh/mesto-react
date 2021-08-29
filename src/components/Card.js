import React from 'react';

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }  

  return (
    <div className="elements__element" key={props.card._id}>
      <img className="elements__photo" onClick={handleClick} src={props.card.link} alt={props.card.name} />
      <div className="elements__description">
        <h2 className="elements__name">{props.card.name}</h2>
        <div className="elements__like">
          <button className="elements__like-button" type="button" aria-label="Мне нравится" title="Мне нравится"></button>
          <div className="elements__like-counter">0</div>
        </div>
        <button className="elements__delete-button" type="button" aria-label="Удалить место" title="Удалить место"></button>
      </div>
    </div>
  );
}

export default Card;