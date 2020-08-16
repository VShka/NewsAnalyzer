'use strict'
import NewsCard from "./NewsCard";
import NewsApi from "../modules/NewsApi";

export default class NewsCardList {
  constructor(container) {
    this.container = container;
  }

  // закидывает карточку в DOM
  addCard(instanceCard) {
    this.container.appendChild(instanceCard);
  }


}
