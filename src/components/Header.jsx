// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollIntensity, setScrollIntensity] = useState(0);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Beiträge", path: "/beitraege" },
    { name: "Projekte", path: "/projekte" },
    { name: "Profil", path: "/profil" },
    { name: "Graph", path: "/graph" },
    { name: "Kontakt", path: "/kontakt" },
  ];

  // Scroll-Verhalten
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const max = 300;
      const intensity = Math.min(scrollY / max, 1);
      setScrolled(scrollY > 20);
      setScrollIntensity(intensity);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-Lock bei geöffnetem Menü
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const lightEdgeOpacity = 0.05 + scrollIntensity * 0.1;
  const insetShadow = `inset 0 -1px 0 0 rgba(255,255,255,${lightEdgeOpacity})`;

  return (
    <header
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-500 backdrop-blur-sm",
        scrolled
          ? "bg-navy-950/90 py-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
          : "bg-navy-900/80 py-2.5"
      )}
      style={{ boxShadow: insetShadow }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
        {/* 🔶 Logo / Branding */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center h-9 w-9">
            <img
              src="/martin_hsu_logo_header.svg"
              alt="Martin Hsu Logo"
              className="h-6 w-auto select-none"
            />
          </div>
          <span className="text-[#f2f2f2]/90 font-medium tracking-wide gold-glow-hover">
            Martin Hsu · Digital
          </span>
        </Link>

        {/* 🔹 Desktop-Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                clsx(
                  "text-sm gold-glow-hover",
                  isActive ? "gold-glow" : "text-neutral-300"
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* 🔸 Mobile Menü-Button */}
        <button
          className="md:hidden text-gold-500 focus:outline-none text-2xl"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* 🔸 Mobile Navigation (Dropdown) */}
      <nav
        className={clsx(
          "md:hidden bg-navy-800/95 px-6 flex flex-col gap-4 text-center text-neutral-200 transition-all duration-300",
          open
            ? "max-h-[400px] py-6 opacity-100 visible"
            : "max-h-0 opacity-0 invisible overflow-hidden"
        )}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              clsx(
                "text-base py-2 gold-glow-hover transition-colors",
                isActive ? "gold-glow" : "text-neutral-300"
              )
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
