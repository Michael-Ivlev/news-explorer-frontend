import React from "react";
import "./SearchForm.css";

export function SearchForm(props) {
  return (
    <div className="searchform">
      <form onSubmit={props.handleButtonClick} className="searchform__form">
        <input
          className="searchform__input"
          placeholder="Enter topic"
          id="searchform__input"
          name="searchform__input"
          type="text"
          required
        />
        <button type="submit" className="searchform__button">
          Search
        </button>
      </form>
    </div>
  );
}
