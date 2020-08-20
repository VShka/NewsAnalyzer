'use strict'

import NewsCard from "../../js/components/NewsCard";

export default class NewsCardList {
  constructor(container, buttonShowMore) {
    this.container = container;

    this.arrayCount = 0;
    this.buttonShowMore = buttonShowMore;
    this._setEventListener();
  }

  // закидывает карточку в DOM
  _addCard(instanceCard) {
    this.container.appendChild(instanceCard);
  }

  renderCardDefault(newsArray) {
    this.newsArray = newsArray;
    if (newsArray.length > 3) {
      this.buttonShowMore.setAttribute('style', 'display: block');
    }
    this._renderCardPerClick();
  }

  _renderCardPerClick() {
    const sliceArray = this.newsArray.slice(this.arrayCount * 3, (this.arrayCount + 1) * 3);
    // перебираем и создаем карточку
    sliceArray.forEach(news => {
      const newsCard = new NewsCard(news);
      this._addCard(newsCard.create());
    });
  }

  _showMoreCard() {
    this.arrayCount++;
    this._renderCardPerClick();
  }

  _setEventListener() {
    this.buttonShowMore.addEventListener('click', () => {
      this._showMoreCard();
    })
  }

  clearCardList() {
    this.container.textContent = '';
  }
}
