class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
    this._handleEscapeClose = this._handleEscapeClose.bind(this);
    this._handleOverlayClick = this._handleOverlayClick.bind(this);
  }

  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _handleOverlayClick(evt) {
    if (evt.target === this._popupElement) {
      this.close();
    }
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keydown", this._handleEscapeClose);
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    document.removeEventListener("keydown", this._handleEscapeClose);
  }

  setEventListeners() {
    this._popupCloseBtn.addEventListener("click", () => {
      this.close();
    });

    this._popupElement.addEventListener("mousedown", this._handleOverlayClick);

    // combined listeners

    //this._popupElement.addEventListener("mousedown", (evt) => {
    //  if (
    //    this._popupElement /*"popup__close"*/ ||
    //    this._popupCloseBtn /*"popup"*/
    //  ) {
    //    this.close();
    //  }
    //});
  }
}

export default Popup;
