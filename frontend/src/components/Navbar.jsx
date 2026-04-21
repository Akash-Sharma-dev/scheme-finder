import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  // 👉 outside click close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sf-navbar">
      
      <div className="sf-nav-links">
        <Link to="/">Home</Link>
        <Link to="/check-scheme">Check Scheme</Link>
      </div>

      {!token ? (
        <div className="sf-nav-actions">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      ) : (
        <div className="sf-profile-wrap" ref={dropdownRef}>
          
          {/* Profile Circle */}
          <div
            className="sf-profile-circle"
            onClick={() => setOpen(!open)}
          >
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          {/* Dropdown */}
          {open && (
            <div className="sf-profile-dropdown">
              <p className="sf-profile-name">{user?.name}</p>

              <button onClick={() => navigate("/check-scheme")}>
                Check Scheme
              </button>

              <button className="sf-logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;