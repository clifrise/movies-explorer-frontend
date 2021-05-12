import React, { useState, useEffect, useRef } from 'react';
import './Profile.css';

function Profile() {
  const inputEl = useRef();

  const [isDisabled, setIsDisabled] = useState(true);
  const [name, setName] = useState('Руслан');
  const [email, setEmail] = useState('clifrise@gmail.com');

  const handleEditProfileClick = function (e) {
    setIsDisabled(!isDisabled);
  };

  const handleSaveProfileClick = function (e) {
    console.log('Saved');
    setIsDisabled(!isDisabled);
  };

  useEffect(() => {
    inputEl.current.focus();
  }, [isDisabled]);

  let formButton;

  if (isDisabled) {
    formButton = (
      <button
        type="button"
        className="profile__edit"
        onClick={handleEditProfileClick}
      >
        Редактировать
      </button>
    );
  } else {
    formButton = (
      <button
        type="button"
        className="profile__edit"
        onClick={handleSaveProfileClick}
      >
        Сохранить
      </button>
    );
  }

  return (
    <section className="profile">
      <p className="profile__title">Привет, Руслан!</p>
      <div className="profile__data">
        <div className="profile__name">
          <label>Имя</label>
          <input
            ref={inputEl}
            className="profile__field"
            type="text"
            value={name}
            required
            disabled={isDisabled ? 'disabled' : null}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="profile__email">
          <label>Почта</label>
          <input
            className="profile__field"
            type="email"
            value={email}
            required
            disabled={isDisabled ? 'disabled' : null}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <nav className="nav profile__nav">
          <ul className="nav__list nav__list_profile">
            <li className="nav__list-item nav__list-item_profile">
              {formButton}
            </li>
            <li className="nav__list-item nav__list-item_profile">
              <span className="link link_exit">Выйти из аккаунта</span>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Profile;
