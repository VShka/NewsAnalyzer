'use strict'

export default class CommitCard{
  constructor(props) {
    this.name = props.commit.author.name;
    this.email = props.commit.author.email;
    this.date = new Date(props.commit.author.date).toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    this.message = props.commit.message;
    this.ownerAvatar = props.author.avatar_url;
  }

  create() {

    // разметка карточки коммита
    const commitCard = document.createElement('div');
    const commit = document.createElement('div');
    const commitDate = document.createElement('p');
    const commitAuthor = document.createElement('div');
    const commitAvatar = document.createElement('img');
    const commitInfo = document.createElement('div');
    const commitName = document.createElement('h4');
    const commitEmail = document.createElement('p');
    const commitText = document.createElement('p');

    // накидываем классы и атрибуты
    commitCard.classList.add('swiper-slide', 'swiper');
    commit.classList.add('commit');
    commitDate.classList.add('commit__data');
    commitAuthor.classList.add('commit__author');
    commitAvatar.classList.add('commit__avatar');
    commitAvatar.setAttribute('src', `${this.ownerAvatar}`);
    commitAvatar.setAttribute('alt', 'Аватар пользователя');
    commitInfo.classList.add('commit__info');
    commitDate.classList.add('commit__data');
    commitName.classList.add('commit__name-author');
    commitEmail.classList.add('commit__email-author');
    commitText.classList.add('commit__text');

    // контент карточки
    commitDate.textContent = `${this.date}`;
    commitName.textContent = `${this.name}`;
    commitEmail.textContent = `${this.email}`;
    commitText.textContent = `${this.message}`;

    // собираем карточку
    commitCard.appendChild(commit);
    commit.appendChild(commitDate);
    commit.appendChild(commitAuthor);
    commit.appendChild(commitText);
    commitAuthor.appendChild(commitAvatar);
    commitAuthor.appendChild(commitInfo);
    commitInfo.appendChild(commitName);
    commitInfo.appendChild(commitEmail);

    return commitCard;
  }
}
