'use strict'

import today from "../constants/today";

export default class Statistics {
  constructor(element, dataStat) {
    this.element = element;
    this.dataStat = dataStat;

    this.chartHeader = this.element.querySelector('.chart__header');
    this.chartRow = this.element.querySelectorAll('.chart__row');
    this.chartLabel = this.element.querySelectorAll('.chart__label');
    this.chartValue = this.element.querySelectorAll('.chart__value');

    this.totalResults = this.dataStat.totalResults;
    this.newsArticles = this.dataStat.articles;
  }

  renderChart() {
    // отрисовываем актуальный месяц
    const chartHeaderDate = document.createElement('span');
    chartHeaderDate.textContent = `(${today})`;
    this.chartHeader.appendChild(chartHeaderDate);

    // отрисовываем дни недели
    this._matchMentionsByDays();
    this.dayOfWeek = Object.keys(this.objectMatches).sort();
    Array.from(this.chartLabel).forEach( (label, index) => {
      label.textContent = this.dayOfWeek[index];
    })

    // отрисовываем шкалу
    this.percentRequests = Object.values(this.objectMatches);
    Array.from(this.chartValue).forEach( (value, index) => {
      value.textContent = this.percentRequests[index].length;
      value.setAttribute('style', `width: ${(this.percentRequests[index].length / this.totalResults * 100).toFixed(2)}%`);
    })
  }

  _matchMentionsByDays() {
    // преобразуем массив статей в объект вида ключ(дата): значение(массив новостей)
    this.objectMatches = this.newsArticles.reduce( (object, news) => {
      // ключом будет дата
      const dateKey = new Date(news.publishedAt.split('T')[0]).toLocaleString('ru', {
        weekday: 'short',
        day: 'numeric'
      }).split(', ').reverse().join(', ');
      // если такой даты в объекте еще нет, создаем ключ и пустой массив
      if (!object[dateKey]) {
        object[dateKey] = [];
      }
      // пушим новость по совпадению ключа(даты)
      object[dateKey].push(news);

      return object;
    }, {});
  }
}
