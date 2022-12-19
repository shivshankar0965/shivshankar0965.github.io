import React from "react";
const navLinks = [
  { title: "home", link: "home" },
  { title: "about", link: "about" },
  { title: "projects", link: "work" },
  { title: "skills", link: "skills" },
  { title: "contact", link: "contact" },
];
const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {navLinks.map((item, i) => (
        <a
          href={`#${item.link}`}
          key={item + i}
          className="app__navigation-dot"
          style={active === item.link ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
