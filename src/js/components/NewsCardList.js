'use strict'

export default class NewsCardList {
  constructor(container) {
    this.container = container;
  }

  // закидывает карточку в DOM
  addCard(instanceCard) {
    this.container.appendChild(instanceCard);
  }
}
