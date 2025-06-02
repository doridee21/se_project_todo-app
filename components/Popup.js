//import Popup from "./Popup.js";

class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
    this._handleEscapeClose = this._handleEscapeClose.bind(this);
    this._handleOverlayClick = this._handleOverlayClick.bind(this);
  }

  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      //console.log("escape was pressed");
      // find the currently opened modal
      // and close it
      this.close();
    }
  }

  _handleOverlayClick(evt) {
    console.log("Overlay was pressed");
    // Check if the click target is the popup element itself (the overlay)
    if (evt.target === this._popupElement) {
      this.close();
    }
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keydown", (event) => {
      this._handleEscapeClose(event);
    });
  }

  close() {
    // TODO - remove the class from the popup element
    this._popupElement.classList.remove("popup_visible");
    // TODO - remove the escape listener
    /*this._popupElement.classList.remove("#add-todo-popup");*/
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
