# NewsAnalyzer
Сервис поиска новостей по ключевому слову. Показывает аналитику и составляет диаграмму новостей за последние 7 дней.
## Актуальная версия 2.0.0

## Посмотреть, пожмакать => https://vshka.github.io/NewsAnalyzer/

## Для чего:
Дипломный проект для демонстрации hard-skills полученных упорством, кровью и потом /(-^-)\

# Текущий стек:
- HTML
- CSS
- JS
- API
- БЭМ
- Webpack

# Функционал: 
- все ссылки кликабельны и рабочие
- для хранения данных, передачи между страницами используется localStorage
- при закрытии страницы/браузера данные остаются в памяти. При открытии выдает новости и аналитику с прошлого поиска.
## Главная страница:
- вывод списка новостей по ключевому слову с помощью api(список имеет ограничение в 100 новостей, согласно правилам бесплатного пользования API)
- при успешном поиске, показывается всего 3 карточки. Нажимая на кнопку показать ещё, выводится ещё 3 карточки и т. д. Когда новости кончаются кнопка пропадает
- при отсутствии новостей или ошибке выводится соответствующая информация
- форма ввода валидируется кастомными сообщениями
- нажав по карточке можно перейти на сайт с новостью в новой вкладке
- при успешном поиске показывается ссылка, которая ведет на страницу аналитики
## Аналитика:
- показан заголовок с ключевым словом, по которому пользователь ищет новость
- количество новостей за неделю
- количество упоминаний ключевого слова в заголовках новостей
- строится график, который показывает кол-во новостей за каждый день недели
## О проекте:
- в слайдер выводятся карточки 20 последних коммитов репозитория сайта посредством GitHub API.

# Установка
Проверьте наличие установленного node.js и npm

Копируем репозиторий на компьютер
`https://github.com/VShka/NewsAnalyzer.git`

Устанавливаем зависимости
`npm install`

## Работа 

Для локальной разработки с поднятием сервера
`npm start`

Собрать в продакшен 
`npm run build`

Задеплоить на GitHub pages
`npm run deploy`
