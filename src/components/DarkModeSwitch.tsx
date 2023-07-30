"use client";

import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const handleThemeChange = () => {
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button onClick={handleThemeChange}>
      {mounted && currentTheme === "dark" && (
        <MdLightMode className="text-xl cursor-pointer hover:text-amber-500" />
      )}
      {mounted && currentTheme === "light" && (
        <BsFillMoonFill className="text-xl cursor-pointer hover:text-amber-500" />
      )}
    </button>
  );
};

export default DarkModeSwitch;
