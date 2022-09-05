import React from "react";
import "./Header.css";
import Button from "./Button";
import Alien from "../../assets/imgs/img-header.jpg";
import HeaderSocials from "./HeaderSocials";
import { IconContext } from "react-icons";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__info">
          <h5>Hello I'm</h5>
          <h1>Fabio Silva</h1>
          <h5 className="text-light">Front-end Developer</h5>
          <Button />
        </div>
        <div className="header__socials__img">
          <div className="header__img">
            <img src={Alien} alt="Me as Alien" />
          </div>
          <div className="header__socials__text">
            <p className="socials__text"></p>
          </div>
          <div className="header__icons">
            <IconContext.Provider
              value={{size: 20}}
            >
              <HeaderSocials />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
