import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search">
      <form action="#" className="search__form">
        <input
          type="text"
          placeholder="Фильм"
          className="search__field"
          autoComplete="off"
        />
        <button type="submit" className="button button_blue">
          Найти
        </button>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
