'use strict'

export default class DataStorage {
  constructor(apiData) {
    this.apiData = apiData;
  }

  packData() {
    localStorage.clear(); // очищаем хранилище перед наполнением
    localStorage.setItem('news', this.apiData);
  }

  unpackData() {
    return JSON.parse(localStorage.getItem('news'));
  }
}
