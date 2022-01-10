import React, { useState, useEffect } from "react";
import { NavLinks } from "./NavLinks";
import { HiMenuAlt4 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import "./MobileNav.css";
import { NavLink } from "react-router-dom";

export function MobileNav(props) {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  function handleOnHambuergerClick() {
    const toggle = !dropDownOpen;
    setDropDownOpen(toggle);
  }
  const hamburgerStatus = dropDownOpen ? (
    <CgClose size={24} />
  ) : (
    <HiMenuAlt4 size={24} />
  );

  const logoClassColordependency = dropDownOpen
    ? "mobilenav__logo"
    : "mobilenav__logo invert-colors";
  const buttonClassColordependency = dropDownOpen
    ? "mobilenav__hamburger"
    : "mobilenav__hamburger invert-colors";

  return (
    <>
      <div className="mobilenav__visabiliti">
        <div className="mobilenav">
          <h2
            className={
              props.darMode ? logoClassColordependency : "mobilenav__logo"
            }
          >
            NewsExplorer
          </h2>
          <button
            className={
              props.darMode
                ? buttonClassColordependency
                : "mobilenav__hamburger"
            }
            onClick={handleOnHambuergerClick}
          >
            {hamburgerStatus}
          </button>
        </div>
        {dropDownOpen ? (
          <div className="mobilenav__drop-down">
            <div className="mobilenav__drop-down_container">
              <nav className="mobilenav__drop-down_container_elements">
                <NavLinks mobile={true} isLogedIn={props.isLogedIn} onCloseClick={props.onCloseClick} onLogOut={props.onLogOut}/>
              </nav>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
