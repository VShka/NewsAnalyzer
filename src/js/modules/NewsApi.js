'use strict'

export default class NewsApi {
  constructor(props) {
    this.url = props.url;
    this.apiKey = props.apiKey;
    this.endpoint = props.endpoint;
    this.pageSize = props.pageSize;
  }

  getNews(keyWord) {
    return fetch(`${this.url}` + `${this.endpoint}` + `q=${keyWord}&` + `from=2020-08-11s&to=2020-08-12&` + `${this.pageSize}` + `${this.apiKey}`)
    .then(this._checkRequest);
  }


  // проверка состояния запроса
  _checkRequest(res) {
    if (res.ok) return res.json();

    return Promise.reject(new Error(res.status));
  }
}
