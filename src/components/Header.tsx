import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between mx-2 max-w-6xl py-6 sm:mx-auto">
      <section className="flex items-center">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </section>

      <section>
        <Link href="/">
          <h2 className="text-2xl ">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDB
            </span>
            <span className="text-2xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </section>
    </header>
  );
};

export default Header;
