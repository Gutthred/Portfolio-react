import React from "react";
import "./Footer.css";
import { FooterSocials } from "./FooterSocials";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__socials__container">
        <div className="footer__icons">
          <IconContext.Provider value={{ size: 15 }}>
            <FooterSocials />
          </IconContext.Provider>
        </div>
      </div>
      <div className="language__footer-selector">
        <p>Idiomas:</p>
        <div className="language-selection">
          <a href="">PT</a>
          <p> / </p>
          <a href="">EN</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
