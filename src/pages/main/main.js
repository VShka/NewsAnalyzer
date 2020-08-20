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

// переменные
const form = document.forms.search;
const resultBlock = document.querySelector('.result');
const resultPositiveBlock = resultBlock.querySelector('.result-positive');
const resultNegativeBlock = resultBlock.querySelector('.result-negative');
const resultNegativeText = resultNegativeBlock.querySelector('.result-negative__text');
const preloaderBlock = resultBlock.querySelector('.preloader');
const newsCardContainer = document.querySelector('.cards-grid');
const buttonShowMore = document.querySelector('.result-positive__btn');


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
  newsCardContainer,
  buttonShowMore
);

const validation = new Validation(
  ERRORS,
  form
)

checkStorageHasData(); // проверка хранилища на наличие новостей и отрисовка если true



// функции
function callBackForSearchInput(keyWord) {
  domElements.showDomElement(resultBlock, 'result_hidden'); // показываем блок результатов
   // скрываем негативный результат(в случае, когда пердыдущий запрос был негативным)
  domElements.hideDomElement(resultNegativeBlock, 'result-negative_hidden');
  // скрываем блок с новостями(в случае, когда предыдущий запрос был позитивным)
  domElements.hideDomElement(resultPositiveBlock, 'result-positive_hidden');
  preloader.showPreloader(); // показываем

  // отправляем запрос к Api, передаем в метод аргумент (ключевое слово введеное в инпут)
  newsApi.getNews(keyWord)
  .then(data => {

    // проверка на наличие новостей
    if(data.totalResults === 0) {
      domElements.showDomElement(resultBlock, 'result_hidden');
      domElements.hideDomElement(resultPositiveBlock, 'result-positive_hidden');
      domElements.showDomElement(resultNegativeBlock, 'result-negative_hidden');
    }

    if (data.totalResults >= 1) {
      dataStorage.packData(data.articles); // закидываем преобразованные данные в хранилище

      newsCardList.clearCardList(); // очищаем cardList

      const newsArray = dataStorage.unpackData(); // достаем данные

      newsCardList.renderCardDefault(newsArray); // рисуем карточки

      preloader.hidePreloader(); // прячем

      domElements.showDomElement(resultPositiveBlock, 'result-positive_hidden'); // показываем блок с карточками
    }


  })
  .catch(() => {
    domElements.hideDomElement(resultPositiveBlock ,'result-positive_hidden');
    domElements.showDomElement(resultNegativeBlock, 'result-negative_hidden');
    domElements.changeContent(resultNegativeText, 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
  })
  .finally(() => {
    preloader.hidePreloader(); // прячем
  })
}

function checkStorageHasData() {
  if (localStorage.key(0) == 'news') {
    const newsArray = dataStorage.unpackData();

    domElements.showDomElement(resultBlock, 'result_hidden');
    domElements.showDomElement(resultPositiveBlock, 'result-positive_hidden');
    newsCardList.renderCardDefault(newsArray);
  }
}
