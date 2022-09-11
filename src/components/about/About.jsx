import React, { Fragment, useEffect } from "react";
import "./About.css";
import ME from "../../assets/imgs/img-2.jpg";
import { FaAward, FaUserGraduate } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { useState } from "react";

const about = () => {
  const [activeArticle, setActiveArticle] = useState("about-me");
  const [activeText, setActiveText] = useState("about-me");

  const textForTag = (props) => {
    let tag = props;
    return tag;
  };

  return (
    <section id="about">
      <br />
      <h2>Sobre mim</h2>
      <br />

      <div className="container about__container">
        <div className="about__me">
          <figure className="about__me-img">
            <img src={ME} alt="Sobre mim" />
          </figure>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article
              id="about-me"
              onClick={() => {
                setActiveArticle("about-me");
                setActiveText("about-me");
              }}
              className={activeArticle === "about-me" ? "active" : ""}
            >
              <summary className="about__card">
                <FiUser className="about__card-icon" />
                <h5>About me</h5>
              </summary>
            </article>
            <article
              id="experience"
              onClick={() => {
                setActiveArticle("experience");
                setActiveText("experience");
              }}
              className={activeArticle === "experience" ? "active" : ""}
            >
              <summary className="about__card">
                <FaAward className="about__card-icon" />
                <h5>Experience</h5>
              </summary>
            </article>
            <article
              id="graduation"
              onClick={() => {
                setActiveArticle("graduation");
                setActiveText("graduation");
              }}
              className={activeArticle === "graduation" ? "active" : ""}
            >
              <summary className="about__card">
                <FaUserGraduate className="about__card-icon" />
                <h5>Graduation</h5>
              </summary>
            </article>
          </div>
          <article className="about__text">
            <div className="text__content">
              {textForTag(activeText) == "about-me" && (
                <small>
                  Olá, me chamo Fabio. <br />
                  Sou natural de Campinas/SP e atualmente resido em Sorocaba/SP.
                  <br />
                  Desde pequeno sou apaixonado pelo mundo da tecnologia, passava
                  horas em frente ao computador e videogame.
                  <br /> Minha porta de entrada no mundo da programação foi
                  quando aos treze anos de idade, criei meu próprio "MOD" de um
                  jogo chamado Ragnarok Online.
                </small>
              )}
            </div>
            <div className="text__content">
              {textForTag(activeText) == "experience" && (
                <small>
                  No atual momento estou realizando uma transição carreira,
                  <br /> sou formado em contabilidade pela Pontifícia Universidade Catolica
                  de Campinas - "PUC-CAMP". <br />
                  Iniciei minha carreira no departamento contábil de um
                  escritório e a última experiência foi em uma multinacional do
                  ramo da construção civil, <br /> onde desempenhava a função de
                  Management Accountant, desenvolvendo e controlando relatórios
                  que auxiliavam os diretores à tomada de decisões quanto ao
                  negócio e futuras acquisições.
                </small>
              )}
            </div>
            <div className="text__content">
              {textForTag(activeText) == "graduation" && (
                <small>
                  - Cursando Análise e Desenvolvimento de Software - UNIP, <br/>
                 
                  - Bacharelado em Ciências Contábeis - PUC-CAMP,<br/>
        
                  - Curso extensivo Internacional Accounting Standards - PUC-CAMP,<br/>

                  - Curso extensivo Finanças e Controladoria - USP.<br/>
                </small>
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default about;
