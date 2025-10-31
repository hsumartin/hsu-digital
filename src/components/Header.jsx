// src/components/Header.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projekte", path: "/projekte" },
    { name: "Beiträge", path: "/beitraege" },
    { name: "Profil", path: "/profil" },
    { name: "Graph", path: "/graph" },
    { name: "Kontakt", path: "/kontakt" },
  ];

  return (
    <header className="bg-navy-900 border-b border-navy-800 text-neutral-50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        {/* 🔶 Logo / Branding */}
        <Link to="/" className="text-gold-500 text-lg font-semibold tracking-wide">
          Martin Hsu · Digital
        </Link>

        {/* 🔹 Desktop-Navigation */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                clsx(
                  "text-sm transition-colors duration-300 hover:text-gold-400",
                  isActive && "text-gold-500"
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* 🔸 Mobile Menü-Button */}
        <button
          className="md:hidden text-gold-500 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* 🔸 Mobile Navigation (Dropdown) */}
      {open && (
        <nav className="md:hidden bg-navy-800 border-t border-navy-700 py-4 px-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                clsx(
                  "text-sm transition-colors duration-300 hover:text-gold-400",
                  isActive && "text-gold-500"
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
