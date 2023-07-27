import React, { useState } from "react";
import ContentWrapper from "../../components/ContentWrapper";
import SwitchTabs from "../../components/switchTabs/SwitchTabs";
import useFetch from "../../hooks/useFetch";
import Carousel from "../../components/carousel/Carousel";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");

  const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="relative mb-16 ">
      <ContentWrapper className="flex items-center justify-between mb-5">
        <span className="text-lg text-white font-normal">Trending </span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
