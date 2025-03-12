import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">Ram</p>
        <span>.</span>
      </div>

      {/* Apply dynamic class based on state */}
      <div className={`nav-menu ${menuOpen ? "responsive" : ""}`} id="myNavMenu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <a href="#home" className="nav-link active-link" onClick={closeMenu}>Home</a>
            <div className="circle" />
          </li>
          <li className="nav_list">
            <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
            <div className="circle" />
          </li>
          <li className="nav_list">
            <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
            <div className="circle" />
          </li>
          <li className="nav_list">
            <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
            <div className="circle" />
          </li>
        </ul>
      </div>

      <div className="nav-button">
      <button
  className="btn"
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/assets/images/Ram_new.pdf";
    link.setAttribute("download", "Ram_Thakur_CV.pdf"); // Sets a custom file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  Download CV <i className="uil uil-file-alt" />
</button>
      </div>

      {/* Menu toggle button */}
      <div className="nav-menu-btn" onClick={toggleMenu}>
        <i className="uil uil-bars" />
      </div>
    </nav>
  );
};

export default Navbar;
