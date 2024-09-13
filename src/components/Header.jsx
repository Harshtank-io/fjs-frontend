import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex items-center justify-between w-full h-16 px-2 text-white bg-black rounded sm:px-5 py-11 ">
      <Link to="/">
      <div className="p-2 bg-yellow-500 rounded">
        <span className="text-xl font-bold text-black sm:text-3xl">FJS</span>
      </div>
      </Link>
      <h1 className="text-2xl font-bold tracking-widest text-yellow-400 transition-all ease-in md:text-7xl sm:text-5xl ">
        RATE YOUR FJS
      </h1>
    </div>
  );
}

export default Header;
