import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../components/lazyLoadImage/Img";
import ContentWrapper from "../../components/ContentWrapper";

const HeroBanner = () => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackgroundImage(bg);
  }, [data]);

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const gradientStyle = {
    background:
      "linear-gradient(180deg, rgba(4, 21, 45, 0) 0%, #04152d 79.17%)",
  };

  return (
    <div className="w-full h-[450px] bg-black flex items-center relative md:h-[700px]">
      {!loading && (
        <div className="w-full h-full absolute top-0 left-0 opacity-[0.5] overflow-hidden ">
          <Img src={backgroundImage} />
        </div>
      )}
      <div
        className="w-full h-[250px] absolute bottom-0 left-0"
        style={gradientStyle}
      ></div>
      <ContentWrapper className="">
        <div className="flex flex-col items-center text-white text-center relative mx-auto max-w-[800px]">
          <span className="text-5xl font-bold mb-2 md:text-7xl">Welcome.</span>
          <span className="text-xl font-medium mb-10 md:text-2xl ">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="flex items-center w-full justify-center">
            <input
              className="h-12 w-full text-sm rounded-l-2xl bg-white text-black px-4 border-none outline-none md:text-xl md:px-[30px] md:h-16"
              type="text"
              placeholder="Search for movies or tv shows..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={handleSearch}
            />
            <button className="w-[100px] h-12 text-white bg-gradient-custom border-0 outline-0 rounded-r-2xl  text-lg cursor-pointer md:h-16 md:text-xl md:w-[150px]">
              Search
            </button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
