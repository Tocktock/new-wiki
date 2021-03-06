import React from "react";

interface Props {
  menuName: string;
  target: string;
}

const Menu: React.FC<Props> = (props) => {
  return <div className="menu m-5 text-white">{props.menuName}</div>;
};

export default Menu;
