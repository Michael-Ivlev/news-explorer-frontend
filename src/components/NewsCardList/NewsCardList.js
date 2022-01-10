import React, { useState } from "react";
import { NewCard } from "../NewCard/NewCard";
import "./NewsCardList.css";
import { defaultCards } from "../../NewsCardInitial";
const avatarImg = require("../../images/icon/not-found_v1.png");

export function NewsCardList(props) {
  const newsCards = props.newsCards;
  const [renderCount, setRenderCount] = useState(3);

  function addRenderCount() {
    setRenderCount(renderCount + 3);
  }

  function handleCardButtonClick(props) {

  }
  if (props.searchResultStatus === "Finish")
    return (
      <div className="newscardlist">
        <h2 className="newscardlist__title">Search results</h2>
        <div className="newscardlist__list">
          {newsCards.slice(0, renderCount).map((card) => {
            return (
              <NewCard
                handleCardButtonClick={handleCardButtonClick}
                isLogedIn={props.isLogedIn}
                buttonInfoText="Sign in to save articles"
                card={card}
                key={Math.random().toString(36).substr(2, 9)}
                handleCardSave={props.handleCardSave}
                handleCardDelete={props.handleCardDelete}
              />
            );
          })}
        </div>
        {renderCount > 100 ? null : (
          <button className="newscardlist__button" onClick={addRenderCount}>
            Show more
          </button>
        )}
      </div>
    );

  if (props.searchResultStatus === "Loading")
    return (
      <div className="newscardlist__loading">
        <i className="circle-preloader"></i>
        <p className="newscardlist__loading_text">Searching for news...</p>
      </div>
    );

  if (props.searchResultStatus === "Not-Found")
    return (
      <div className="newscardlist__notfound">
        <img src={avatarImg} alt="Nothing found sad smile"></img>
        <h3 className="newscardlist__notfound_title">Nothing found</h3>
        <p className="newscardlist__notfound_text">
          Sorry, but nothing matched your search terms.
        </p>
      </div>
    );

  if (props.searchResultStatus === "Error")
    return (
      <div className="newscardlist__error">
        <p className="newscardlist__error_text">
          Sorry, something went wrong during the request. There may be a
          connection issue or the server may be down. Please try again later.
        </p>
      </div>
    );

  return null;
}
