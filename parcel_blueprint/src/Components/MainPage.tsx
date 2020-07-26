import React from "react";
import Search from "./Search";

const MainPage: React.FC = (props) => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center content-center">
      <a href="/">
        <span className="text-6xl font-crimsonText italic text-pink-400 font-semibold">
          {" "}
          Newbie Wiki{" "}
        </span>
      </a>
      <span className="font-crimsonText italic text-2xl text-gray-600 font-semibold m-5">
        For beginer, Want to Learn some !!
      </span>
      <form action="" method="get" className="w-1/5 flex">
        <input className="rounded-lg w-full h-8 shadow-md border" type="text" />
        <button className="text-gray-500 rounded-full border w-8 border-white">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default MainPage;
