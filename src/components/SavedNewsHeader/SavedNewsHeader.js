import React, { useState } from "react";
import "./SavedNewsHeader.css";

export function SavedNewsHeader(props) {
  return (
    <div className="saved-news-header">
      <h3 className="saved-news-header__title">Saved articles</h3>
      <p className="saved-news-header__amount">
        Elise, you have 5 saved articles
      </p>
      <div className="saved-news-header__keywords">
        <p className="saved-news-header__keywords-title">By keywords:</p>
        <p className="saved-news-header__keywords-item">
          Nature, Yellowstone, and 2 other
        </p>
      </div>
    </div>
  );
}
