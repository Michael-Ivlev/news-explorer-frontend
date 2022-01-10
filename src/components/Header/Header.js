import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import "./Header.css";
import { FiLogOut } from "react-icons/fi";

export function Header(props) {
  return <Navigation isLogedIn={props.isLogedIn} darMode={props.darMode} onCloseClick={props.onCloseClick} onLogOut={props.onLogOut}/>;
}
