import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";

import "./Header.scss";
import { BsCloudDownload } from "react-icons/bs";
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
const Header = () => {
  const handleDownloadLink = () => {
    const path = `https://drive.google.com/uc?export=download&id=1E45u-pv1wtiAjsHpKSrey_gqQ0NxMYtf`;
    window.location.href = path;
  };

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Shiv Shankar</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">
              Passionate full-stack web developer with hands-on experience in
              developing scalable websites/applications.{" "}
            </p>
            <p className="p-text">
              Using a wide range of front-end and back-end skills like HTML,
              CSS, React, Express, Node, Chakra, MongoDB, etc
            </p>
          </div>
          <motion.div
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className={` resume-download-btn app__flex`}
            onClick={handleDownloadLink}
          >
            <span>Resume</span> <BsCloudDownload />
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile2} alt="profile-bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.react, images.redux, images.sass].map((item, i) => (
          <div className="circle-cmp app__flex" key={`circle-${i}`}>
            <img src={item} alt={"circle"} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
