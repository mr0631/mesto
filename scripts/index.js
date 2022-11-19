const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__button-exit");
const popupOpenButtonElement = document.querySelector(".profile__edit-button");
const popupSaveButtonElement = document.querySelector(".popup__button-save");

const openPopup = function () {
    popupElement.classList.add("popup_is-opened");
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;

}
const closePopup = function () {
    popupElement.classList.remove("popup_is-opened");
}
popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);

let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__input-name");
let jobInput = document.querySelector(".popup__input-job");
let profileName = document.querySelector(".profile__title");
let profileJob = document.querySelector(".profile__subtitle");
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    
    closePopup();
}
formElement.addEventListener('submit', formSubmitHandler);





