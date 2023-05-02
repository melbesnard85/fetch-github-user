import React from "react";

function SearchBar({ username, setUsername }) {
  const onChange = (e) => {
    setUsername(e.target.value);
  };
  return (
    <div className="searchbar mb-4">
      <label className="block text-gray-700 font-bold mb-2">User Name : </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Search"
        type="text"
        onChange={(event) => {
          onChange(event);
        }}
        onKeyUp={(event) => {
          onChange(event);
        }}
        onPaste={(event) => {
          onChange(event);
        }}
      />
    </div>
  );
}

export default SearchBar;
