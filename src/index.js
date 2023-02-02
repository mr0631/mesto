import './pages/index.css';
import { Card } from "./scripts/components/card.js"
import { FormValidator } from "./scripts/components/FormValidator.js";
import { Section } from "./scripts/components/Section.js";
import { PopupWithForm } from "./scripts/components/PopupWithForm.js";
import { PopupWithImage } from "./scripts/components/PopupWithImage.js";
import { UserInfo } from "./scripts/components/UserInfo.js";
import {popupProfile, popupOpenProfileButton, nameInput, jobInput , popupOpenAddButton, popupAdd, formAdd, popupAddTitle, popupAddLink , initialCards} from "./scripts/utils/constants.js"

function renderCard(data) {
  const cardElement = new Card(data, '#card-template', handleImageClick);
  const newElement = cardElement.createElement();
  return newElement;
};

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
   cardList.addItem(renderCard(item));    
  }
},'.cards');


cardList.renderItems();


const popupWithImage = new PopupWithImage({ selectorPopup: ('.popup-card') });
popupWithImage.setEventListeners();
function handleImageClick(data) {
  popupWithImage.open(data.name, data.link);
};

//const newCardFormPopup = new PopupWithForm({selectorPopup: (".popup_card_add"), 
 // handleFormSubmit});
  
 //function handleFormSubmit() {
 // const data = {
   //  name: popupAddTitle.value,
  //    link: popupAddLink.value
  //  }
  //  cardList.addItem(renderCard(data))
  //  newCardFormPopup.close();
  //}
 const newCardFormPopup = new PopupWithForm({ selectorPopup: (".popup_card_add"), handleFormSubmit: (data) => {
  cardList.addItem(renderCard(data));
  newCardFormPopup.close();
}});



  newCardFormPopup.setEventListeners();
  popupOpenAddButton.addEventListener('click', () => {
    validationPopupAdd.resetValidation();
    newCardFormPopup.open();
  })
const userInfo = new UserInfo({ selectorName: (".profile__title"), selectorProf: (".profile__subtitle")});


  const userInfoFormPopup = new PopupWithForm({
    selectorPopup: (".popup_form_edit"),
    handleFormSubmit: (formData) => {
      userInfo.setUserInfo(formData.name, formData.prof);
  
      userInfoFormPopup.close();
    },
  });
  
  userInfoFormPopup.setEventListeners();

  popupOpenProfileButton.addEventListener("click", () => {
    userInfoFormPopup.open();
    const { name, prof } = userInfo.getUserInfo();
    nameInput.value = name;
    jobInput.value = prof;
  });

const validationPopupProfile = new FormValidator(popupProfile);
validationPopupProfile.enableValidation();

const validationPopupAdd = new FormValidator(formAdd);
validationPopupAdd.enableValidation();
