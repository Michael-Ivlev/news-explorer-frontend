import React, { useState } from "react";
import "./NewCard.css";
import dateFormat, { masks } from "dateformat";

export function NewCard(props) {
  const userCards = JSON.parse(localStorage.getItem("userCards"));
  // const check = userCards? (userCards.some((card) => card.link === props.card.url) & props.isLogedIn) : ""
  const [isSaved, setIsSaved] = useState(false);

  React.useEffect(() => {
    if(!userCards){
      return
    }
    setIsSaved(
      userCards.some((card) => card.link === props.card.url) & props.isLogedIn
    );
  }, [localStorage.getItem("userCards")]);

  function handleSaveButton() {
    if (!props.isDelete && props.isLogedIn) {
      setIsSaved(true);
      props.handleCardSave(props.card);
    }
  }

  function handleDeleteButton() {
    if (props.isLogedIn) {
      props.handleCardDelete(props.card);
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
        onClick={isSaved ? handleDeleteButton : handleSaveButton}
      >
        {props.buttonIcon}
      </button>
      <div className="newcard__button-info">
        <p className="newcard__button-info_text">{props.buttonInfoText}</p>
      </div>
      {keyWordBox}
      <img
        className="newcard__img"
        src={props.card.urlToImage}
        alt={props.card.title}
      ></img>
      <div className="newcard__info">
        <p className="newcard__info_date">
          {dateFormat(props.card.publishedAt, "mmmm d, yyyy")}
        </p>
        <h3 className="newcard__info_title">{props.card.title}</h3>
        <p className="newcard__info_text">{props.card.description}</p>
        <p className="newcard__info_location">{props.card.source.name}</p>
      </div>
    </article>
  );
}
