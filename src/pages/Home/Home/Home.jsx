import React from "react";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import PopularClassesSection from "../PopularClassesSection/PopularClassesSection";
import MyComponent from "../MyComponent/MyComponent";

const Home = () => {
  return (
    <div>
      <section class="bg-yellow-200">
        <div class="container mx-auto py-8">
          <h1 class="text-4xl font-bold text-center text-gray-900">
            KraftCamp
          </h1>
          <h2 class="text-2xl font-semibold text-center text-gray-700 mt-4">
            Explore the Art of Crafting
          </h2>
        </div>
      </section>
      <Banner></Banner>
      <Info></Info>
      <PopularClassesSection></PopularClassesSection>
      <MyComponent></MyComponent>
    </div>
  );
};

export default Home;
