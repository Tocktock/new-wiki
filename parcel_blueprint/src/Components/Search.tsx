import React from "react";

const Search: React.FC = (props) => {
  return (
    <form
      className="w-1/2 flex justify-center content-center m-3"
      action=""
      method="get"
    >
      <input className="pl-2 mr-2 w-1/2" type="text" />
      <button className="btn__search text-white border-solid border-2">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default Search;
