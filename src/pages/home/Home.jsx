import React from "react";
import HeroBanner from "./HeroBanner";
import Trending from "./Trending";
import Popular from "./Popular";
import TopRated from "./TopRated";
import UpComing from "./Upcoming";

const Home = () => {
  return (
    <div className="">
      <HeroBanner />

      <div>
        <Trending />
        <TopRated />
        <Popular />
        <UpComing />
      </div>
    </div>
  );
};

export default Home;
