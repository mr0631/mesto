export class Card {
    constructor(data, templateSelector, handleOpenImage) {
      this._data = data;
      this._templateSelector = templateSelector, 
      this._handleOpenImage = handleOpenImage    
    }
    _getTemplate() {
      const createCard = document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(true);
      return createCard;
    }
  
    _handleLikeButtonClick() {
      this._itemLikeButton.classList.toggle("card__item-like-button_active");
    }
  
    _setEventListeners() {
      this._itemElement.querySelector(".card__delete-button").addEventListener("click", () => {
        this._itemElement.remove();
      });
      this._itemLikeButton.addEventListener("click", () => {
        this._handleLikeButtonClick();
      });
      this._itemImage.addEventListener("click", () => {
        this._handleOpenImage(this._data);
      });
    }
  
    createElement() {
      this._itemElement = this._getTemplate();
      this._itemLikeButton = this._itemElement.querySelector(".card__item-like-button");
      this._itemImage = this._itemElement.querySelector(".card__image");
      this._itemElement.querySelector(".card__item-title").textContent = this._data.name;
      this._itemImage.alt = this._data.name;
      this._itemImage.src = this._data.link;
      this._setEventListeners();
      return this._itemElement;
    }
  }