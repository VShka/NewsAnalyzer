'use strict'

import "./style.css"

import NEWS_API_PROPS from "../../js/constants/news-api-props";
import ERRORS from "../../js/constants/errors";
import NewsApi from "../../js/modules/NewsApi";
import DataStorage from "../../js/modules/DataStorage";
import SearchInput from "../../js/components/SearchInput";
import Validation from "../../js/components/Validation";

// переменные
const form = document.forms.search;
const formInput = document.querySelector('.form__input');
const resultBlock = document.querySelector('.result');
const preloader = resultBlock.querySelector('.preloader');


// инстансы классов
const newsApi = new NewsApi(NEWS_API_PROPS);

const searchInput = new SearchInput(

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
    preloader.classList.remove('preloader_hidden'); // показали прелоудер
    // преобразовываем полученные данные в строку
    const newsData = JSON.stringify(data.articles);
    const dataStorage = new DataStorage(newsData);
    // закидываем преобразованные данные в хранилище
    dataStorage.packData(keyWord);
  })
  .catch(err => console.error('Ошибка с данными:', err.message));
})
// достаем данные из хранилища, парсим и присваеваем
const news = JSON.parse(localStorage.getItem('news'));
