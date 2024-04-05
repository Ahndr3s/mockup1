import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import logo from "../../../assets/logo.png";
import "./NavbarStyles.css";
import { AuthContext } from "../../context/AuthContext";

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { logout } = useContext(AuthContext);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleShowSearch = () => {
    navigate("/SearchPage", {
      replace: true,
    });
    handleShowNavbar();
  };

  const { user, logged } = useContext(AuthContext);
  // console.log(user);
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("login", {
      replace: true,
    });
    handleShowNavbar();
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="menu-icon" onClick={handleShowNavbar}>
          <FontAwesomeIcon icon={faBars} size="2x" style={{ color: `#fff` }} />
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
                <span className="link-text">Cursos</span>
              </NavLink>
            </li>
            <li className="nav-item hidden-item" onClick={handleShowNavbar}>
              <NavLink className={"nav-link"} to={"/blog"}>
                <span className="link-text">Blog</span>
              </NavLink>
            </li>
            <li className="nav-item" onClick={handleShowNavbar}>
              <NavLink className={"nav-link"} to={"/about"}>
                <span className="link-text">Nosotros</span>
              </NavLink>
            </li>
            {logged && (
              <>
                <li className="nav-item" onClick={handleShowNavbar}>
                  <NavLink className={"nav-link"} to={"/profile"}>
                    <span className="link-text">Perfil</span>
                  </NavLink>
                </li>
                <li className="nav-item" onClick={handleShowNavbar}>
                  <NavLink className={"nav-link"} to={"/myCourses"}>
                    <span className="link-text">Mis Cursos</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <span className="link-text">{user?.email}</span>
                </li>
              </>
            )}
            <li className="nav-item" onClick={onLogout}>
              <NavLink className={"nav-link"} to={"/login"}>
                <span className="link-text">Cerrar Sesión</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </ul>
      <div className="search-btn" onClick={handleShowSearch}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="2x"
          style={{ color: `#fff` }}
        />
      </div>
    </nav>
  );
};
