import React, {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import api from '../utils/api';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isDeleteConfirmationPopupOpen, setDeleteConfirmationPopupOpen] = useState(false);

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState('');

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userInfo, cards]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setCards(cards);
      })
      .catch(err => {
        console.log(`Api error: ${err}`);
      });
  }, []);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleDeleteConfirmationClick() {
    setDeleteConfirmationPopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setDeleteConfirmationPopupOpen(false);
    setSelectedCard('');
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }
  

  return (
    <body className="root">
      <Header />
      <Main 
        onEditAvatar={handleEditAvatarClick} 
        onEditProfile={handleEditProfileClick} 
        onAddPlace={handleAddPlaceClick}
        userName={userName}
        userDescription={userDescription}
        userAvatar={userAvatar}
        cards={cards}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__fieldset">
          <div className="popup__field">
            <input className="popup__input popup__input_content_name" id="name-input" required name="input-name" type="text" value="" placeholder="Ваше имя" minLength="2" maxLength="40" autoComplete="off" />
            <span className="popup__input-error name-input-error"></span>
          </div>
          <div className="popup__field">
            <input className="popup__input popup__input_content_profession" id="profession-input" required name="input-profession" type="text" value="" placeholder="Ваша профессия" minLength="2" maxLength="200" autoComplete="off" />
            <span className="popup__input-error profession-input-error"></span>
          </div>
          <button className="popup__save-button" type="submit">Сохранить</button>
        </fieldset>
      </PopupWithForm>
      
      <PopupWithForm
        name="add-element"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__fieldset">
          <div className="popup__field">
            <input className="popup__input popup__input_content_place" id="place-input" required name="input-place" type="text" value="" placeholder="Название" minLength="2" maxLength="30" autoComplete="off" />
            <span className="popup__input-error place-input-error"></span>
          </div>
          <div className="popup__field">
            <input className="popup__input popup__input_content_img-url" id="img-url-input" required name="input-img-url" type="url" value="" placeholder="Ссылка на картинку" />
            <span className="popup__input-error img-url-input-error"></span>
          </div>
          <button className="popup__save-button" type="submit">Создать</button>
        </fieldset>
      </PopupWithForm>
      
      <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        name="delete-confirmation"
        title="Вы уверены?"
        isOpen={isDeleteConfirmationPopupOpen}
        onClose={closeAllPopups}
      >
        <button className="popup__save-button" type="submit">Да</button>
      </PopupWithForm>
      
      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__fieldset">
          <div className="popup__field">
            <input className="popup__input popup__input_content_avatar-url" id="avatar-url-input" required name="input-avatar-url" type="url" value="" placeholder="Ссылка на фото для аватара" />
            <span className="popup__input-error avatar-url-input-error"></span>
          </div>
          <button className="popup__save-button" type="submit">Сохранить</button>
        </fieldset>
      </PopupWithForm>
    </body>
  );
}

export default App;
