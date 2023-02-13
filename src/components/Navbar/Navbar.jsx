import React, { useState } from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
const navLinks = [
  { title: "home", link: "home" },
  { title: "about", link: "about" },
  { title: "projects", link: "work" },
  { title: "skills", link: "skills" },
  { title: "contact", link: "contact" },
  {
    title: "resume",
    link: "https://drive.google.com/uc?export=download&id=1E45u-pv1wtiAjsHpKSrey_gqQ0NxMYtf",
  },
];
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.profile1_logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {navLinks.map((item, i) => (
          <li className="ap__flex p-text" key={`link-${i}`}>
            <div />
            <a
              href={item.title === "resume" ? `${item.link}` : `#${item.link}`}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1E45u-pv1wtiAjsHpKSrey_gqQ0NxMYtf/view?usp=share_link"
                )
              }
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            // whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navLinks.map((item, i) => (
                <li key={`link-${i}-${item.title}`}>
                  <a
                    href={
                      item.title === "resume" ? `${item.link}` : `#${item.link}`
                    }
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1E45u-pv1wtiAjsHpKSrey_gqQ0NxMYtf/view?usp=share_link"
                      )
                    }
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
