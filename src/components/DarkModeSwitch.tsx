"use client";

import React, { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

const DarkModeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currenTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => setMounted(true), []);

  return (
    <div>
      {mounted &&
        (currenTheme === "dark" ? (
          <MdDarkMode
            onClick={() => setTheme("ligth")}
            className="text-xl cursor-pointer hover:text-amber-500"
          />
        ) : (
          <MdLightMode
            onClick={() => setTheme("dark")}
            className="text-xl cursor-pointer hover:text-amber-500"
          />
        ))}
    </div>
  );
};

export default DarkModeSwitch;
