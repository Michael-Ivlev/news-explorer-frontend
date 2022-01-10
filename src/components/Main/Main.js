import React, { useEffect, useState } from "react";
import { About } from "../About/About";
import { NewCard } from "../NewCard/NewCard";
import { NewsCardList } from "../NewsCardList/NewsCardList";
import { PopUpRegister } from "../PopUpRegister/PopUpRegister";
import { PopupWithForm } from "../PopupWithForm/PopupWithForm";
import { SearchForm } from "../SearchForm/SearchForm";
import newsApi from "../../utils/NewsApi";
import "./Main.css";

export function Main(props) {
  const [newsListStatus, setNewsListStatus] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function handleSearchClick(event) {
    event.preventDefault();
    props.handleSearch(event)
  }
  return (
    <>
      <section className="search">
        <div className="search__container">
          <h1 className="search__title">What's going on in the world?</h1>
          <h2 className="search__sub-title">
            Find the latest news on any topic and save them in your personal
            account.
          </h2>
          <SearchForm handleButtonClick={handleSearchClick} />
        </div>
      </section>
      <section className="newslist-section">
        <NewsCardList
          searchResultStatus={props.nesListComponentStatus}
          isLogedIn={props.isLogedIn}
          newsCards={props.newsCards}
          handleCardSave={props.handleCardSave}
          handleCardDelete={props.handleCardDelete}
        />
      </section>
      <section className="about-section">
        <About />
      </section>
    </>
  );
}
