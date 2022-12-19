// import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TiCodeOutline } from "react-icons/ti";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { images } from "../../constants";
// import { urlFor, client } from "../../client";
const langs = [
  images.react,
  images.redux,
  images.css,
  images.javascript,
  images.typescript,
  images.html,
  images.node,
];
const contents = [
  {
    id: 1,
    text: "Develop highly interactive user interface and Backend for web",
  },
  {
    id: 2,
    text: "Building front end responsive website using ReactJS, CSS, JavaScript",
  },
  { id: 3, text: "Creating Backend application in Node and express" },
];
const About = () => {
  return (
    <>
      <h2 className="head-text">
        Here's what
        <span> I do</span>
      </h2>
      <motion.div
        className="app__profiles"
        transition={{ duration: 0.5, type: "tween" }}
      >
        {/* {abouts.map((item, idx) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile_item"
            key={item.title + idx}
          >
            <img src={item.imgUrl} alt={item.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {item.title}
            </h2>
            <p className="p-text" style={{ marginTop: 20 }}>
              {item.description}
            </p>
          </motion.div>
        ))} */}

        <div
          // whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__profile_image_container"
        >
          <img
            className="app__profile_image"
            src={images.about_section_photo}
            alt="about section"
          />
        </div>

        <div
          // whileInView={{ x: [100, 0], opacity: [0, 1] }}
          // transition={{ duration: 0.5 }}
          className="app__profile-aboutme"
        >
          <h2 className="head-text">
            Full Stack <span>Web Development</span>
          </h2>
          <div className="app__profile-stacks">
            {langs.map((lang, i) => (
              <div className="app__profile-stacks-item" key={i}>
                <img src={lang} alt="stacks_icons" />
              </div>
            ))}
          </div>
          <div className="app__profile-dos">
            {contents.map((content) => (
              <div className="app__profile-dos-item" key={content.id}>
                <TiCodeOutline /> {content.text}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
