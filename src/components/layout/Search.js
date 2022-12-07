import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <form onSubmit={searchHandler}>
      <div className="input-group">
        <input
          type="text"
          id="search_field"
          className="form-control"
          placeholder="Enter Product Name ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Link to={"#"} id="cart">
          <i className="fa fa-search" aria-hidden="true"></i>
        </Link>
      </div>
    </form>
  );
};

export default Search;
