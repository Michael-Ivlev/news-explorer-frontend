import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaGithub, FaFacebookSquare } from "react-icons/fa";

export function Footer(params) {
  return (
    <footer className="footer">
      <p className="footer__credits">© 2021 Supersite, Powered by News API</p>
      <div className="footer__nav">
        <div className="footer__nav_links">
          <Link to="/" className="footer__nav_links-link">
            Home
          </Link>
          <a
            href="https://practicum.yandex.com"
            target="_blank"
            className="footer__nav_links-link"
          >
            Practicum by Yandex
          </a>
        </div>
        <div className="footer__nav_social">
          <a href="https://github.com" target="_blank">
            <FaGithub size={20} className="footer__nav_social_icon" />
          </a>
          <a href="https://facebook.com" target="_blank">
            <FaFacebookSquare size={20} className="footer__nav_social_icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
