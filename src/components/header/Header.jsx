import React from "react";
import "./Header.css";
import Alien from "../../assets/imgs/img-header.jpg";
import HeaderSocials from "./HeaderSocials";
import { IconContext } from "react-icons";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__info">
          <h4>Olá, me chamo</h4>
          <h1 className="header__name">Fabio Silva</h1>
          <h3 className="text-light">Desenvolvedor Front-end</h3>
          <div className="header__socials__text">
            <p className="socials__text"></p>
          </div>
          <div className="header__icons">
            <IconContext.Provider
              value={{size: 25}}
            >
              <HeaderSocials />
            </IconContext.Provider>
          </div>
        </div>
        <div className="header__socials__img">
          <div className="header__img">
            <img src={Alien} alt="Me as Alien" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
