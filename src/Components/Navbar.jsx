import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/arin_logo.png";
import { FaAlignJustify } from "react-icons/fa6";
import { Menu, Dropdown } from "antd";
import "../scss/Navbar.scss";

const menuStyle = {
  textDecoration: "none",
  fontSize: "17px",
  color: "#fff" 
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceMenu, setIsServiceMenu] = useState(false);
  const [isMediaMenu, setIsMediaMenu] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const [isMediaMenuOpen, setIsMediaMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleServiceMenuOpen = () => {
    setIsServiceMenuOpen(true);
  };

  const handleServiceMenuClose = () => {
    setIsServiceMenuOpen(false);
  };

  // const handleMediaMenuOpen = () => {
  //   setIsMediaMenuOpen(true);
  // };

  // const handleMediaMenuClose = () => {
  //   setIsMediaMenuOpen(false);
  // };
  

  const serviceDropDown = (
    <Menu visible={isServiceMenuOpen} onClick={handleServiceMenuClose} style={{backgroundColor: "orange"}}>
      <Menu.Item key="shipping">
        <NavLink
          to={"/services/shipping"}
          onClick={toggleMenu}
          style={menuStyle}
        >
          SHIPPING
        </NavLink>
      </Menu.Item>
      <Menu.Item key="delivery">
        <NavLink
          to={"/services/pick-up"}
          onClick={toggleMenu}
          style={menuStyle}
        >
          PICKUP AND DELIVERY
        </NavLink>
      </Menu.Item>
      <Menu.Item key="packaging">
        <NavLink
          to={"/services/package"}
          onClick={toggleMenu}
          style={menuStyle}
        >
          PACKAGING
        </NavLink>
      </Menu.Item>
      <Menu.Item key="door">
        <NavLink
          to={"/services/door-to-door"}
          onClick={toggleMenu}
          style={menuStyle}
        >
          DOOR TO DOOR
        </NavLink>
      </Menu.Item>
      <Menu.Item key="warehouse">
        <NavLink
          to={"/services/warehouse"}
          onClick={toggleMenu}
          style={menuStyle}
        >
          WAREHOUSE FACILITY(USA)
        </NavLink>
      </Menu.Item>
    </Menu>
  );

  return (
    <nav id="navbar">
      <NavLink to={"/"}>
        <img src={logo} alt="no image" />
      </NavLink>
      <div className="container">

     
      <div className="media-container">
        <p><strong>Toll Free Number: 8454354234</strong></p>
        <div className="socialLinks">
          <a href="https://facebook.com"><i className="bi bi-facebook"></i></a>
          <a href="https://whatsapp.com"><i className="bi bi-whatsapp"></i></a>
          <a href="https://instagram.com"><i className="bi bi-instagram"></i></a>
          <a href="https://telegram.com"><i className="bi bi-telegram"></i></a>
          <a href="hpps://twitter.com"><i className="bi bi-twitter"></i></a>

        </div>

      </div>
      <div className="content-container">
        <div className="content">
          <ul
            className={`links ${isMenuOpen ? "open" : ""}`}
            style={{ zIndex: "3" }}
          >
            <li>
              <NavLink to={"/"} onClick={toggleMenu}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"} onClick={toggleMenu}>
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"#"}
                onMouseEnter={handleServiceMenuOpen}
                // onMouseEnter={() => setIsServiceMenu(true)}
                // onMouseLeave={() => setIsServiceMenu(false)}
              >
                <Dropdown
                  overlay={serviceDropDown}
                  //  open={isServiceMenu}
                  placement="bottomLeft"
                >
                  <span>
                    SERVICES{" "}
                    <i
                      className="bi bi-caret-down-fill"
                      style={{ fontSize: "12px" }}
                    ></i>
                  </span>
                </Dropdown>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/latestBlogs"} onClick={toggleMenu}>
                BLOGS
              </NavLink>
            </li>
            <li>
              <NavLink to={"/clients"} onClick={toggleMenu}>
                CLIENTS
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} onClick={toggleMenu}>
                CONTACT US
              </NavLink>
            </li>
          </ul>
          <div className="nav-btn" onClick={toggleMenu}>
            <FaAlignJustify />
          </div>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
