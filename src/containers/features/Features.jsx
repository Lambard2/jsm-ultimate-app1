import React from "react";
import "./features.css";
import { Feature } from "../../components";
const featuresData = [
  {
    title: "Lorem ipsum dolor sit.",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, beatae! Placeat voluptate voluptatibus nisi illo a ipsum aliquam vero laborum.",
  },
  {
    title: "Lorem ipsum dolor sit.",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, beatae! Placeat voluptate voluptatibus nisi illo a ipsum aliquam vero laborum.",
  },
  {
    title: "Lorem ipsum dolor sit.",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, beatae! Placeat voluptate voluptatibus nisi illo a ipsum aliquam vero laborum.",
  },
  {
    title: "Lorem ipsum dolor sit.",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, beatae! Placeat voluptate voluptatibus nisi illo a ipsum aliquam vero laborum.",
  },
];
const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen
        </h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
