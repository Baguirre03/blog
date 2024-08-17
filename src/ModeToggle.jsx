import { useState } from "react";
import React from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function ModeToggle() {
  const [dark, setDark] = useState(localStorage.getItem("dark"));

  const darkModeHandler = () => {
    if (dark == "dark") {
      document.body.classList.remove("dark");
      setDark("");
      localStorage.setItem("dark", "");
    } else {
      document.body.classList.add("dark");
      setDark("dark");
      localStorage.setItem("dark", "dark");
    }
  };

  return (
    <button className="dark:bg-gray-900 bg-white" onClick={darkModeHandler}>
      {dark && (
        <IconContext.Provider value={{ color: "white" }}>
          <div>
            <FaSun />
          </div>
        </IconContext.Provider>
      )}
      {!dark && <FaMoon />}
    </button>
  );
}
