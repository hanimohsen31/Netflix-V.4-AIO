import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

export const DarkMode = () => {

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (window.localStorage.getItem('theme') == 'true') return true;
    else return false;
  });
  return (
    <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={40}
      speed={3}

    />
  );
};