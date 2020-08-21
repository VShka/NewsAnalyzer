'use strict'

export default class Statistics {
  constructor(element, dataStat) {
    this.element = element;
    this.dataStat = dataStat;
  }

  _matchMentionsByDays() {
    const arrayTitles = [];
    this.dataStat.articles.map(item => {
      arrayTitles.push(item.publishedAt);
    })
    console.log(arrayTitles)
  }
}
