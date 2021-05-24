import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import More from '../More/More';
import './SavedMovies.css';
import { searchMovies, calculateOffset } from '../../utils/utils';

function SavedMovies({
  savedMovies,
  filteredSavedMovies,
  setFilteredSavedMovies,
  resultSavedMovies,
  setResultSavedMovies,
  onAddLike,
  onRemoveLike,
  getSavedMovies,
  loading,
  isMovieSaved,
  serverRequesSuccess,
}) {
  const [query, setQuery] = useState('');
  const [isShort, setIsShort] = useState(false);
  const [more, setMore] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const handleFormSubmit = () => {
    getMovies();
  };

  const handleShortMoviesClick = () => {
    setIsShort(!isShort);
    getMovies();
  };

  const handleMoreClick = () => {
    let offset = calculateOffset();
    const start = resultSavedMovies.length;
    const end = start + offset;
    setResultSavedMovies(resultSavedMovies.concat(filteredSavedMovies.slice(start, end)));
    if (end >= filteredSavedMovies.length) {
      setMore(false);
    }
  };

  const getMovies = () => {
    setMore(false);
    const result = searchMovies(savedMovies, query, isShort);
    if (!result.length) {
      setIsEmpty(true);
    }
    setFilteredSavedMovies(result);
    checkResultsLength(result);
  };

  const checkResultsLength = (result) => {
    if (result.length > 12) {
      setMore(true);
      setResultSavedMovies(result.slice(0, 12));
    } else {
      setMore(false);
      setResultSavedMovies(result);
    }
  };

  useEffect(() => {
    getMovies();
  }, [savedMovies]);

  useEffect(() => {
    getMovies();
  }, [isShort]);

  useEffect(() => {
    if (!localStorage.savedMovies) {
      getSavedMovies();
    }
  }, []);

  return (
    <>
      <SearchForm
        onSearch={handleFormSubmit}
        query={query}
        setQuery={setQuery}
        onShortClick={handleShortMoviesClick}
        isRequesSuccess={serverRequesSuccess}
      />
      {loading ? <Preloader /> : null}
      {resultSavedMovies.length ? (
        <MoviesCardList
          movies={resultSavedMovies}
          onAddLike={onAddLike}
          onRemoveLike={onRemoveLike}
          isMovieSaved={isMovieSaved}
        />
      ) : isEmpty && !loading ? (
        <p className="main__message ">Ничего не найдено</p>
      ) : null}
      {more ? <More onMoreClick={handleMoreClick} /> : null}
    </>
  );
}

export default SavedMovies;
