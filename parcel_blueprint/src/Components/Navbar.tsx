import React from "react";
import Search from "./Search";
import Menu from "./mixins/Menu";
const Navbar: React.FC = (props) => {
  return (
    <div className="flex justify-center align-middle content-center text-xl border-b-1 bg-orange-200">
      {/* door will be some moving cat img !! */}
      <div className="door m-5">NewbieWiki</div>
      <Search />
      <Menu menuName="Doc" target="#" />
      <Menu menuName="Sign In" target="#" />
      <Menu menuName="Sign Up" target="#" />
    </div>
  );
};

export default Navbar;
