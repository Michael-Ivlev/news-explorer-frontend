import React from "react";

class MainApi extends React.Component {
  constructor(props) {
    super(props);
    this.baseUrl = props.baseUrl;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return res.json().then((data) => Promise.reject(data));
    }
    return res.json();
  }

  signup(email, password, name) {
    return fetch(`${this.baseUrl}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    }).then((res) => this._getResponseData(res));
  }

  signin(email, password) {
    return fetch(`${this.baseUrl}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => this._getResponseData(res));
  }

  getUserInfo(token) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getResponseData(res));
  }

  saveCard(token, card) {
    return fetch(`${this.baseUrl}/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        keyword: card.keyword,
        title: card.title,
        text: card.text,
        date: card.date,
        source: card.source,
        link: card.link,
        image: card.image,
      }),
    }).then((res) => this._getResponseData(res));
  }

  deleteCard(token, cardId) {
    return fetch(`${this.baseUrl}/articles/${cardId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getResponseData(res));
  }

  getUserArticlesList(token) {
    return fetch(`${this.baseUrl}/articles`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getResponseData(res));
  }


  //   signin = (password, email) => {
  //     return fetch(`${BASE_URL}/signin`, {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ password, email }),
  //     }).then((res) => _getResponseData(res));
  //   };
}

const mainApi = new MainApi({
  baseUrl: "https://api.michaelnewsexplorerapi.students.nomoreparties.sbs",
});

export default mainApi;
