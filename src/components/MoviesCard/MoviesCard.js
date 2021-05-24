import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import defaultImg from '../../images/01.png';
import './MoviesCard.css';
import { IMGURL, NO_DATA, DEFAULT_TRAILER } from '../../utils/constants';
import { minutesToHours } from '../../utils/utils';

function MoviesCard({ movie, onAddLike, onRemoveLike, isMovieSaved }) {
  const location = useLocation();

  const hours = minutesToHours(movie.duration).hours;
  const minutes = minutesToHours(movie.duration).minutes;
  const imgUrl = movie?.image ? `${IMGURL}${movie?.image?.url}` : defaultImg;
  const liked = isMovieSaved(movie);

  const handleLikeButtonClick = (e) => {
    if (!liked) {
      onAddLike({
        country: movie.country ?? NO_DATA,
        director: movie.director ?? NO_DATA,
        duration: movie.duration ?? 0,
        year: movie.year ?? 0,
        description: movie.description ?? NO_DATA,
        image: imgUrl,
        trailer: movie.trailerLink.indexOf('http') >= 0 ? movie.trailerLink : DEFAULT_TRAILER,
        nameRU: movie.nameRU ?? NO_DATA,
        nameEN: movie.nameEN ?? NO_DATA,
        thumbnail: imgUrl,
        movieId: movie.id < 10 ? '0' + movie.id : movie.id + '',
      });
    } else {
      onRemoveLike(movie);
    }
  };

  const handleRemoveButtonClick = (e) => {
    onRemoveLike(movie);
  };

  return (
    <article className="movie">
      <div className="movie__meta">
        <Switch>
          <Route path="/movies">
            <button
              onClick={handleLikeButtonClick}
              className={`movie__like movie__like ${liked ? 'movie__like_active' : ''} `}
            ></button>
          </Route>
          <Route path="/saved-movies">
            <button
              onClick={handleRemoveButtonClick}
              className="movie__like movie__like movie__remove"
            ></button>
          </Route>
        </Switch>
        <h2 className="movie__title">{movie.nameRU}</h2>
        <p className="movie__duration">{`${hours ? `${hours}ч` : ''} ${
          minutes ? `${minutes}м` : ''
        }`}</p>
      </div>
      <a
        href={movie.trailerLink ?? movie.trailer}
        target="_blank"
        rel="noreferrer"
        className="movie__link"
      >
        <img
          src={location.pathname === '/saved-movies' ? movie.image : imgUrl}
          alt="33 слова о дизайне"
          className="movie__image"
        />
      </a>
    </article>
  );
}

export default MoviesCard;
