import React from "react";
import Search from "./Search";
import Menu from "./mixins/Menu";
const Navbar: React.FC = (props) => {
  return (
    <div className="flex flex-col h-24 justify-center text-xl border-b-2 border-black bg-gray-800 ">
      {/* door will be some moving cat img !! */}
      <div className="flex items-center">
        <div className="door lg:w-1/4 xl:w-1/5 pl-6 pr-6">NewbieWiki</div>
        <Search />
        <Menu menuName="Doc" target="#" />
        <Menu menuName="Sign In" target="#" />
        <Menu menuName="Sign Up" target="#" />
      </div>
    </div>
  );
};

export default Navbar;
