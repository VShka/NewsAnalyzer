'use strict'

export default class SearchInput {
  constructor(form, callBackForSearchInput) {
    this.form = form;
    this.callBackForSearchInput = callBackForSearchInput;

    this._setEventListener();
  }

  _setEventListener() {
    this.form.addEventListener('submit', event => {
      // сброс перезагрузки страницы
      event.preventDefault();
      // нашли значение поля, которое ввел пользователь
      const keyWord = this.form.elements.search.value;

      this.callBackForSearchInput(keyWord);
    })
  }


}
