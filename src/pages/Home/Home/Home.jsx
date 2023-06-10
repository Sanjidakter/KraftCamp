import React from "react";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import PopularClassesSection from "../PopularClassesSection/PopularClassesSection";
import MyComponent from "../MyComponent/MyComponent";
import InstructorsSection from "../InstructorsSection/InstructorsSection";
import { useSpring, animated } from "react-spring";

const Home = () => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: "translateY(-1em)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000, delay: 500 },
  });

  return (
    <div>
      <section class="bg-yellow-200">
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
