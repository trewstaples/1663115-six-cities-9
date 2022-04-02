import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import { fetchOfferAction } from './store/offers/api-actions';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import { checkAuthAction } from './store/user/api-actions';

store.dispatch(fetchOfferAction());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

//Доделать favorites
//Разбить редьюсер
//Настроить оптимизацию
//Пройтись по критериям, отрефакторить код

//Оптимизация /
//Оптимизировать перерисовку Header Navigation
//Оптимизировать пеперисовку сортировки. Убрать перерисовку всех компонентов, не относящихся к сортировке

//Оптимизация offer/id
//Оптимизировать рендеринг Rating при заполнениии text
//Оптимизировать рендеринг текста при заполнении рейтинга

//Оптимизация /favorites
//Оптимизировать рендеринг Rating при заполнениии text
//Оптимизировать рендеринг текста при заполнении рейтинга

//Оптимизация /login
//Оптимизировать рендеринг Rating при заполнениии text
//Оптимизировать рендеринг текста при заполнении рейтинга
