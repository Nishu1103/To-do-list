import React, { useState } from "react";
import "./App.css";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <h1 className="logo">Nishant</h1>

      {/* Links for larger screens */}
        <div className={`links ${showMenu ? "show-menu" : ""}`}>
            <a href="/">Home</a>
            <a href="/create">About</a>
            {/* <a href="/">Theme</a> */}
        </div>

      {/* Three-dot menu for smaller screens */}
        <button className="dot-menu" onClick={() => setShowMenu(!showMenu)}>&#x22EE;</button>

      {/* Menu items for smaller screens */}
        {showMenu && (
            <div className={`links show-menu`}>
                <a href="/">Home</a>
                <a href="/create">About</a>
                {/* <a href="/">Theme</a> */}
            </div>
    )}
    </nav>
    );
};

export default Navbar;
