class Api {
  constructor({ basePath, headers }) {
    this._basePath = basePath;
    this._headers = headers;
  }
  _getJson(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(response);
  }

  getCurrentUser() {
    const p = fetch(`${this._basePath}/users/me`, {
      method: "GET",
      headers: this._getHeaders(),
    });
    return p.then(this._getJson);
  }

  _getHeaders() {
    const jwt = localStorage.getItem("jwt");
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
      ...this._headers,
    };
  }

  getMoviesList() {
    const p = fetch(`${this._basePath}/movies`, {
      headers: this._getHeaders(),
    });
    return p.then(this._getJson);
  }

  addMovie(item) {
    return fetch(`${this._basePath}/movies`, {
      method: "POST",
      headers: this._getHeaders(),
      body: JSON.stringify(item),
    }).then(this._getJson);
  }

  deleteMovie(cardId) {
    return fetch(`${this._basePath}/movies/${cardId} `, {
      method: "DELETE",
      headers: this._getHeaders(),
    }).then(this._getJson);
  }

  updateUser(name, email) {
    const p = fetch(`${this._basePath}/users/me`, {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    });
    return p.then(this._getJson);
  }
}
const basePath = "https://novelthunderstorm.nomoreparties.sbs/api";
const mainApi = new Api({
  basePath,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default mainApi;
