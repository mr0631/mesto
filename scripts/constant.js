export const popupElement = document.querySelector(".popup");
export const popupProfile = document.querySelector(".popup_form_edit");
export const popupOpenProfileButton = document.querySelector(".profile__edit-button");
export const formEdit = popupProfile.querySelector(".popup__form");
export const nameInput = document.querySelector(".popup__input_form_name");
export const jobInput = document.querySelector(".popup__input_form_job");
export const profileName = document.querySelector(".profile__title");
export const profileJob = document.querySelector(".profile__subtitle");

export const popupOpenAddButton = document.querySelector(".profile__add-button");
export const popupAdd = document.querySelector(".popup_card_add");
export const formAdd = document.querySelector('[name="add_form"]');
export const popupAddTitle = popupAdd.querySelector(".popup__input_form_title");
export const popupAddLink = popupAdd.querySelector(".popup__input_form_link");
export const KEY_ESC = "Escape";
export const cards = document.querySelector(".cards");
export const popupCloseButtons = document.querySelectorAll(".popup__button-exit");
export const formElementAdd = document.querySelector('[name="add_form"]');

export const popupCard = document.querySelector(".popup-card");
export const popupCardImage = popupCard.querySelector(".popup-card__image");
export const popupCardText = popupCard.querySelector(".popup-card__text");


export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
export const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_invalid",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visibility",
};
