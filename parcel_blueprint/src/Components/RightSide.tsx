import React from "react";
import ListTable from "./RightSide/ListTable";
import SearchTable from "./RightSide/SearchTable";
const RightSide: React.FC = (props) => {
  return (
    <div className="w-1/4">
      <div className="stickyTable sticky top-0">
        <ListTable />
        <SearchTable />
      </div>
    </div>
  );
};

export default RightSide;
