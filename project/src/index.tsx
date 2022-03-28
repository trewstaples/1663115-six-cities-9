import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import { checkAuthAction, fetchOfferAction } from './store/api-actions';
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

//Настроиить навигацию в зависимости от статуса авторизации
