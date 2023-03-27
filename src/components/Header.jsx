import React from "react";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import logo from "../assets/logo.png";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-w-full absolute mx-auto">
      <nav className="flex justify-between items-center p-3">
        <img
          src={logo}
          alt="website logo"
          className="w-1/3 lg:w-2/12 md:w-1/5"
        />
        <div onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <MdWbSunny className="text-2xl cursor-pointer" />
          ) : (
            <MdNightsStay className="text-2xl cursor-pointer" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
