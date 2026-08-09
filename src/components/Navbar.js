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

  // Close menu when route changes on mobile
  useEffect(() => {
    setMenuActive(false);
  }, [pathname]);

  const isActive = (path) => pathname === path ? "active" : "";

  return (
    <header>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} aria-label="Main navigation" style={{ transition: 'none' }}>
        <Link href="/" className="nav-brand" style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="/images/nutshub.jpg" 
            alt="NutsHub Official Logo" 
            style={{ 
              height: '42px', 
              width: '42px', 
              borderRadius: '50%', 
              objectFit: 'cover', 
              marginRight: '12px',
              border: '2px solid #dfb76c',
              boxShadow: '0 0 14px rgba(223, 183, 108, 0.4)'
            }} 
          />
          Nuts<span>Hub</span>
        </Link>
        <ul className={`nav-links ${menuActive ? "active" : ""}`} role="list" style={{ transition: 'none' }}>
          <li><Link href="/" className={isActive("/")}>Home</Link></li>
          <li><Link href="/products" className={isActive("/products")}>Products</Link></li>
          <li><Link href="/gift-box" className={isActive("/gift-box")}>Gift Box</Link></li>
          <li><Link href="/about" className={isActive("/about")}>About</Link></li>
          <li><Link href="/why-us" className={isActive("/why-us")}>Why Us</Link></li>
          <li><Link href="/reviews" className={isActive("/reviews")}>Reviews</Link></li>
          <li><Link href="/faq" className={isActive("/faq")}>FAQ</Link></li>
          <li>
            <Link
              href="/contact"
              className="nav-cta"
              style={{ transition: 'none' }}
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
          style={{ transition: 'none' }}
        >
          <span style={{ transition: 'none' }} />
          <span style={{ transition: 'none' }} />
          <span style={{ transition: 'none' }} />
        </button>
      </nav>
    </header>
  );
}
