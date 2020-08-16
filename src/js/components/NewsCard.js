'use strict'

export default class NewsCard {
  constructor(props) {
    this.props = props;

    this.newsUrl = props.url;
    this.urlImage = props.urlToImage;
    this.date = props.publishedAt;
    this.title = props.title;
    this.text = props.description;
    this.source = props.source.name;
  }

  create() {
    // разметка карточки
    const card = document.createElement('a');
    const cardBackground = document.createElement('div');
    const cardInfo = document.createElement('div');
    const cardDate = document.createElement('p');
    const cardTitle = document.createElement('h2');
    const cardText = document.createElement('p');
    const cardSource = document.createElement('p');

    // накидываем классы и атрибуты
    card.classList.add('card')
    card.setAttribute('target', '_blank');
    card.setAttribute('href', `${this.newsUrl}`);
    cardBackground.classList.add('card__bg');
    cardBackground.setAttribute('style', `background-image: url(${this.urlImage})`)
    cardInfo.classList.add('card__info');
    cardDate.classList.add('card__date');
    cardTitle.classList.add('card__title');
    cardTitle.classList.add('title');
    cardText.classList.add('card__text');
    cardSource.classList.add('card__source');

    // наполняем контентом
    cardDate.textContent = this.date;
    cardTitle.textContent = this.title;
    cardText.textContent = this.text;
    cardSource.textContent = this.source;

    // собираем карточку
    card.appendChild(cardBackground);
    card.appendChild(cardInfo);
    cardInfo.appendChild(cardDate);
    cardInfo.appendChild(cardTitle);
    cardInfo.appendChild(cardText);
    cardInfo.appendChild(cardSource);

    return card;
  }
}
