import React from "react";
import { SavedNewsHeader } from "../SavedNewsHeader/SavedNewsHeader";
import { NewCard } from "../NewCard/NewCard";
import "./SavedNews.css";
import { defaultCards } from "../../NewsCardInitial";

export function SavedNews(props) {
  return (
    <>
      <section className="saved-news-header-section">
        <SavedNewsHeader />
      </section>
      <section className="saved-news-cards-section">
        {props.userCards ? props.userCards.map((card) => {
          const formatUserCards = {
            keyword: card.keyword,
            title: card.title,
            publishedAt: card.date,
            description : card.text,
            source: { name: card.source },
            url: card.link,
            urlToImage: card.image,
          };
          return (
            <NewCard
              isLogedIn={props.isLogedIn}
              buttonInfoText="Sign in to save articles"
              card={formatUserCards}
              isLogedIn={props.isLogedIn}
              isDelete={true}
              keyWord={card.keyword}
              key={Math.random().toString(36).substr(2, 9)}
              handleCardDelete={props.handleCardDelete}
            />
          );
        }) : null}
      </section>
    </>
  );
}
