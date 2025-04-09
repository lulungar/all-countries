import React from "react";
import cl from "./Search.module.css";

const Search = ({ value, onChangeSort, onChangeSearch }) => {
  return (
    <div className={cl.controls}>
      <input
        type="text"
        placeholder="Search for a country..."
        value={value.search}
        onChange={(e) => onChangeSearch(e.target.value)}
      />
      <select
        value={value.sort}
        onChange={(event) => onChangeSort(event.target.value)}
      >
        <option disabled hidden value="">
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Search;
