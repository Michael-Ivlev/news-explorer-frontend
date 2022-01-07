import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaGithub, FaFacebookSquare } from "react-icons/fa";

export function Footer(params) {
  return (
    <div className="footer">
      <p className="footer__credits">© 2021 Supersite, Powered by News API</p>
      <div className="footer__nav">
        <div className="footer__nav_links">
          <Link to="/" className="footer__nav_links-link">
            Home
          </Link>
          <Link to="/" className="footer__nav_links-link">
            Practicum by Yandex
          </Link>
        </div>
        <div className="footer__nav_social">
          <Link to="/">
            <FaGithub size={20} className="footer__nav_social_icon" />
          </Link>
          <Link to="/">
            <FaFacebookSquare size={20} className="footer__nav_social_icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}
