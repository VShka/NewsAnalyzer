export default class Validation {
  constructor(ERRORS, form) {
    this.errors = ERRORS;
    this.form = form;

    this.formButton = form.querySelector('.search__btn');

    this._setEventListeners();
  }

  _checkInputValidity(event) {
    const element = event.target;
    const errorElement = event.target.nextElementSibling;

    if (!element.checkValidity()) {
      if (element.validity.valueMissing) {
        errorElement.textContent = this.errors.valueMissing;
        errorElement.classList.add('error-message_active');

        return false;
      }

      if (element.validity.tooShort) {
        errorElement.textContent = this.errors.tooShort;
        errorElement.classList.add('error-message_active');

        return false;
      }
    }

    errorElement.classList.remove('error-message_active');

    return true;
  }

  _setButtonState() {
    if (this.form.checkValidity()) {
      this.formButton.classList.remove('search__btn_disabled');
      this.formButton.removeAttribute('disabled');
    } else {
      this.formButton.classList.add('search__btn_disabled');
      this.formButton.setAttribute('disabled', true);
    }
  }

  _setEventListeners() {
    this.form.addEventListener('input', (event) => {
      this._checkInputValidity(event);
      this._setButtonState();
    })
  }
}
