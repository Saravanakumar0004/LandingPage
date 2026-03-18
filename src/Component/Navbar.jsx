import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        // reserved for future dropdown
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">

      {/* Logo */}
      <Link className="logo" to="/">
        <img
          src="https://hbnlogistics.com/wp-content/uploads/2025/06/logo_header.png"
          alt="HBN Logistics"
        />
      </Link>

      {/* Nav Links */}
      <ul className="nav-links">
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className={location.pathname.startsWith("/services") ? "active" : ""}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact Us
          </Link>
        </li>
      </ul>

      {/* CTA */}
      <Link className="quote-btn" to="/contact">
        Get A Quote <span className="arrow">→</span>
      </Link>

    </nav>
  );
}