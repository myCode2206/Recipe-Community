import React from "react";
import style from "./SearchForm.module.css";
import { IoSearch } from "react-icons/io5";
const SearchForm = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div className={style.searchBox}>
        <button className={style.btnSearch}>
          <IoSearch />
        </button>
        <input
          type="text"
          className={style.inputSearch}
          placeholder="Search Recipe..."
        />
      </div>
    </div>
  );
};

export default SearchForm;
