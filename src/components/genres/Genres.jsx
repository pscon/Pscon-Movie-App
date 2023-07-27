import React from "react";
import { useSelector } from "react-redux";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);

  return (
    <div className="hidden relative  gap-1 md:flex">
      {data.map((g) => {
        if (!genres[g]?.name) return; //
        return (
          <div
            key={g}
            className="bg-secondary-pink p-2 text-[10px] text-white rounded-md"
          >
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
