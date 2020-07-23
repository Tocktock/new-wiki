import React from "react";
import Search from "./Search";
import Menu from "./mixins/Menu";
const Navbar: React.FC = (props) => {
  return (
    <div className="bg-manyangOrange-100 flex justify-center align-middle content-center text-xl">
      {/* door will be some moving cat img !! */}
      <div className="door m-5 text-white">NewbieWiki</div>
      <Search />
      <Menu menuName="Doc" target="#" />
      <Menu menuName="Sign In" target="#" />
      <Menu menuName="Sign Up" target="#" />
    </div>
  );
};

export default Navbar;
