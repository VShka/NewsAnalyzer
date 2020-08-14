'use strict'

import "./style.css"

import NEWS_API_PROPS from "../../js/constants/news-api-props";
import ERRORS from "../../js/constants/errors";
import NewsApi from "../../js/modules/NewsApi";
import SearchInput from "../../js/components/SearchInput";
import Validation from "../../js/components/Validation";

// переменные
const form = document.forms.search;
const formInput = document.querySelector('.form__input');


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
    // преобразовываем полученные данные в строку
    const newsData = JSON.stringify(data.articles);
    // очищаем localStorage
    localStorage.clear();
    // закидываем преобразованные данные в хранилище
    localStorage.setItem('news', newsData);
  })
  .catch(err => console.error('Ошибка с данными:', err.message));
})
// достаем данные из хранилища, парсим и присваеваем
const news = JSON.parse(localStorage.getItem('news'));
