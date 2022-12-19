import React from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
// import { urlFor, client } from "../../client";
import "./Work.scss";
import { images } from "../../constants";
const projects = [
  {
    id: 1,
    poster: images.shine_shot,
    title: "Shine.com clone",
    description:
      "Shine.com is a job-searching website. It connects jobseekers and recruiters by accurately matching candidate profiles to the relevant job.",
    stacksIcons: [
      { icon: images.react, label: "React" },
      { icon: images.css, label: "CSS" },
      { icon: images.javascript, label: "Javascript" },
      { icon: images.chakra_ui, label: "ChakraUI" },
    ],
    githubLink: "https://github.com/shivshankar0965/large-house-6330/",
    deployed: "https://super-cool-site-by-shivshankar0965.netlify.app/",
  },
  {
    id: 2,
    poster: images.booking_shot,
    title: "Booking.com clone",
    description:
      "Booking.com is a travel agency for lodging reservations and other travel products.",
    stacksIcons: [
      { icon: images.react, label: "React" },
      { icon: images.html, label: "HTML" },
      { icon: images.css, label: "CSS" },
      { icon: images.javascript, label: "Javascript" },
    ],
    githubLink: "https://github.com/shivshankar0965/dusty-jewel-3645",
    deployed: "https://magical-toffee-cdb307.netlify.app/",
  },
  {
    id: 3,
    poster: images.geekbuying_shot,
    title: "Geekbuying.com clone",
    description:
      "It is an E-commerce platforms selling a wide range of consumer electronic gadgets.",
    stacksIcons: [
      { icon: images.html, label: "HTML" },
      { icon: images.css, label: "CSS" },
      { icon: images.javascript, label: "Javascript" },
    ],
    githubLink: "https://github.com/shivshankar0965/plucky-cub-1995",
    deployed: "https://stately-tiramisu-812d49.netlify.app/",
  },
];
const Work = () => {
  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>
      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {projects.map((project, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={project.poster} alt={project.title} />
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{project.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {project.description}
              </p>

              <div className="app__work-labels-container">
                <div className="app__work-techs">
                  {project.stacksIcons.map((icon, i) => (
                    <div className="app__work-tech">
                      <div className="app__work-img">
                        <img src={icon.icon} alt={`${i}`} />
                      </div>
                      <span>{icon.label}</span>
                    </div>
                  ))}
                </div>
                <div className="app__work-redirects">
                  <a
                    href={project.deployed}
                    target="_blank"
                    rel="noreferrer"
                    alt="project_img"
                  >
                    <motion.div
                      // whileHover={{ opacity: [1, 0.9] }}
                      // whileInView={{ scale: [0, 1] }}
                      // transition={{
                      //   duration: 0.25,
                      // }}
                      className="app__project-link-icons app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    alt="project_img"
                  >
                    <motion.div
                      // whileHover={{ opacity: [1, 0.9] }}
                      // whileInView={{ scale: [0, 1] }}
                      // transition={{
                      //   duration: 0.25,
                      // }}
                      className="app__project-link-icons link__icon-purple app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
