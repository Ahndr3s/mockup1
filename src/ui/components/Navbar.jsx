import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import Hamburger from "../../assets/hamburger.svg";
// import Busca from "../../assets/busca.svg";
import { useState } from "react";
import "./NavbarStyles.css";


export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  // const [showSearch, setshowSearch] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  // const handleShowSearch = () => {
  //   setShowNavbar(!showSearch);
  // };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="menu-icon" onClick={handleShowNavbar}>
          <img src={Hamburger} />
        </li>
        <li className="logo">
          <Link to={"home"}>
            <img className="logo-img" src={logo} alt="" />
          </Link>
        </li>
        <div className={`nav-elements ${showNavbar && "active"}`}>
          <ul>
            <li className="nav-item" onClick={handleShowNavbar}>
              <NavLink className={"nav-link"} to={"/courses"}>
                <span className="link-text">Courses</span>
              </NavLink>
            </li>
            <li className="nav-item"onClick={handleShowNavbar}>
              <NavLink className={"nav-link"} to={"/about"}>
                <span className="link-text">About</span>
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <li className="search-icon" onClick={handleShowSearch}>
          <img src={Busca} />
        </li> */}
      </ul>
    </nav>
  );
};
