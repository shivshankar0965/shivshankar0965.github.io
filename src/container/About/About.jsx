import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
// import { images } from "../../constants";
import { urlFor, client } from "../../client";
// const about = [
//   {
//     title: "Web Development",
//     desc: "I am a good web developer",
//     imgUrl: images.about04,
//   },
//   {
//     title: "FrontEnd Developer",
//     desc: "I am a good frontEnd developer",
//     imgUrl: images.about02,
//   },
//   {
//     title: "BackEnd Developer",
//     desc: "I am a good backend developer",
//     imgUrl: images.about03,
//   },
//   {
//     title: "UI/UX",
//     desc: "I am a good UI/UX designer",
//     imgUrl: images.about01,
//   },
// ];
const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);
  return (
    <>
      <h2 className="head-text">
        I Know that
        <span> Good Development</span>
        <br />
        means<span> Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((item, idx) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile_item"
            key={item.title + idx}
          >
            <img src={urlFor(item.imgUrl)} alt={item.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {item.title}
            </h2>
            <p className="p-text" style={{ marginTop: 20 }}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
