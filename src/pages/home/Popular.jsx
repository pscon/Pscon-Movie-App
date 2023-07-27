import React, { useState } from "react";
import ContentWrapper from "../../components/ContentWrapper";
import SwitchTabs from "../../components/switchTabs/SwitchTabs";
import useFetch from "../../hooks/useFetch";
import Carousel from "../../components/carousel/Carousel";

const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/popular`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
    console.log("tab changed");
  };
  return (
    <div className="relative mb-16 ">
      <ContentWrapper className="flex items-center justify-between mb-5">
        <span className="text-lg text-white font-normal">What's Popular </span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default Popular;
