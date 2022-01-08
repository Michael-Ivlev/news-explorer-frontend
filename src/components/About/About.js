import React from "react";
import "./About.css";
const avatarImg = require("../../images/avatar.png");

export function About(props) {
  return (
    <div className="about">
      <img className="about__profileimage" src={avatarImg} alt="User profile image"></img>
      <div className="about_text-container" alt="Image of the page avatar">
        <h2 className="about_text-container_title">About the author</h2>
        <p className="about_text-container_text">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>
        <p className="about_text-container_text">You
          can also talk about your experience with Practicum, what you learned
          there, and how you can help potential customers.
        </p>
      </div>
    </div>
  );
}
