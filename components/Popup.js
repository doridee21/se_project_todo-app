//import Popup from "./Popup.js";

class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
  }

  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      console.log("escape was pressed");
      // find the currently opened modal
      // and close it
      this.close();
    }
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keydown", this._handleEscapeClose);
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
    this._popupElement.addEventListener("mousedown", (evt) => {
      this.close();
    });
  }
}

export default Popup;
