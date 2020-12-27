import React from "react";
import "../styles.css";

function Search(props) {
  return (
    <div className="search-box-container">
      <label htmlFor="search box"></label>
      <input
        className="box-sides-circled"
        type="text"
        name=""
        placeholder="Search here"
        id=""
      />
      <i style={{ color: "white" }} class="fa fa-search"></i>
    </div>
  );
}
export default Search;
