'use strict'

import "./style.css"
//constants
import NEWS_API_PROPS from "../../js/constants/news-api-props";
import ERRORS from "../../js/constants/errors";
// class
import DomElements from "../../js/components/DomElements";
import NewsApi from "../../js/modules/NewsApi";
import DataStorage from "../../js/modules/DataStorage";
import NewsCardList from "../../js/components/NewsCardList";
import SearchInput from "../../js/components/SearchInput";
import Validation from "../../js/components/Validation";
import Preloader from "../../js/components/Preloader";
// utils
import clearCardList from "../../js/utils/clearCardList";

// переменные
const form = document.forms.search;
const resultBlock = document.querySelector('.result');
const resultPositiveBlock = resultBlock.querySelector('.result-positive');
const resultNegativeBlock = resultBlock.querySelector('.result-negative');
const resultNegativeText = resultNegativeBlock.querySelector('.result-negative__text');
const preloaderBlock = resultBlock.querySelector('.preloader');
const newsCardContainer = document.querySelector('.cards-grid');


// инстансы классов
const newsApi = new NewsApi(NEWS_API_PROPS);
const dataStorage = new DataStorage();
const domElements = new DomElements();
const preloader = new Preloader(preloaderBlock);

const searchInput = new SearchInput(
  form,
  callBackForSearchInput
  );
const newsCardList = new NewsCardList(
  newsCardContainer
);

const validation = new Validation(
  ERRORS,
  form
)


checkStorageHasData(); // проверка хранилища на наличие новостей и отрисовка если true



// функции
function callBackForSearchInput(keyWord) {

    // достаем данные
  // отправляем запрос к Api, передаем в метод аргумент (ключевое слово введеное в инпут)
  newsApi.getNews(keyWord)
  .then(data => {
    domElements.showDomElement(resultBlock, 'result_hidden'); // показали блок с результатом
    preloader.showPreloader();


    // закидываем преобразованные данные в хранилище
    dataStorage.packData(data.articles);



    // очищаем cardList
    clearCardList(newsCardContainer);
    const newsArray = dataStorage.unpackData();

    // рисуем карточки
    newsCardList.renderCardFromStorage(newsArray);

    // закрываем прелоудер
    preloader.hidePreloader();
    resultPositiveBlock.classList.remove('result-positive_hidden');

  })
  .catch(err => {
    // resultPositiveBlock.classList.add('result-positive_hidden');
    // resultNegativeBlock.classList.remove('result-negative_hidden');
    // resultNegativeText.textContent = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
    console.error('Ошибка с данными:', err.message);
  });
}

function checkStorageHasData() {
  if (localStorage.key(0) == 'news') {
    const newsArray = dataStorage.unpackData();
    domElements.showDomElement(resultBlock, 'result_hidden');
    domElements.showDomElement(resultPositiveBlock, 'result-positive_hidden');
    newsCardList.renderCardFromStorage(newsArray);
  }
}
