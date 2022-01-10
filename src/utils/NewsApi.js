import React from "react";

class NewsApi extends React.Component {
  constructor(props) {
    super(props);
    this.baseUrl = props.baseUrl;
    this.apiKey = props.apiKey;
    this.fromDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    this.date = new Date(Date.now());
    this.pageSize = 100;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  }

  getSearchResults(searchWord) {
    return fetch(
      `${this.baseUrl}/everything?apiKey=${this.apiKey}&q=${searchWord}&from=${this.fromDate}&pageSize=${this.pageSize}`,
      {
        method: "GET",
      }
    ).then((res)=> this._getResponseData(res))
  }
}

const newsApi = new NewsApi({
  baseUrl: "https://newsapi.org/v2",
  apiKey: "3b676b7d0bc745ac8aa90c4d04c739e1",
});

export default newsApi;
