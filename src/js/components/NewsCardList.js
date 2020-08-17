'use strict'

import NewsCard from "../../js/components/NewsCard";

export default class NewsCardList {
  constructor(container, storageMethod) {
    this.container = container;
    this.storageMethod = storageMethod;
  }

  // закидывает карточку в DOM
  _addCard(instanceCard) {
    this.container.appendChild(instanceCard);
  }

  renderCardIntoStorage() {
    // достаем данные
    const newsArray = this.storageMethod();
    // перебираем и создаем карточку
    newsArray.forEach(news => {
      const newsCard = new NewsCard(news);
      this._addCard(newsCard.create());
    });
  }
}
