import { Link } from "react-router-dom";

export default function LinkArrow({ to, label }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center text-gold-400/90 hover:text-gold-300 transition-all duration-500"
    >
      <span className="relative flex items-center gap-3 font-medium tracking-wide">
        {/* Text mit animierter Unterlinie */}
        <span className="relative">
          {label}
          <span className="absolute bottom-[-3px] left-0 w-0 h-[1px] bg-gradient-to-r from-gold-400/0 via-gold-400/40 to-gold-400/0 group-hover:w-full transition-all duration-700 ease-out" />
        </span>

        {/* verbindende Linie */}
        <span className="inline-block w-[22px] h-[1px] bg-gold-400/40 group-hover:w-[32px] transition-all duration-500 ease-out" />

        {/* Pfeil-Icon */}
        <svg
          className="w-[14px] h-[14px] opacity-70 transform translate-x-0 group-hover:translate-x-1 transition-all duration-500 ease-out"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
