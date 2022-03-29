import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import { fetchOfferAction } from './store/offers/api-actions';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';

store.dispatch(fetchOfferAction());
// store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

//Сделать задание по отправке комментария
//Пройтись по тз, настроить до конца авторизацию

//Разобраться с поведением isNavigationState в Header
//Исправить ошибку некорректной сорторвки по Popular
