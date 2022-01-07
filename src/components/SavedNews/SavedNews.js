import React from "react";
import { SavedNewsHeader } from "../SavedNewsHeader/SavedNewsHeader";
import { NewCard } from "../NewCard/NewCard";
import "./SavedNews.css";
import { defaultCards } from "../../NewsCardInitial";

export function SavedNews(props) {
  function handleCardButtonClick(card) {}

  return (
    <>
      <section className="saved-news-header-section">
        <SavedNewsHeader />
      </section>
      <section className="saved-news-cards-section">
        {defaultCards.map((card) => {
          return (
            <NewCard
              handleCardButtonClick={handleCardButtonClick}
              isLogedIn={props.isLogedIn}
              buttonInfoText="Sign in to save articles"
              card={card}
              isLogIn={true}
              isDelete={true}
              keyWord={card.keyword}
              key={card.id}
            />
          );
        })}
      </section>
    </>
  );
}
