import React from 'react';
import Card from './Card'

function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar">
            <img className="profile__photo" src={props.userAvatar} alt="Фото профиля" />
            <button className="profile__avatar-edit-button" onClick={props.onEditAvatar} type="button" title="Изменить аватар"></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{props.userName}</h1>
            <p className="profile__profession">{props.userDescription}</p>
            <button className="profile__edit-button" onClick={props.onEditProfile} type="button" aria-label="Редактировать профиль" title="Редактировать профиль"></button>
          </div>
        </div>
        <button className="profile__add-button" onClick={props.onAddPlace} type="button" aria-label="Добавить место" title="Добавить место"></button>
      </section>
      <section className="elements">
        {props.cards.map((card, i) => (
          <Card
            key={i}
            card={card}
            onCardClick={props.onCardClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;