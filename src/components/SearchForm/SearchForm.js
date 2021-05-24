import React, { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { SERVER_ERROR } from '../../utils/constants';
import './SearchForm.css';

function SearchForm({ onSearch, query, setQuery, onShortClick, isRequesSuccess }) {
  const [isError, setIsError] = useState(false);

  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    if (!isError) {
      onSearch();
    }
  };

  const handleSearchButtonClick = (e) => {
    if (!query.length) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  return (
    <section className="search">
      <form action="#" className="search__form" onSubmit={handleSearchFormSubmit}>
        <input
          type="text"
          value={query}
          placeholder="Фильм"
          className="search__field"
          autoComplete="off"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button button_blue" onClick={handleSearchButtonClick}>
          Найти
        </button>
      </form>
      <span className="search__error">
        {isError ? 'Нужно ввести ключевое слово для поиска' : '\u00a0'}
        {!isRequesSuccess ? SERVER_ERROR : ''}
      </span>
      <FilterCheckbox onShortClick={onShortClick} />
    </section>
  );
}

export default SearchForm;
