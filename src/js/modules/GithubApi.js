'use strict'

export default class GithubApi {
  constructor(props) {
    this.url = props.url;
    this.owner = props.owner;
    this.repo = props.repo;
  }

  getCommits() {
    return fetch(`${this.url}` + 'repos/' + `${this.owner}` + `/${this.repo}/` + 'commits')
    .then(this._checkRequest)
    .catch(this._catchErr);
  }

  // проверка состояния запроса
  _checkRequest(res) {
    if (res.ok) return res.json();

    return Promise.reject(new Error(res.status));
  }
  // отлов ошибки
  _catchErr(err) {
    return Promise.reject(new Error(err.message));
  }
}
