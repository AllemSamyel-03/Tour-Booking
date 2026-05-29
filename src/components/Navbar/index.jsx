import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiCalendar, FiClock, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import { toast } from "react-toastify";
import AuthContext from "../../context/AuthContext";
import logo from "../../assets/firstcry-logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = () => {
    logoutUser();
    toast.success("Logged out successfully.");
    navigate("/login", { replace: true });
  };

  const closeMenu = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <Link className="logo-link" to="/" onClick={closeMenu}>
        <img
          src={logo}
          alt="firstcry intelli education"
          className="site-logo"
        />
      </Link>
      <button
        className="menu-button"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      <div className={`nav-links ${isOpen ? "show-menu" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/booking" onClick={closeMenu}>
          <FiCalendar /> Book Tour
        </NavLink>
        <NavLink to="/history" onClick={closeMenu}>
          <FiClock /> History
        </NavLink>
        <div className="user-pill">
          {currentUser?.fullName?.split(" ")[0] || "Parent"}
        </div>
        <button className="logout-button" type="button" onClick={onLogout}>
          <FiLogOut /> Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
