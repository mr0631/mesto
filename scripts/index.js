import { Card } from "./card.js";
import { FormValidator } from "./FormValidator.js";
import { config, initialCards } from "./constant.js";
import { popupProfile, popupOpenProfileButton, formEdit, nameInput, jobInput, profileName, profileJob, popupOpenAddButton, popupAdd, formAdd, popupAddTitle, popupAddLink, KEY_ESC, cards, popupCloseButtons, formElementAdd, popupCard, popupCardImage, popupCardText} from "./constant.js";

function openPopup(popup) {
  document.addEventListener("keydown", closePopupEsc); // открытие попапа
  popup.classList.add("popup_is-opened");
}
function closePopup(popup) {
 document.removeEventListener("keydown", closePopupEsc); // закртыие попапа 
  popup.classList.remove("popup_is-opened");
}                                               
const closePopupEsc = (evt) => {
  if (evt.key === KEY_ESC) {
    closePopup(document.querySelector(`.popup_is-opened`));  // закртыие попапа на esc
  }
};
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) {    // закртыие попапа при нажатии на оверлей
    closePopup(e.target);
  }
});

popupCloseButtons.forEach((closeButton) => {
  const popup = closeButton.closest(".popup");                    // закртыие попапа на крестик
  closeButton.addEventListener("click", () => closePopup(popup));
});


popupOpenProfileButton.addEventListener("click", function () {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;                         // // Редактирование профиля
 jobInput.value = profileJob.textContent;
});

formEdit.addEventListener("submit", function submitformHandler(evt) {
  evt.preventDefault();
   profileName.textContent = nameInput.value;                              // Редактирование профиля и сохранение изменений 
   profileJob.textContent = jobInput.value;
   closePopup(popupProfile);
 });
 
 initialCards.forEach(render); // Получаем карточки

function handleImageClick(data) {
  popupCardText.textContent = data.name;
  popupCardImage.src = data.link;
  popupCardImage.alt = data.name;
  openPopup(popupCard);
}
                                                                    // Добавления карточек из массива и открытие картинки 
function render(data) {
  const item = new Card(data, "#card-template", handleImageClick); 
  const newItem = item.createElement();
  cards.prepend(newItem);
}

popupOpenAddButton.addEventListener("click", () => {
  validationPopupAdd.resetFormErrors();                // Кнопка отрытия Добавления карточек
  openPopup(popupAdd);
});

formElementAdd.addEventListener("submit", function submitformHandler(evt) {
  evt.preventDefault();

  const newcard = {
    name: popupAddTitle.value,
    link: popupAddLink.value,                                                  // Создание новой Карточки
 };

  render(newcard);
  closePopup(popupAdd);
 formElementAdd.reset();
});
const validationPopupProfile = new FormValidator(config, popupProfile); // Валидация редактирования профиля
validationPopupProfile.enableValidation();

const validationPopupAdd = new FormValidator(config, formAdd); // Валидация добавления карточек
validationPopupAdd.enableValidation();
