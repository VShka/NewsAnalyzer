'use strict'

import NewsCard from "../components/NewsCard";
import showCardPerClick from "../constants/show-card-per-click";

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
    this._renderCardPerClick();
  }

  _renderCardPerClick() {
    const sliceArray = this.newsArray
                      .slice(this.arrayCount * showCardPerClick, (this.arrayCount + 1) * showCardPerClick);
    // перебираем и создаем карточку
    sliceArray.forEach(news => {
      const newsCard = new NewsCard(news);
      this._addCard(newsCard.create());
    });
  }

  _showMoreCard() {
    this.arrayCount++;
    this._renderCardPerClick();
    if (this.arrayCount >= this.newsArray.length / showCardPerClick - 1) {
      this.buttonShowMore.classList.add('result-positive__btn_hidden');
    }
  }

  _setEventListener() {
    this.buttonShowMore.addEventListener('click', () => {
    this._showMoreCard();
    console.log(this.arrayCount)
    })
  }

  clearCardList() {
    this.container.textContent = '';
  }
}
