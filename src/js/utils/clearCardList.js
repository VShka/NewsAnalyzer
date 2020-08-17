// очищаем блок с карточками от прошлого запроса
export default function clearCardList(newsCardContainer) {
  if (newsCardContainer) {
    newsCardContainer.textContent = '';
  }
}
