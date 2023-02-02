export class Popup {
    constructor(selectorPopup) {
      this._popup = document.querySelector(selectorPopup),
      this._closeButton = this._popup.querySelector(".popup__button-exit")
      this._handleEscClose = this._handleEscClose.bind(this)
    };
  
  
    open() {
      this._popup.classList.add('popup_is-opened');
      document.addEventListener("keydown", this._handleEscClose);
    };
    close() {
      this._popup.classList.remove('popup_is-opened');
      document.removeEventListener("keydown", this._handleEscClose);
    };
  
    _handleEscClose(evt) {
  if (evt.key === 'Escape') {
   this.close();
  }
    };
    setEventListeners() {
  this._popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup')) {
     this.close()}});
  
  this._closeButton.addEventListener('click', () => {
        this.close();
  }
    );
  
  }
  }