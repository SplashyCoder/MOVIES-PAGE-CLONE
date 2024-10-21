import React from "react";
import { MenuItemInterface } from "@/types/inferfaces";
import Link from "next/link";
function MenuItem({ title, address, Icon }: MenuItemInterface) {
  return (
    <Link className="hover:text-amber-500" href={address}>
      <Icon className="text-2xl sm:hidden " />
      <p className="uppercase hidden sm:inline text-sm  ">{title}</p>
    </Link>
  );
}

export default MenuItem;
