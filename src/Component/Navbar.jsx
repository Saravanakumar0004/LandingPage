import { useState, useEffect, useRef } from "react";




export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeService, setActiveService] = useState("Packers & Movers");
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      {/* Logo */}
      <a className="logo" href="#">
       <img src="https://hbnlogistics.com/wp-content/uploads/2025/06/logo_header.png" alt="" />
      </a>

      {/* Nav Links */}
      <ul className="nav-links">
        <li><a href="/">Home</a></li>

        <li><a href="/services">Services</a></li>

        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>

      {/* CTA */}
      <a className="quote-btn" href="#">
        Get A Quote <span className="arrow">→</span>
      </a>
    </nav>
  );
}