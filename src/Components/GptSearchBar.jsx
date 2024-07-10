import React from "react";
import lang from "../Utils/languageconstant";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center ">
      <form className=" w-1/2 grid grid-cols-12  bg-black">
        <input
          type="text"
          placeholder={lang.telugu.gptSearchPlaceholder}
          className=" p-4 m-4 col-span-9"
        />
        <button className="col-span-3 m-4 px-4 py-2 bg-red-600 text-white font-bold rounded-lg">
          {lang.telugu.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
