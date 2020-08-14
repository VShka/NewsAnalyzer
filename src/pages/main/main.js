'use strict'

import "./style.css"

import NEWS_API_PROPS from "../../js/constants/constants";
import NewsApi from "../../js/modules/NewsApi";

// переменные
const formInput = document.querySelector('.form__input');
// кнопка формы
const formButton = document.querySelector('.search__btn');


console.log(formButton);

const newsApi = new NewsApi(NEWS_API_PROPS);


// слушатели

// работа поисковика
formButton.addEventListener('click', (event) => {
  // сброс перезагрузки страницы
  event.preventDefault();
  // нашли значение поля, которое ввел пользователь
  const keyWord = formInput.value;
  // отправляем запрос к Api, передаем в метод аргумент (ключевое слово введеное в инпут)
  newsApi.getNews(keyWord)
  .then(data => {
    // преобразовываем полученные данные в строку
    const newsData = JSON.stringify(data.articles);
    // закидываем преобразованные данные в хранилище
    localStorage.setItem('news', newsData);
  })
  .catch(err => console.error('Ошибка с данными:', err.message));
})
// достаем данные из хранилища, парсим и присваеваем
const news = JSON.parse(localStorage.getItem('news'));
