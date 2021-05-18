import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
  return (
    <section className="movies">
      <Switch>
        <Route path="/movies">
          <MoviesCard liked={true} />
          <MoviesCard />
          <MoviesCard liked={true} />
          <MoviesCard />
          <MoviesCard liked={true} />
          <MoviesCard />
        </Route>
        <Route path="/saved-movies">
          <MoviesCard liked={true} />
          <MoviesCard liked={true} />
          <MoviesCard liked={true} />
        </Route>
      </Switch>
    </section>
  );
}

export default MoviesCardList;
