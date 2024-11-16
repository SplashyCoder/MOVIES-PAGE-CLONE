"use client";

import React, { useState } from "react";
import { MenuItem, NavBarItem } from "@/components/MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

const NavBar = () => {
  const { setData } = useDataContext();

  const [url, setUrl] = useState("/movie/top_rated");
  const { data, loading } = useFetch(url);

  const handleFetchTopRated = () => {
    setUrl("/movie/top_rated");
  };

  const handleFetchPopular = () => {
    setUrl("/trending/all/week");
  };
  setData(data);
  console.log(data);

  return (
    <nav>
      <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <div className="flex gap-4 ">
          <MenuItem
            title="home"
            address="/"
            Icon={<AiFillHome className="text-2xl sm:hidden " />}
          />
          <MenuItem
            title="about"
            address="/about/"
            Icon={<BsFillInfoCircleFill className="text-2xl sm:hidden " />}
          />
        </div>
        <div className="flex items-center gap-4 ">
          <DarkModeSwitch />
          <Link href={"/"} className=" flex gap-1 items-center">
            <span className="text-2xl font-bo bg-amber-500 py-1 px-2 rounded-lg ">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline ">Clone</span>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 dark:bg-slate-600 bg-amber-200">
        <NavBarItem
          title="Top rated"
          param="fetchTrending"
          fetchFunction={handleFetchTopRated}
        />
        <NavBarItem
          title="Trending "
          param="fetchTopRated"
          fetchFunction={handleFetchPopular}
        />
      </div>
    </nav>
  );
};

export default NavBar;
import Header from "@/components/NavBar";
import useFetch from "@/app/hooks/useFetch";
import { useDataContext } from "@/context/DataContext";
