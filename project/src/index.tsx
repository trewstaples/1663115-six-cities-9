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
//Пройтись по тз, настроить до конца авторизацию
//Разбить редьюсер
//Настроить оптимизацию

//Оптимизация /
//Оптимизировать перерисовку Sign In / mail-sigh in
//Оптимизировать пеперисовку сортировки - ???? Убрать перерисовку всех компонентов, не относящихся к сортировке

//Оптимизация offer/id
//Оптимизировать рендеринг Rating при заполнениии text
//Оптимизировать рендеринг текста при заполнении рейтинга
