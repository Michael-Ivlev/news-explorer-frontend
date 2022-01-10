import React, { useState } from "react";
import "./SavedNewsHeader.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { UserSavedCardsContext } from "../../contexts/UserSavedCardsContext";

export function SavedNewsHeader(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const userSavedCards = React.useContext(UserSavedCardsContext);

  const keywords = [];

  userSavedCards.forEach((element) => {
    keywords.push(element.keyword);
  });

  const counted = keywords.reduce(function (obj, val) {
    obj[val] = (obj[val] || 0) + 1;
    return obj;
  }, {});

  const popularSortedArray = Object.keys(counted).sort(function (a, b) {
    return counted[b] - counted[a];
  });

  const popularSortedArrayString = popularSortedArray.length > 3? `${popularSortedArray.slice(0,3).toString(",")} and ${popularSortedArray.length - 3} more...` : popularSortedArray.toString(",");

  return (
    <div className="saved-news-header">
      <h3 className="saved-news-header__title">Saved articles</h3>
      <p className="saved-news-header__amount">
        {currentUser.name.toUpperCase()}, you have {userSavedCards.length} saved
        articles
      </p>
      <div className="saved-news-header__keywords">
        <p className="saved-news-header__keywords-title">By keywords:</p>
        <p className="saved-news-header__keywords-item">{popularSortedArrayString}</p>
      </div>
    </div>
  );
}
