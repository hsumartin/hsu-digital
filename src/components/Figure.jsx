// components/Figure.jsx
// ------------------------------------------------------
// Einheitliche Figure-Komponente für MDX-Inhalte
// Unterstützt automatisch Schatten, Randradius und
// visuelle Kohärenz mit deinem Designsystem
// ------------------------------------------------------

import React from "react";

export default function Figure({ children, className = "", ...props }) {
  return (
    <figure
      className={`my-14 text-center ${className}`}
      {...props}
    >
      {/* Falls direkt <img> eingebettet ist */}
      {React.Children.map(children, (child) =>
        child.type === "img" ? (
          <img
            {...child.props}
            className="mx-auto rounded-xl shadow-[0_0_40px_-10px_rgba(209,169,84,0.12)]
             transition-transform duration-500 ease-[0.22,1,0.36,1]
             hover:scale-[1.015] hover:brightness-[1.03]
             w-[65%] sm:w-[68%] md:w-[70%] lg:w-[72%] xl:w-[75%]"
  style={{
    width: "clamp(60%, 68vw, 75%)",
    maxWidth: "1000px",
  }}
  loading="lazy"
          />
        ) : (
          child
        )
      )}
    </figure>
  );
}
