import React, { useState, useEffect, useRef, useContext } from 'react';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './Profile.css';

function Profile({ onLogout, onUserUpdate, editProfileSuccess }) {
  const currentUser = useContext(CurrentUserContext);

  const inputEl = useRef();

  const [isDisabled, setIsDisabled] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const { values, setValues, handleChange, errors, isValid, setIsValid } = useFormWithValidation();

  useEffect(() => {
    setValues(currentUser);
    setIsValid(true);
  }, [setValues, setIsValid]);

  const handleEditProfileClick = function (e) {
    setIsDisabled(!isDisabled);
  };

  const handleSaveProfileClick = function (e) {
    onUserUpdate(values.name, values.email);
    setIsDisabled(!isDisabled);
    setShowMessage(true);
  };

  useEffect(() => {
    inputEl.current.focus();
  }, [isDisabled]);

  let formButton;

  if (isDisabled) {
    formButton = (
      <button type="button" className="profile__edit" onClick={handleEditProfileClick}>
        Редактировать
      </button>
    );
  } else {
    formButton = (
      <button
        type="button"
        className={`profile__edit ${
          (values.name === currentUser.name && values.email === currentUser.email) || !isValid
            ? 'profile__edit_disabled'
            : ''
        }`}
        onClick={handleSaveProfileClick}
        disabled={
          (values.name === currentUser.name && values.email === currentUser.email) || !isValid
        }
      >
        Сохранить
      </button>
    );
  }

  return (
    <section className="profile">
      <p className="profile__title">Привет, {currentUser.name}!</p>
      <form className="profile__form">
        <div className="profile__data">
          <div className="profile__name">
            <label>Имя</label>
            <input
              ref={inputEl}
              name="name"
              className={`profile__field ${errors.name ? 'profile__field_error' : ''}`}
              type="text"
              required
              minLength="2"
              maxLength="30"
              value={values.name || ''}
              disabled={isDisabled ? 'disabled' : null}
              onChange={handleChange}
              autoComplete="off"
            />
            <span className={`profile__error ${errors.name ? 'profile__error_active' : ''}`}>
              {errors.name}
            </span>
          </div>
          <div className="profile__email">
            <label>Почта</label>
            <input
              className={`profile__field ${errors.email ? 'profile__field_error' : ''}`}
              type="email"
              name="email"
              value={values.email || ''}
              required
              disabled={isDisabled ? 'disabled' : null}
              onChange={handleChange}
              autoComplete="off"
            />
            <span className={`profile__error ${errors.email ? 'profile__error_active' : ''}`}>
              {errors.email}
            </span>
          </div>
          <nav className="nav profile__nav">
            <ul className="nav__list nav__list_profile">
              <li className="nav__list-item nav__list-item_profile">{formButton}</li>
              <li className="nav__list-item nav__list-item_profile">
                <button className="link link_exit button__link" onClick={onLogout}>
                  Выйти из аккаунта
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </form>
      <p className={`profile__message ${showMessage ? 'profile__message_active' : ''}`}>
        {editProfileSuccess ? 'Данные успешно обновлены' : 'Ошибка при изменении данных'}
      </p>
    </section>
  );
}

export default Profile;
