import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movies, onAddLike, onRemoveLike, isMovieSaved }) {
  return (
    <section className="movies">
      {movies.map((movie) => {
        return (
          <MoviesCard
            key={movie.id ?? movie._id}
            movie={movie}
            onAddLike={onAddLike}
            onRemoveLike={onRemoveLike}
            isMovieSaved={isMovieSaved}
          />
        );
      })}
    </section>
  );
}

export default MoviesCardList;
