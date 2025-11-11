import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function AppLink({
  to,
  children,
  disableModal,
  state,
  onClick,
  ...props
}) {
  const location = useLocation();

  // Externe Links automatisch erkennen
  const isExternal =
    typeof to === "string" &&
    (to.startsWith("http://") || to.startsWith("https://") || to.startsWith("mailto:"));

  // Zustand für modale Navigation
  const linkState = disableModal ? state : (state ?? { backgroundLocation: location });

// Logging + Scrollposition speichern (für Modal-UX)
const handleClick = (e) => {
  // Nur bei internen Modal-Links (keine externen / deaktivierten Modale)
  if (!disableModal && !isExternal) {
    sessionStorage.setItem("scrollY", window.scrollY.toString());
  }

  console.log("[AppLink] navigate →", to);
  if (onClick) onClick(e);
};

  // Externe Links = klassische <a>
  if (isExternal) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Interne Links = React Router
  return (
    <Link to={to} state={linkState} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
