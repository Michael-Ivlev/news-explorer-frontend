import React, { useState, useEffect, useRef } from "react";
import { CgClose } from "react-icons/cg";
import "./PopupWithForm.css";

export function PopupWithForm(props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === "Escape") {
        props.onCloseClick();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  if (!props.isOpen) {
    return null;
  }
  const handleOverlasyClick = (e) => {
    if (e.target === e.currentTarget) props.onCloseClick();
  };

  return (
    <div className="popupwithform" onClick={handleOverlasyClick}>
      <div className="popupwithform__container">
        <button
          className="popupwithform__close"
          type="button"
          onClick={props.onCloseClick}
        >
          <CgClose size={40} color="white" />
        </button>
        <h2 className={"popupwithform__form-heading"}>{`${props.title}`}</h2>
        {props.children}
      </div>
    </div>
  );
}
