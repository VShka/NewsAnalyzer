'use strict'

import "./style.css"
//constants
import NEWS_API_PROPS from "../../js/constants/news-api-props";
import ERRORS from "../../js/constants/errors";
// class
import NewsApi from "../../js/modules/NewsApi";
import DataStorage from "../../js/modules/DataStorage";
import NewsCardList from "../../js/components/NewsCardList";
import SearchInput from "../../js/components/SearchInput";
import Validation from "../../js/components/Validation";
// utils
import clearCardList from "../../js/utils/clearCardList";

// переменные
const form = document.forms.search;
const formInput = document.querySelector('.form__input');
const resultBlock = document.querySelector('.result');
const resultPositiveBlock = resultBlock.querySelector('.result-positive');
const resultNegativeBlock = resultBlock.querySelector('.result-negative');
const resultNegativeText = resultNegativeBlock.querySelector('.result-negative__text');
const preloader = resultBlock.querySelector('.preloader');
const newsCardContainer = document.querySelector('.cards-grid');


// инстансы классов
const newsApi = new NewsApi(NEWS_API_PROPS);
const dataStorage = new DataStorage();

const searchInput = new SearchInput(

  );
const newsCardList = new NewsCardList(
  newsCardContainer,
  dataStorage.unpackData.bind(dataStorage)
);

const validation = new Validation(
  ERRORS,
  form
)
// слушатели

// работа поисковика
form.addEventListener('submit', (event) => {
  // сброс перезагрузки страницы
  event.preventDefault();
  // нашли значение поля, которое ввел пользователь
  const keyWord = formInput.value;
  // отправляем запрос к Api, передаем в метод аргумент (ключевое слово введеное в инпут)
  newsApi.getNews(keyWord)
  .then(data => {
    resultBlock.classList.remove('result_hidden'); // показали блок с результатом
    preloader.classList.remove('preloader_hidden');


    // закидываем преобразованные данные в хранилище
    dataStorage.packData(data.articles);



    // очищаем cardList
    clearCardList(newsCardContainer);

    // рисуем карточки
    newsCardList.renderCardIntoStorage();

    // закрываем прелоудер
    resultPositiveBlock.classList.remove('result-positive_hidden');

  })
  .catch(err => {
    // resultPositiveBlock.classList.add('result-positive_hidden');
    // resultNegativeBlock.classList.remove('result-negative_hidden');
    // resultNegativeText.textContent = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
    console.error('Ошибка с данными:', err.message);
  });
})


// функции


