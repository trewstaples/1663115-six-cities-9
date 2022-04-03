import App from './components/app/app';
import { checkAuthAction } from './store/user/api-actions';
import ErrorMessage from './components/error-message/error-message';
import { fetchOfferAction } from './store/offers/api-actions';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';

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

//Доработать Header
//Разбить редьюсер
//Упростить обработчик сортировки в onOffersSortTypeChange
//Настроить оптимизацию

//Оптимизация /
//Оптимизировать перерисовку Header Navigation
//Оптимизировать пеперисовку сортировки. Убрать перерисовку всех компонентов, не относящихся к сортировке

//Оптимизация offer/id
//Оптимизировать рендеринг Rating при заполнениии text
//Оптимизировать рендеринг текста при заполнении рейтинга

//Оптимизация /favorites

//Оптимизация /login

//Пройтись по критериям, отрефакторить код, вынести повторяющияйся код в функции
