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
      <h2>Sobre mim</h2>

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
                <h5>Sobre mim</h5>
                <small>Pessoa</small>
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
                <h5>Experiencia</h5>
                <small>Profissional</small>
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
                <h5>Formacao</h5>
                <small>blah blah </small>
              </summary>
            </article>
          </div>
          <article className="about__text">
            <div className="text__content">
              {textForTag(activeText) == "about-me" && (
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ullam quas dolorum nisi officiis distinctio. Placeat deserunt,
                  at porro, est quam ex exercitationem explicabo vel aut dolore
                  nostrum adipisci et sint quisquam ullam fugiat dignissimos?
                  Porro.
                </p>
              )}
            </div>
            <div className="text__content">
              {textForTag(activeText) == "experience" && (
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum,
                  quis sed ullam non deserunt rerum sit animi dolorum ex,
                  ratione alias eligendi, vitae inventore sequi quaerat cumque
                  praesentium.
                </p>
              )}
            </div>
            <div className="text__content">
              {textForTag(activeText) == "graduation" && (
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  rerum eum deserunt provident aspernatur tempora quas veritatis
                  minus sunt quia distinctio sed ducimus, iure repudiandae
                  dolore possimus eius blanditiis laborum labore assumenda neque
                  vero aperiam unde vel? Asperiores, iusto facere.
                </p>
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default about;
