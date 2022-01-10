import React, { useState, useEffect } from "react";
import { NavLinks } from "./NavLinks";
import { HiMenuAlt4 } from "react-icons/hi";
import "./DesktopNav.css";

export function DesktopNav(props) {
  return (
    <>
      <div className={props.darMode? "desktopnav invert-colors" : "desktopnav"}>
        <h2 className="desktopnav__logo">NewsExplorer</h2>
        <nav className="desktopnav__links">
          <NavLinks isLogedIn={props.isLogedIn} onCloseClick={props.onCloseClick} onLogOut={props.onLogOut}/>
        </nav>
      </div>
    </>
  );
}
