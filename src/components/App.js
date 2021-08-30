import React, {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isDeleteConfirmationPopupOpen, setIsDeleteConfirmationPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({name: '', link: ''});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleDeleteConfirmationClick() {
    setIsDeleteConfirmationPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeleteConfirmationPopupOpen(false);
    setSelectedCard({name: '', link: ''});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }
  

  return (
    <>
      <Header />
      <Main 
        onEditAvatar={handleEditAvatarClick} 
        onEditProfile={handleEditProfileClick} 
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__field">
          <input className="popup__input popup__input_content_name" id="name-input" required name="input-name" type="text" value="" placeholder="Ваше имя" minLength="2" maxLength="40" autoComplete="off" />
          <span className="popup__input-error name-input-error"></span>
        </div>
        <div className="popup__field">
          <input className="popup__input popup__input_content_profession" id="profession-input" required name="input-profession" type="text" value="" placeholder="Ваша профессия" minLength="2" maxLength="200" autoComplete="off" />
          <span className="popup__input-error profession-input-error"></span>
        </div>
      </PopupWithForm>
      
      <PopupWithForm
        name="add-element"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__field">
          <input className="popup__input popup__input_content_place" id="place-input" required name="input-place" type="text" value="" placeholder="Название" minLength="2" maxLength="30" autoComplete="off" />
          <span className="popup__input-error place-input-error"></span>
        </div>
        <div className="popup__field">
          <input className="popup__input popup__input_content_img-url" id="img-url-input" required name="input-img-url" type="url" value="" placeholder="Ссылка на картинку" />
          <span className="popup__input-error img-url-input-error"></span>
        </div>
      </PopupWithForm>
      
      <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        name="delete-confirmation"
        title="Вы уверены?"
        buttonText="Да"
        isOpen={isDeleteConfirmationPopupOpen}
        onClose={closeAllPopups}
      />
      
      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__field">
          <input className="popup__input popup__input_content_avatar-url" id="avatar-url-input" required name="input-avatar-url" type="url" value="" placeholder="Ссылка на фото для аватара" />
          <span className="popup__input-error avatar-url-input-error"></span>
        </div>
      </PopupWithForm>
    </>
  );
}

export default App;
