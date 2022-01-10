import React, { useState, useEffect } from "react";
import { NavLinks } from "./NavLinks";
import { HiMenuAlt4 } from "react-icons/hi";
import "./Navigation.css";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export function Navigation(props) {
  return (
    <>
      <DesktopNav isLogedIn={props.isLogedIn} darMode={props.darMode} onCloseClick={props.onCloseClick} onLogOut={props.onLogOut}/>
      <MobileNav isLogedIn={props.isLogedIn} darMode={props.darMode} onCloseClick={props.onCloseClick} onLogOut={props.onLogOut}/>
    </>
  );
}
