import React from "react";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import PopularClassesSection from "../PopularClassesSection/PopularClassesSection";
import MyComponent from "../MyComponent/MyComponent";
import InstructorsSection from "../InstructorsSection/InstructorsSection";
import { useSpring, animated } from "react-spring";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: "translateY(-1em)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000, delay: 500 },
  });



// for theme
const [theme, setTheme] = useState(
  localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
);

  // update state on toggle
const handleToggle = (e) => {
  if (e.target.checked) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
};

// set theme state in localstorage on mount & also update localstorage on state change
useEffect(() => {
  localStorage.setItem("theme", theme);
  const localTheme = localStorage.getItem("theme");
  // add custom data-theme attribute to html tag required to update theme using DaisyUI
  document.querySelector("html").setAttribute("data-theme", localTheme);
}, [theme]);

  return (
    <div>
      <section className="bg-yellow-200">
        <div className="container mx-auto py-8">
          <animated.h1
            className="text-4xl font-bold text-center text-gray-900"
            style={animationProps}
          >
            KraftCamp
          </animated.h1>
          <animated.h2
            className="text-2xl font-semibold text-center text-gray-700 mt-4"
            style={animationProps}
          >
            Explore the Art of Crafting
          </animated.h2>
        </div>
      </section>
      <Banner></Banner>
      <Info></Info>
      <PopularClassesSection></PopularClassesSection>
      <MyComponent></MyComponent>
      <InstructorsSection></InstructorsSection>
    </div>
  );
};

export default Home;
