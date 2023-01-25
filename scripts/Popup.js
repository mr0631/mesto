export default class Popup {
    constructor({ popupSelector }) {
      this._popup = document.querySelector(popupSelector);
      this._handleEscClose = this._handleEscClose.bind(this);
    }
  
    open() {
      this._popup.classList.add('popup_is-opened');
      document.addEventListener('keydown', this._handleEscClose);
    }
    close() {
      this._popup.classList.remove('popup_is-opened');
      document.removeEventListener('keydown', this._handleEscClose);
    }
  
    _handleEscClose(event) {
      if (event.key === 'Escape') {
        this.close()
      }
    }
    setEventListeners() {
      this._popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup__close-icon') || evt.target.classList.contains('popup_opened')) {
          this.close();
        }
      });
    }
  
  }