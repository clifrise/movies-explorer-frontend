import { MOVIES_API } from './constants';
class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    const url = this._baseUrl + '/users/me';
    return fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      return this._checkStatus(res);
    });
  }

  getMovies() {
    const url = this._baseUrl + '/movies';
    return fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      return this._checkStatus(res);
    });
  }

  setUserInfo(name, email) {
    const url = this._baseUrl + '/users/me';
    return fetch(url, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then((res) => {
      return this._checkStatus(res);
    });
  }

  addMovie(movie) {
    const url = this._baseUrl + '/movies';
    return fetch(url, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...movie }),
    }).then((res) => {
      return this._checkStatus(res);
    });
  }

  removeMovie(movieId) {
    const url = `${this._baseUrl}/movies/${movieId}`;
    return fetch(url, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      return this._checkStatus(res);
    });
  }

  register = (name, email, password) => {
    return fetch(this._baseUrl + '/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    }).then((res) => {
      return this._checkStatus(res);
    });
  };

  login = (email, password) => {
    return fetch(this._baseUrl + '/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      return this._checkStatus(res);
    });
  };

  checkToken = (jwt) => {
    return fetch(this._baseUrl + '/users/me', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    }).then((res) => {
      return this._checkStatus(res);
    });
  };
}

const api = new Api({
  baseUrl: MOVIES_API,
});

export default api;
