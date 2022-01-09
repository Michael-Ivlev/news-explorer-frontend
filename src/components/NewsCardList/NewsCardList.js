import React, { useState } from "react";
import { NewCard } from "../NewCard/NewCard";
import "./NewsCardList.css";
import { defaultCards } from "../../NewsCardInitial";
const avatarImg = require("../../images/icon/not-found_v1.png");

export function NewsCardList(props) {
  const renderCount = 3;
  function handleCardButtonClick(props) {}
  if (props.searchResultStatus === "Finish")
    return (
      <div className="newscardlist">
        <h2 className="newscardlist__title">Search results</h2>
        <div className="newscardlist__list">
          {defaultCards.slice(0, renderCount).map((card) => {
            return (
              <NewCard
                handleCardButtonClick={handleCardButtonClick}
                isLogedIn={props.isLogedIn}
                buttonInfoText="Sign in to save articles"
                card={card}
                key={card.id}
              />
            );
          })}
        </div>
        <button className="newscardlist__button">Show more</button>
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

  return null;
}
