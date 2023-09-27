const MOVIES_PATH = "https://api.nomoreparties.co/beatfilm-movies";

const getJson = (response) => {
  if (response.ok) {
    return response.ok
      ? response.json()
      : Promise.reject(`Ошибка: ${response.status}`);
  }
  return Promise.reject(response);
};

export const getMovies = () => {
  return fetch(MOVIES_PATH, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(getJson);
};
