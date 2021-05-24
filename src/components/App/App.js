import React, { useState, useCallback, useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import getMoviesFromServer from '../../utils/MainApi';
import { MAIN_API } from '../../utils/constants';

import api from '../../utils/MoviesApi';

import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [editProfileSuccess, setEditProfileSuccess] = useState(true);
  const [signUpSuccess, setSignUpSuccess] = React.useState(true);
  const [signInSuccess, setSignInSuccess] = React.useState(true);
  const [serverRequesSuccess, setServerRequesSuccess] = React.useState(true);

  const [loading, setLoading] = useState(false);

  const [allMovies, setAllMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [resultMovies, setResultMovies] = useState([]);
  const [resultSavedMovies, setResultSavedMovies] = useState([]);

  const history = useHistory();
  const location = useLocation();

  const authCheck = useCallback(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      api
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            history.push(location.pathname);
          }
        })
        .catch(() => history.push('/signin'));
    }
  }, [history]);

  useEffect(() => {
    authCheck();
  }, []);

  const handleLogin = ({ email, password }) => {
    return api
      .login(email, password)
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          localStorage.setItem('jwt', res.token);
          history.push('/movies');
          return res;
        }
      })
      .catch((res) => {
        setSignInSuccess(false);
        console.log(res);
      });
  };

  const handleRegister = ({ name, email, password }) => {
    return api
      .register(name, email, password)
      .then((res) => {
        handleLogin({ email, password });
        return res;
      })
      .catch((res) => {
        setSignUpSuccess(false);
        console.log(res);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('allMovies');
    localStorage.removeItem('savedMovies');
    setLoggedIn(false);
    setAllMovies([]);
    setFilteredMovies([]);
    setResultMovies([]);
    setSavedMovies([]);
    setFilteredSavedMovies([]);
    setResultSavedMovies([]);
    setCurrentUser({});
    history.push('/');
  };

  function getAllMovies() {
    setLoading(true);
    getMoviesFromServer(MAIN_API)
      .then((data) => {
        localStorage.setItem('allMovies', JSON.stringify(data));
        setAllMovies(data);
      })
      .catch((err) => {
        setServerRequesSuccess(false);
        localStorage.removeItem('allMovies');
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function getSavedMovies() {
    setLoading(true);
    api
      .getMovies()
      .then((data) => {
        const savedMoviesWithId = data.data.map((movie) => ({
          ...movie,
          id:
            movie.movieId.indexOf(0) === 0
              ? parseInt(movie.movieId.slice(1))
              : parseInt(movie.movieId),
        }));
        localStorage.setItem('savedMovies', JSON.stringify(savedMoviesWithId));
        setSavedMovies(savedMoviesWithId);
      })
      .catch((err) => {
        setServerRequesSuccess(false);
        localStorage.removeItem('savedMovies');
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleUserUpdate(name, email) {
    api
      .setUserInfo(name, email)
      .then((newUser) => {
        setCurrentUser(newUser.data);
      })
      .catch((err) => {
        setEditProfileSuccess(false);
        console.log(err);
      });
  }

  function handleAddLike(movie) {
    api
      .addMovie(movie)
      .then((newMovie) => {
        const result = [
          ...savedMovies,
          {
            ...newMovie.data,
            id:
              newMovie.data.movieId.indexOf(0) === 0
                ? parseInt(newMovie.data.movieId.slice(1))
                : parseInt(newMovie.data.movieId),
          },
        ];
        setSavedMovies(result);
        localStorage.setItem('savedMovies', JSON.stringify(result));
      })
      .catch((err) => {
        setServerRequesSuccess(false);
        console.log(err);
      });
  }

  function handleRemoveLike(movie) {
    const movieId = savedMovies.find((item) => item.id === movie.id)._id;
    api
      .removeMovie(movieId)
      .then(() => {
        const newMovies = savedMovies.filter((c) => !(c._id === movieId));
        setSavedMovies(newMovies);
        setResultSavedMovies(newMovies);
        localStorage.setItem('savedMovies', JSON.stringify(newMovies));
      })
      .catch((err) => {
        setServerRequesSuccess(false);
        console.log(err);
      });
  }

  const isMovieSaved = (movie) => savedMovies.some((item) => item.id === movie.id);

  useEffect(() => {
    if (localStorage.getItem('allMovies')) {
      setAllMovies(JSON.parse(localStorage.getItem('allMovies')));
    }
    if (localStorage.getItem('savedMovies')) {
      setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      api
        .getUserInfo()
        .then((initialUser) => {
          setCurrentUser(initialUser.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header loggedIn={loggedIn} />
        <main className="main">
          <Switch>
            <Route path="/signin">
              <Login onLogin={handleLogin} signInSuccess={signInSuccess} />
            </Route>
            <Route path="/signup">
              <Register onRegister={handleRegister} signUpSuccess={signUpSuccess} />
            </Route>
            <ProtectedRoute
              path="/movies"
              loggedIn={loggedIn}
              component={Movies}
              allMovies={allMovies}
              setAllMovies={setAllMovies}
              filteredMovies={filteredMovies}
              setFilteredMovies={setFilteredMovies}
              resultMovies={resultMovies}
              setResultMovies={setResultMovies}
              onAddLike={handleAddLike}
              onRemoveLike={handleRemoveLike}
              getAllMovies={getAllMovies}
              loading={loading}
              isMovieSaved={isMovieSaved}
              serverRequesSuccess={serverRequesSuccess}
            />
            <ProtectedRoute
              path="/saved-movies"
              loggedIn={loggedIn}
              component={SavedMovies}
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
              filteredSavedMovies={filteredSavedMovies}
              setFilteredSavedMovies={setFilteredSavedMovies}
              resultSavedMovies={resultSavedMovies}
              setResultSavedMovies={setResultSavedMovies}
              onAddLike={handleAddLike}
              onRemoveLike={handleRemoveLike}
              getSavedMovies={getSavedMovies}
              loading={loading}
              isMovieSaved={isMovieSaved}
              serverRequesSuccess={serverRequesSuccess}
            />
            <ProtectedRoute
              path="/profile"
              loggedIn={loggedIn}
              component={Profile}
              onLogout={handleLogout}
              onUserUpdate={handleUserUpdate}
              editProfileSuccess={editProfileSuccess}
            />
            <Route exact path="/">
              <Main />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
