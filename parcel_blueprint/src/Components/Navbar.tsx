import React from "react";
import Search from "./Search";
import Menu from "./mixins/Menu";

interface Props {
  mainState: boolean;
  login: boolean;
}

const Navbar: React.FC<Props> = (props) => {
  return (
    <div className="fixed top-1 z-50 w-full m-auto text-xl border-b-2 border-black bg-gray-800 flex content-center justify-end items-center ">
      {/* door will be some moving cat img !! */}
      {props.mainState && (
        <>
          <Menu menuName="Doc" target="#" />
          {!props.login && (
            <>
              <Menu menuName="Sign In" target="#" />
              <Menu menuName="Sign Up" target="#" />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Navbar;
