import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './SignForm.css';

function SignForm({ onSubmitForm, formData }) {
  const { values, handleChange, errors, isValid, resetForm } = formData;

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <form className="sign-form" onSubmit={onSubmitForm}>
      <Switch>
        <Route path="/signup">
          <label htmlFor="name" className="sign-form__label">
            Имя
          </label>
          <input
            id="name"
            type="text"
            className={`sign-form__field ${errors.name ? 'sign-form__field_error' : ''}`}
            required
            minLength="2"
            maxLength="30"
            placeholder="Введите имя"
            autoComplete="off"
            onChange={handleChange}
            name="name"
            value={values.name || ''}
          />
          <span className={`sign__error ${errors.name ? 'sign__error_active' : ''}`}>
            {errors.name}
          </span>
        </Route>
      </Switch>
      <label htmlFor="email" className="sign-form__label">
        Email
      </label>
      <input
        id="email"
        type="email"
        className={`sign-form__field ${errors.email ? 'sign-form__field_error' : ''}`}
        required
        placeholder="Введите Email"
        autoComplete="off"
        onChange={handleChange}
        name="email"
        value={values.email || ''}
      />
      <span className={`sign__error ${errors.email ? 'sign__error_active' : ''}`}>
        {errors.email}
      </span>
      <label htmlFor="password" className="sign-form__label">
        Пароль
      </label>
      <input
        id="password"
        type="password"
        className={`sign-form__field ${errors.password ? 'sign-form__field_error' : ''}`}
        required
        minLength="8"
        placeholder="Введите пароль"
        autoComplete="off"
        onChange={handleChange}
        name="password"
        value={values.password || ''}
      />
      <span className={`sign__error ${errors.password ? 'sign__error_active' : ''}`}>
        {errors.password}
      </span>
      <Switch>
        <button
          disabled={isValid ? false : true}
          type="submit"
          className={`button sign__button ${isValid ? '' : 'sign__button_disabled'}`}
        >
          <Route path="/signup">Зарегистрироваться</Route>
          <Route path="/signin">Войти</Route>
        </button>
      </Switch>
    </form>
  );
}

export default SignForm;
