import React from "react";
import Header from "./Header";
import Products from "./Products";
import Slider from "./Slider";
const Home = () => {
  return (
    <section>
      <Header />
      <div className="w-full min-h-[90vh]">
        <Slider />
        <Products />
      </div>
    </section>
  );
};
export default Home;
