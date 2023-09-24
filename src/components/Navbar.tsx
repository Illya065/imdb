import React from "react";
import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <div className="flex justify-center items-center bg-amber-100 dark:bg-gray-600">
      <NavbarItem title="Trending" param="trending" />
      <NavbarItem title="Top Rated" param="toprated" />
    </div>
  );
}

export default Navbar;
