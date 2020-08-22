'use strict'

export default class NewsApi {
  constructor(props) {
    this.url = props.url;
    this.apiKey = props.apiKey;
    this.endpoint = props.endpoint;
    this.pageSize = props.pageSize;
    this.today = props.today;
    this.weekAgo = props.weekAgo;
  }

  getNews(keyWord) {
    return fetch(`${this.url}` + `${this.endpoint}` + `q=${keyWord}&` + `from=${this.weekAgo}&to=${this.today}&` + `${this.pageSize}` + `${this.apiKey}`)
    .then(this._checkRequest)
    .catch(this._catchErr);
  }


  // проверка состояния запроса
  _checkRequest(res) {
    if (res.ok) return res.json();

    return Promise.reject(new Error(res.status));
  }
  _catchErr(err) {
    return Promise.reject(new Error(err.message));
  }
}
