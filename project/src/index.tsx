import App from './components/app/app';
import { checkAuthAction } from './store/user/api-actions';
import ErrorMessage from './components/error-message/error-message';
import { fetchOfferAction } from './store/offers/api-actions';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';

store.dispatch(fetchOfferAction());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

//Настроить оптимизацию

//Оптимизация /
//Оптимизировать перерисовку Header Navigation (при переключении сортировки)
//Убрать перерисовку всех компонентов, не относящихся к сортировке (tabs, Header)

//Оптимизация offer/id
//Оптимизировать рендеринг Rating при заполнениии text
//Оптимизировать рендеринг текста при заполнении рейтинга

//Оптимизация /favorites

//Оптимизация /login

//Разбить редьюсер
//Упростить обработчик сортировки в onOffersSortTypeChange
//Пройтись по критериям, отрефакторить код, вынести повторяющияйся код в функции
