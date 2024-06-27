import React, { useState } from "react";
import Logo from "../assets/SALON_LOGO.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar({ isLogged, setIsLogged, setUser, user }) {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    setIsLogged(false);
    setUser({});
    navigate("/");
  };

  const gotoBooks = () => {
    console.log("/myBooks");
    navigate("/myBooks");
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Logo" />
        <div className="hiddenLinks">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link
            to="/services"
            className={location.pathname === "/services" ? "active" : ""}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
          {!isLogged && (
            <Link
              to="/login"
              className={location.pathname === "/login" ? "active" : ""}
            >
              Login
            </Link>
          )}
          {isLogged && (
            <Link
              to="/services/myBooks"
              onClick={gotoBooks}
              className={
                location.pathname === "/services/myBooks" ? "active" : ""
              }
            >
              My Bookings
            </Link>
          )}
          {isLogged && (
            <Link
              onClick={handleLogout}
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Logout
            </Link>
          )}
        </div>
      </div>
      <div className="rightSide">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/services"
          className={location.pathname === "/services" ? "active" : ""}
        >
          Services
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          About
        </Link>
        {!isLogged && (
          <Link
            to="/login"
            className={location.pathname === "/login" ? "active" : ""}
          >
            Login
          </Link>
        )}
        {isLogged && (
          <Link
            to="/services/myBooks"
            onClick={gotoBooks}
            className={
              location.pathname === "/services/myBooks" ? "active" : ""
            }
          >
            My Bookings
          </Link>
        )}
        {isLogged && (
          <Link
            onClick={handleLogout}
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            Logout
          </Link>
        )}
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
