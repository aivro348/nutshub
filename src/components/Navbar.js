"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Scroll listener for nav glassmorphism
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuActive(false);
  }, [pathname]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Gift Box", href: "/gift-box" },
    { name: "About", href: "/about" },
    { name: "Why Us", href: "/why-us" },
    { name: "Reviews", href: "/reviews" },
    { name: "FAQ", href: "/faq" },
  ];

  const handleLinkClick = () => {
    setMenuActive(false);
  };

  const isActive = (path) => pathname === path ? "active" : "";

  return (
    <header style={{ position: "relative", zIndex: 100000 }}>
      <nav
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        aria-label="Main navigation"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100000,
        }}
      >
        <Link
          href="/"
          className="nav-brand"
          style={{ display: "flex", alignItems: "center" }}
          onClick={handleLinkClick}
        >
          <img
            src="/images/nutshub.jpg"
            alt="NutsHub Official Logo"
            style={{
              height: "42px",
              width: "42px",
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: "12px",
              border: "2px solid #dfb76c",
              boxShadow: "0 0 14px rgba(223, 183, 108, 0.4)",
            }}
          />
          Nuts<span>Hub</span>
        </Link>

        <ul
          className={`nav-links ${menuActive ? "active" : ""}`}
          role="list"
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={isActive(item.href)}
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="nav-cta"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
        </ul>

        <button
          className={`hamburger ${menuActive ? "active" : ""}`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuActive}
          onClick={() => setMenuActive(!menuActive)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
