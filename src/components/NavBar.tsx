import React from "react";
import { MenuItem, NavBarItem } from "@/components/MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

const NavBar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <div className="flex gap-4 ">
          <MenuItem title="home" address="/" Icon={AiFillHome} />
          <MenuItem
            title="about"
            address="/about/"
            Icon={BsFillInfoCircleFill}
          />
        </div>
        <div className="flex items-center gap-4 ">
          <DarkModeSwitch />
          <Link href={"/"} className=" flex gap-1 items-center">
            <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg ">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline ">Clone</span>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 dark:bg-slate-600 bg-amber-200">
        <NavBarItem title="Top rated" address={"/"} />
        <NavBarItem title="Trending " address={"/"} />
      </div>
    </nav>
  );
};

export default NavBar;
import Header from "@/components/NavBar";
