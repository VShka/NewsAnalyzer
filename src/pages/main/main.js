'use strict'

import "./style.css"
//constants
import NEWS_API_PROPS from "../../js/constants/news-api-props";
import ERRORS from "../../js/constants/errors";
// class
import NewsApi from "../../js/modules/NewsApi";
import DataStorage from "../../js/modules/DataStorage";
import NewsCard from "../../js/components/NewsCard";
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
const preloader = resultBlock.querySelector('.preloader');
const newsCardContainer = document.querySelector('.cards-grid');


// инстансы классов
const newsApi = new NewsApi(NEWS_API_PROPS);

const searchInput = new SearchInput(

  );
const newsCardList = new NewsCardList(newsCardContainer);

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
    const dataStorage = new DataStorage(data.articles);

    // закидываем преобразованные данные в хранилище
    dataStorage.packData();

    // достаем данные
    let newsArray = dataStorage.unpackData();

    // очищаем cardList
    clearCardList(newsCardContainer);
    // показываем
    newsArray.forEach(item => {
      const newsCard = new NewsCard(item);
      newsCardList.addCard(newsCard.create());
    });

    // закрываем прелоудер
    preloader.classList.add('preloader_hidden');
    resultPositiveBlock.classList.remove('result-positive_hidden');

  })
  .catch(err => console.error('Ошибка с данными:', err.message));
})


// функции


