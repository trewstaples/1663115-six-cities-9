import { AppRoute } from '../../../const';
import { AuthData } from '../../../types/auth';
import { ChangeEvent, FormEvent, useState } from 'react';
import CityLink from './city-link';
import { getIsUserAuthorized } from '../../../store/user-data/selector';
import { loginAction } from '../../../store/user-data/api-action';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';

export const LOGIN_NAV_STATE = true;

export const PasswordValidity = {
  PASSWORD_CHARACTER: /[a-zA-Z]+/,
  PASSWORD_NUMBER: /[0-9]+/,
};

function LoginPage(): JSX.Element {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const isUserAuthorized = useAppSelector(getIsUserAuthorized);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (isUserAuthorized) {
    return <Navigate to={AppRoute.Main} />;
  }

  const handleLoginChange = (evt: ChangeEvent<HTMLInputElement>) => setLogin(evt.target.value.trim());

  const handlePasswordChange = (evt: ChangeEvent<HTMLInputElement>) => setPassword(evt.target.value.trim());

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
    navigate(AppRoute.Main);
  };

  const isValid = PasswordValidity.PASSWORD_CHARACTER.test(password) && PasswordValidity.PASSWORD_NUMBER.test(password);

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (login !== null && password !== null) {
      onSubmit({
        email: login,
        password: password,
      });
    }
  };

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form onSubmit={handleFormSubmit} className="login__form form" action="#" method="post">
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input onChange={handleLoginChange} className="login__input form__input" type="email" name="email" placeholder="Email" required data-testid="email" />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input onChange={handlePasswordChange} className="login__input form__input" type="password" name="password" placeholder="Password" required data-testid="password" />
            </div>
            <button className="login__submit form__submit button" type="submit" disabled={!isValid}>
              Sign in
            </button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <CityLink />
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;
