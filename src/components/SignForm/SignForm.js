import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './SignForm.css';

function SignForm() {
  return (
    <form className="sign-form">
      <Switch>
        <Route path="/signup">
          <label htmlFor="name" className="sign-form__label">
            Имя
          </label>
          <input
            id="name"
            type="text"
            className="sign-form__field"
            required
            placeholder="Введите имя"
            autocomplete="off"
          />
          <span className="sign__error"></span>
        </Route>
      </Switch>
      <label htmlFor="email" className="sign-form__label">
        Email
      </label>
      <input
        id="email"
        type="email"
        className="sign-form__field"
        required
        placeholder="Введите Email"
        autocomplete="off"
      />
      <span className="sign__error"></span>
      <label htmlFor="password" className="sign-form__label">
        Пароль
      </label>
      <input
        id="password"
        type="password"
        className="sign-form__field sign-form__field_error"
        required
        placeholder="Введите пароль"
        autocomplete="off"
      />
      <span className="sign__error sign__error_active">
        Что-то пошло не так...
      </span>
      <Switch>
        <Route path="/signup">
          <button type="submit" className="button sign__button">
            Зарегистрироваться
          </button>
        </Route>
        <Route path="/signin">
          <button type="submit" className="button sign__button">
            Войти
          </button>
        </Route>
      </Switch>
    </form>
  );
}

export default SignForm;
