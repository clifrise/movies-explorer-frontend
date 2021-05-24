function getMoviesFromServer(url) {
  return fetch(url).then((res) => checkStatus(res));
}

function checkStatus(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export default getMoviesFromServer;
