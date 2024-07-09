import React, { useState } from "react";
import style from "./SearchForm.module.css";
import { IoSearch } from "react-icons/io5";

const SearchForm = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div className={style.searchBox}>
        <button className={style.btnSearch} onClick={handleSearch}>
          <IoSearch />
        </button>
        <input
          type="text"
          className={style.inputSearch}
          placeholder="Search Recipe or Blog..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
};

export default SearchForm;
