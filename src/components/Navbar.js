"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

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

  // Close menu when route changes
  useEffect(() => {
    setMenuActive(false);
  }, [pathname]);

  const navItems = [
    { name: "Home", href: "/", sectionId: "home" },
    { name: "Products", href: "/products", sectionId: "products" },
    { name: "Gift Box", href: "/gift-box", sectionId: "gift-box" },
    { name: "About", href: "/about", sectionId: "why-us" },
    { name: "Why Us", href: "/why-us", sectionId: "why-us" },
    { name: "Reviews", href: "/reviews", sectionId: "reviews" },
    { name: "FAQ", href: "/faq", sectionId: "faq" },
  ];

  const handleNavClick = (e, item) => {
    setMenuActive(false);

    // If on home page and section exists, smooth scroll to it
    if (pathname === "/") {
      const section = document.getElementById(item.sectionId);
      if (section) {
        e.preventDefault();
        section.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
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
          onClick={() => setMenuActive(false)}
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
                onClick={(e) => handleNavClick(e, item)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="nav-cta"
              onClick={(e) => handleNavClick(e, { name: "Contact", href: "/contact", sectionId: "contact" })}
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
