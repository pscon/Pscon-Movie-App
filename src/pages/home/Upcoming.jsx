import React, { useState } from "react";
import ContentWrapper from "../../components/ContentWrapper";
import SwitchTabs from "../../components/switchTabs/SwitchTabs";
import useFetch from "../../hooks/useFetch";
import Carousel from "../../components/carousel/Carousel";

const UpComing = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/upcoming`);

  return (
    <div className="relative mb-16 ">
      <ContentWrapper className="flex items-center justify-between mb-5">
        <span className="text-lg text-white font-normal">
          Up Coming Movies{" "}
        </span>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default UpComing;
