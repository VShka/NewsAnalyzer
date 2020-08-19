const day = 7;
const hour = 24;
const second = 3600;
const millisecond = 1000;
const weekInMillisecond = day * hour * second * millisecond;

const NEWS_API_PROPS = {
  url: 'https://newsapi.org/v2/',
  apiKey: '&apiKey=4e9d7268f6ff410a996b1f56f3eef56d',
  endpoint: 'everything?',
  pageSize: 'pageSize=100',
  today: new Date().toISOString() , // сегодня
  weekAgo: new Date(new Date() - weekInMillisecond).toISOString() // неделю назад
};

export default NEWS_API_PROPS;
