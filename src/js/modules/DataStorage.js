'use strict'

export default class DataStorage {
  constructor(apiData) {
    this.apiData = apiData;
  }

  packData(keyWord) {
    localStorage.clear(); // очищаем хранилище перед наполнением
    localStorage.setItem(keyWord, this.apiData);
  }

  unpackData(keyWord) {
    JSON.parse(localStorage.getItem(keyWord));
  }
}
