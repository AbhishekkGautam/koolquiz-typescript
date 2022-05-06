import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

export const Navbar = () => {
  const {
    state: { isLoggedIn },
    logoutUser,
  } = useAuth();
  const { pathname } = useLocation();

  return (
    <nav className="navbar nav-ecommerce">
      <div className="navbar-section">
        <button className="nav-menu-btn">
          <span className="material-icons">menu</span>
        </button>
        <Link className="navbar-brand" to="/">
          Kool Quiz
        </Link>
      </div>
      <div className="navbar-section">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="fas fa-moon" aria-hidden="true"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <i className="material-icons-outlined">person</i>
            </Link>
          </li>
        </ul>
        {pathname === "/login" || pathname === "/signup" ? null : isLoggedIn ? (
          <button
            onClick={logoutUser}
            className="btn btn-primary btn-sm login-btn"
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn btn-primary btn-sm login-btn">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};
