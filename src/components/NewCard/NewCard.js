import React, { useState } from "react";
import "./NewCard.css";

export function NewCard(props) {
  const [isSaved, setIsSaved] = useState(false);

  function handleCardButtonClick() {
    props.handleCardButtonClick();
    if (!props.isDelete && props.isLogedIn) {
      setIsSaved(true);
    }
  }

  const isUserLogInClassName = props.isLogedIn
    ? "newcard_savebutton_logedin"
    : "newcard_savebutton";

  const isCardSaved = isSaved
    ? "newcard_savebutton_saved"
    : isUserLogInClassName;

  const buttonClassName = props.isDelete ? "newcard_deletebutton" : isCardSaved;

  const keyWordBox = props.keyWord ? (
    <div className={"newcard__keyword"}>{props.keyWord}</div>
  ) : null;

  return (
    <article className="newcard">
      <button
        className={buttonClassName}
        type="button"
        name="newcard-save-button"
        onClick={handleCardButtonClick}
      >
        {props.buttonIcon}
      </button>
      <div className="newcard__button-info">
        <p className="newcard__button-info_text">{props.buttonInfoText}</p>
      </div>
      {keyWordBox}
      <img className="newcard__img" src={props.card.image} alt={props.card.title}></img>
      <div className="newcard__info">
        <p className="newcard__info_date">{props.card.date}</p>
        <h3 className="newcard__info_title">
          {props.card.title}
        </h3>
        <p className="newcard__info_text">
          {props.card.text}
        </p>
        <p className="newcard__info_location">{props.card.source}</p>
      </div>
    </article>
  );
}
