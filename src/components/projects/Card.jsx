import React from "react";
import "./Projects.css";

const cardData = [
  {
    id: 1,
    img: "https://cdn.dribbble.com/userupload/3358603/file/original-da6875fd02fbd08209e899e373302c18.png?compress=1&resize=752x",
    title: "Pets mobile app",
    sourceCode: "https://github.com/Gutthred",
    demo: "https://dribbble.com/shots/19226296-Pets-mobile-app",
  },
  {
    id: 2,
    img: "https://cdn.dribbble.com/userupload/3352527/file/original-49974e09dc80d1877607fef58c682abf.png?compress=1&resize=752x",
    title: "Financial mobile app",
    sourceCode: "https://github.com/Gutthred",
    demo: "https://dribbble.com/shots/19205654-Financial-Mobile-App",
  },
  {
    id: 3,
    img: "https://cdn.dribbble.com/userupload/3348819/file/original-a986bcff6599fa65f8fc933cdcaa9fb9.png?compress=1&resize=752x",
    title: "E-learning Analytics",
    sourceCode: "https://github.com/Gutthred",
    demo: "https://dribbble.com/shots/19194621-E-learning-Analytics",
  },
  {
    id: 4,
    img: "https://cdn.dribbble.com/userupload/3345123/file/original-32fc0e7b90d2054d2344f954f1c3fa74.png?compress=1&resize=752x",
    title: "Podcasts mobile app",
    sourceCode: "https://github.com/Gutthred",
    demo: "https://dribbble.com/shots/19184681-Podcasts-mobile-app",
  },
  {
    id: 5,
    img: "https://cdn.dribbble.com/userupload/3283456/file/original-fe0b1aca81465712b94a865be8d9952d.jpg?compress=1&resize=752x",
    title: "Medical history",
    sourceCode: "https://github.com/Gutthred",
    demo: "https://dribbble.com/shots/19149436-Medical-history",
  },
  {
    id: 6,
    img: "https://cdn.dribbble.com/userupload/3280354/file/original-9614cebda596faf6b5736d82ba3a3f76.png?compress=1&resize=752x",
    title: "Digital banking app",
    sourceCode: "https://github.com/Gutthred",
    demo: "https://dribbble.com/shots/19132454-Digital-Banking-App",
  },
];

const Card = () => {
  return (
    <div className="container projects__container">
      {cardData.map(({ id, img, title, sourceCode, demo }) => {
        return (
          <article key={id} className="project__card">
            <figure className="project__card-img">
              <img src={img} alt={title} />
            </figure>
            <h3>{title}</h3>
            <div className="project__a">
              <a href={demo} target="__blank" className="btn">
                Live demo
              </a>
              <a href={sourceCode} target="__blank" className="btn btn-primary">
                Source code
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Card;
