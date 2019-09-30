import React from "react";
import "./SearchBox.css";

const SearchBox = props => {
  return (
    <input
      className="search-box"
      type="search"
      placeholder="search monsters"
      onChange="{props.onSearchChange}"
    />
  );
};

export default SearchBox;
