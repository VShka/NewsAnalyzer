'use strict'

export default class Statistics {
  constructor(element, dataStat) {
    this.element = element;
    this.dataStat = dataStat;

    this.chartHeader = this.element.querySelector('.chart__header');
    this.chartRow = this.element.querySelectorAll('.chart__row');
    this.chartLabel = this.element.querySelectorAll('.chart__label');
    this.chartValue = this.element.querySelectorAll('.chart__value');

    this.userAsk = this.dataStat.ask;
    this.totalResults = this.dataStat.totalResults;
    this.newsArticles = this.dataStat.articles;
    this.newsTitle =  this.newsArticles.map(item => item.title);
    this.newsDescription = this.newsArticles.map(item => item.description);
  }

  renderChart() {
    this._matchMentionsByDays();
    // отрисовываем дни недели
    this.dayOfWeek = Object.keys(this.objectMatches).sort();
    Array.from(this.chartLabel).forEach( (label, index) => {
      label.textContent = this.dayOfWeek[index];
    })

    // отрисовываем шкалу
    this.percentRequests = Object.values(this.objectMatches);
    console.log(this.percentRequests)
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

  _countingMentions() {
    const arrayForFindMatches = this.newsTitle.concat(this.newsDescription);
    // фильтруем массив на совпадения по ключевому слову и создаем новый из найденных совпадений
    // для точного поиска приводим массив и ключевое слово к нижнему регистру
    const arrayMatches = arrayForFindMatches.join(', ').toLowerCase().split(', ')
    .filter( item => {
      return item.includes(this.userAsk.toLowerCase());
    })
    return arrayMatches;
  }
}
