'use strict'

export default class DataStorage {
  constructor(arrayApi) {
    this.arrayApi = arrayApi;
  }

  packData() {
    localStorage.clear();
    localStorage.setItem('news', JSON.stringify(this.arrayApi));
  }

  unpackData() {
    return JSON.parse(localStorage.getItem('news'));
  }
}
