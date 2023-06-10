import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import Switch from "react-switch";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import PopularClassesSection from "../PopularClassesSection/PopularClassesSection";
import MyComponent from "../MyComponent/MyComponent";
import InstructorsSection from "../InstructorsSection/InstructorsSection";

const Home = () => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: "translateY(-1em)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000, delay: 500 },
  });

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <div>
      <section className="bg-yellow-200">
        <div className="container mx-auto py-8">
          <animated.h1
            className={`text-4xl font-bold text-center ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
            style={animationProps}
          >
            KraftCamp
          </animated.h1>
          <animated.h2
            className={`text-2xl font-semibold text-center ${
              theme === "dark" ? "text-white" : "text-gray-700"
            } mt-4`}
            style={animationProps}
          >
            Explore the Art of Crafting
          </animated.h2>
        </div>
      </section>

      <div className="flex justify-center mt-4">
        <Switch
          checked={theme === "dark"}
          onChange={handleToggle}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={24}
          uncheckedIcon={false}
          checkedIcon={false}
          height={16}
          width={48}
          className="react-switch"
        />
      </div>

      <Banner />
      <Info />
      <PopularClassesSection />
      <MyComponent />
      <InstructorsSection />
    </div>
  );
};

export default Home;
