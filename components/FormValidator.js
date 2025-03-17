class FormValidator {
  constructor(settings, formEl) {
    this._inputSelector = settings.inputSelector; //<---"this._settings = settings;" this is another way of writing this line of code 
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._formEl = formEl; // <--- line 3 comment ex. is done here
  }
}

enableValidation() {
}

export default FormValidator;
