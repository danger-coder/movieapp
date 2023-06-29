import React from "react";

const SingleMovie = ({ image, title, Imdb }) => {
  return (
    <div className="cursor-pointer">
      <div className="h-[290px] bg-red-700 overflow-hidden">
        <img
          className="w-full h-[100%] object-fill hover:scale-[105%] transition-all duration-300 ease-out"
          src={image}
          alt="movies image"
        ></img>
      </div>
      <div className="pt-[15px]">
        <h1 className="text-[18px] font-semibold">{title}</h1>
        <p className="text-[16px] text-white/[0.7]">IMdB:{Imdb}</p>
      </div>
    </div>
  );
};

export default SingleMovie;
