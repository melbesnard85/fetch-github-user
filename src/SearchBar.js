import React from "react";

function SearchBar({ username, setUsername }) {
  const onChange = (e) => {
    setUsername(e.target.value);
  };
  return (
    <div className="searchbar max-w-md mx-auto mb-4 mt-20">
      <label className="block text-gray-700 mb-8 text-2xl font-bold text-center">Fetch Github User </label>
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
