'use strict'

export default class KeywordStatistics {
  constructor(element, dataStat = []) {
    this.element = element;
    this.dataStat = dataStat;

    this.analyticsTitle = this.element.querySelector('.analytics__title');
    this.analyticsTitleResult = this.element.querySelector('.analytics-title__result');
    this.analyticsTitleMention = this.element.querySelector('.analytics-title__mention');

    this.userAsk = this.dataStat.ask;
    this.totalResults = this.dataStat.totalResults;
    this._matchMentionsByDays();
  }

  showResults() {
    // заголовок с запросом пользователя
    this.analyticsTitle.textContent = `Вы спросили: «${this.userAsk}»`;

    // подзаголовки кол-во запросов
    const ResultValue = document.createElement('span');
    ResultValue.classList.add('analytics__text_strong');
    ResultValue.textContent = `${this.totalResults}`;
    this.analyticsTitleResult.appendChild(ResultValue);

    // упоминаний в заголовках
    this.titleMention = this._countingMentions();
    const MentionValue = ResultValue.cloneNode(true);
    MentionValue.textContent = `${this.titleMention.length}`;
    this.analyticsTitleMention.appendChild(MentionValue);
  }

  // метод для подсчёта упоминаний ключевого слова в заголовках
  _countingMentions() {
    const arrayTitles = [];
    // перебираем массив и пушим в пустой заголовки из массива
    this.dataStat.articles.find(item => {
      arrayTitles.push(item.title);
    })
    // фильтруем массив на совпадения по ключевому слову и создаем новый из найденных совпадений
    // для точного поиска приводим массив и ключевое слово к нижнему регистру
    const arrayMatches = arrayTitles.join(', ').toLowerCase().split(', ')
    .filter( item => {
      return item.includes(this.userAsk.toLowerCase());
    })
    return arrayMatches;
  }
}
