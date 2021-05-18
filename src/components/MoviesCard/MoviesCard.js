import React from 'react';
import { Route, Switch } from 'react-router-dom';
import exampleImg from '../../images/01.png';
import './MoviesCard.css';

function MoviesCard(props) {
  return (
    <article className="movie">
      <div className="movie__meta">
        <Switch>
          <Route path="/movies">
            <div
              className={`movie__like movie__like ${
                props.liked ? 'movie__like_active' : null
              } `}
            ></div>
          </Route>
          <Route path="/saved-movies">
            <div
              className={`movie__like movie__like ${
                props.liked ? 'movie__remove' : null
              } `}
            ></div>
          </Route>
        </Switch>
        <h2 className="movie__title">33 слова о дизайне</h2>
        <p className="movie__duration">1ч 47м</p>
      </div>
      <img src={exampleImg} alt="33 слова о дизайне" className="movie__image" />
    </article>
  );
}

export default MoviesCard;
