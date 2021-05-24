import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import More from '../More/More';
import './Movies.css';
import { searchMovies, calculateOffset } from '../../utils/utils';

function Movies({
  allMovies,
  filteredMovies,
  setFilteredMovies,
  resultMovies,
  setResultMovies,
  onAddLike,
  onRemoveLike,
  getAllMovies,
  loading,
  isMovieSaved,
  serverRequesSuccess,
}) {
  const [query, setQuery] = useState('');
  const [isShort, setIsShort] = useState(false);
  const [more, setMore] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const handleFormSubmit = () => {
    if (localStorage.allMovies) {
      getMovies();
    } else {
      getAllMovies();
    }
  };

  const handleShortMoviesClick = () => {
    setIsShort(!isShort);
  };

  const handleMoreClick = () => {
    let offset = calculateOffset();
    const start = resultMovies.length;
    const end = start + offset;
    setResultMovies(resultMovies.concat(filteredMovies.slice(start, end)));
    if (end >= filteredMovies.length) {
      setMore(false);
    }
  };

  const getMovies = () => {
    setMore(false);
    const result = searchMovies(allMovies, query, isShort);
    if (!result.length) {
      setIsEmpty(true);
    }
    setFilteredMovies(result);
    checkResultsLength(result);
  };

  const checkResultsLength = (result) => {
    if (result.length > 12) {
      setMore(true);
      setResultMovies(result.slice(0, 12));
    } else {
      setMore(false);
      setResultMovies(result);
    }
  };

  useEffect(() => {
    getMovies();
  }, [allMovies]);

  useEffect(() => {
    getMovies();
  }, [isShort]);

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
      {resultMovies.length ? (
        <MoviesCardList
          movies={resultMovies}
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

export default Movies;
