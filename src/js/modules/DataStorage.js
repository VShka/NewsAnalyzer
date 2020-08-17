'use strict'

export default class DataStorage {
  constructor() {
  }

  packData(arrayApi) {
    localStorage.clear();
    localStorage.setItem('news', JSON.stringify(arrayApi));
  }

  unpackData() {
    return JSON.parse(localStorage.getItem('news'));
  }
}
