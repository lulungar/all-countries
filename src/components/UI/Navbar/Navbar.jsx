import React from "react";
import cl from "./Navbar.module.css";
// import "../../../styles/App.css";

const Navbar = ({ setDarkMode }) => {
  return (
    <div className={cl.navbar}>
      <h1>Where in the world?</h1>
      <div
        className={cl.dark_mode}
        onClick={() => setDarkMode((prev) => !prev)}
      >
        <h2>Dark Mode</h2>
      </div>
    </div>
  );
};

export default Navbar;
