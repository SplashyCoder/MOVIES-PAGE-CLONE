"use client";
import React from "react";
import { MenuItemInterface, NavBarItemInterface } from "@/types/interfaces";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const MenuItem = ({ title, address, Icon }: MenuItemInterface) => {
  return (
    <Link className="hover:text-amber-500" href={address}>
      {Icon}
      <p className="uppercase hidden sm:inline text-sm  ">{title}</p>
    </Link>
  );
};

export const NavBarItem = ({
  title,
  param,
  fetchFunction,
}: NavBarItemInterface) => {
  const searchParams = useSearchParams();

  return (
    <button onClick={fetchFunction} className="p-2">
      <Link href={`/?genre=${param}`} className="hover:text-amber-500">
        <p className="uppercase text-sm">{title}</p>
      </Link>
    </button>
  );
};
