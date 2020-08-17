'use strict'

import NewsCard from "../../js/components/NewsCard";

export default class NewsCardList {
  constructor(container) {
    this.container = container;
  }

  // закидывает карточку в DOM
  _addCard(instanceCard) {
    this.container.appendChild(instanceCard);
  }

  renderCardFromStorage(newsArray) {
    // перебираем и создаем карточку
    newsArray.forEach(news => {
      const newsCard = new NewsCard(news);
      this._addCard(newsCard.create());
    });
  }
}
