import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";
import { FiLogOut } from "react-icons/fi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export function NavLinks(props) {
  const navLinkClass = props.mobile ? "navlink__link_mobile" : "navlink__link";
  const navLinkActive = props.mobile
    ? "navlink__link_mobile"
    : "navlink__link-active";
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? navLinkActive : navLinkClass)}
      >
        Home
      </NavLink>
      {props.isLogedIn ? (
        <NavLink
          to="/saved-news"
          className={({ isActive }) =>
            isActive ? navLinkActive : navLinkClass
          }
        >
          Saved articles
        </NavLink>
      ) : null}
      {props.isLogedIn ? (
        <button className="navlink__button" onClick={props.onLogOut}>
          {currentUser.name}
          <FiLogOut size={17} className="navlink__button_login_icon" />
        </button>
      ) : (
        <button className="navlink__button_login" onClick={props.onCloseClick}>
          Sign In
        </button>
      )}
    </>
  );
}
