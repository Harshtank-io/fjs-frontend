import React, { useState } from "react";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    onSearch(e.target.value);
    setQuery(e.target.value);
  };

  return (
    <div className="flex items-center justify-center border-2 border-black rounded md:p-2">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="w-full px-2 py-1 md:px-4 md:py-1"
        placeholder="Search frameworks..."
      />
      {/* <button
        onClick={handleSearch}
        className="px-4 py-1 text-yellow-400 transition-all duration-300 ease-in-out bg-black border-2 border-black rounded hover:text-black hover:bg-white"
      >
        Search
      </button> */}
    </div>
  );
}

export default Search;
