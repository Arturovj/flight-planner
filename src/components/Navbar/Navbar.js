import React from "react";
import logo from "./logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="logo" className="logo" />
      </div>
    </>
  );
}
