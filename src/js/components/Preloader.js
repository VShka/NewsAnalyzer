'use strict'

export default class Preloader {
  constructor(preloader) {
    this.preloader = preloader;
  }


  showPreloader() {
    this.preloader.classList.remove('preloader_hidden');
  }

  hidePreloader() {
    this.preloader.classList.add('preloader_hidden');
  }
}
