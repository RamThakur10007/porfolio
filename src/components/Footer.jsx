import React from "react";

const Footer = () => {
  return (<div>
     {/* --------------- FOOTER --------------- */}
     <footer>
      <div className="top-footer">
        <p>Ram Thakur </p>
      </div>
      <div className="middle-footer">
        <ul className="footer-menu">
          <li className="footer_menu_list">
            <a href="#home">Home</a>
          </li>
          <li className="footer_menu_list">
            <a href="#about">About</a>
          </li>
          <li className="footer_menu_list">
            <a href="#projects">Projects</a>
          </li>
          <li className="footer_menu_list">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-social-icons">
      <a href="https://www.linkedin.com/in/ram-thakur-ram214/" target="_blank">
              
              <div className="icon">
                <i className="uil uil-linkedin-alt" />
              </div>
              </a>

              <a href="https://github.com/RamThakur10007" target="_blank" >
              
              <div className="icon">
                <i className="uil uil-github-alt" />
              </div>
              </a>

              <a href="https://www.instagram.com/ram_thakur_11/" target="_blank">
              <div className="icon">
                <i className="uil uil-instagram" />
              </div>
              </a>

              <a href="https://x.com/ThakurR93539886?t=qSUWRTVUNcAdKoTdjChixQ&s=09" target="_blank" >
              
              <div className="icon">
                <i className="uil uil-twitter" />
              </div>
              </a>
      </div>
      <div className="bottom-footer">
        <p>
          Copyright ©{" "}
          <a href="#home" style={{ textDecoration: "none" }}>
            Ram Thakur
          </a>{" "}
          - All rights reserved
        </p>
      </div>
    </footer>
  </div>);
};

export default Footer;
