import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import GitHubCalendar from "react-github-calendar";
import "./Gitstats.scss";

const Gitstats = () => {
  return (
    <>
      <h2 className="head-text">
        My GitHub <span>Stats</span> Section
      </h2>
      <div className="app__github-stats">
        <div className="w-full md:grid md:grid-cols-2 md:auto-rows-auto gap-x-5 gap-y-5 mt-5">
          <div className="app__github-stats-first">
            <div>
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=shivshankar0965"
                alt="Github Streak"
              />
            </div>
            <div>
              <img
                src="https://github-readme-stats.vercel.app/api?username=shivshankar0965&count_private=true&show_icons=true"
                alt="github stats"
              />
            </div>
          </div>
          <div className="app__github-stats-second">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=shivshankar0965&layout=compact"
              alt=""
            />
          </div>
        </div>
        <h2 className="head-text">
          My GitHub <span>Calender</span> Section
        </h2>

        <div className="app__github-calander">
          <GitHubCalendar
            username="shivshankar0965"
            blockSize={20}
            //   blockMargin={6}
            //   fontSize={18}
          />
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Gitstats, "app__testimonial"),
  "githubstats",
  "app__primarybg"
);
