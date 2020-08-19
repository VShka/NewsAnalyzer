'use strict'

import CommitCard from "./CommitCard";

export default class CommitCardList {
  constructor(container, api) {
    this.container = container;
    this.api = api;
  }

  _addCard(instanceCard) {
    this.container.appendChild(instanceCard);
  }

  renderCommit() {
    this.api
    .getCommits()
    .then(commits => {
      commits.splice(0, 20)
      .forEach(commit => {
        const commitCard = new CommitCard(commit);
        this._addCard(commitCard.create());
      });
    })
    .catch(err => console.error('Ошибка с данными:', err.message));
  }
}
