import React from "react";
import clsx from "clsx";

export default function HeaderAccent({
  variant = "goldblue", // "goldblue" | "gold" | "blue"
  fadeOnScroll = false,
  height = "48px",
  className = "",
}) {
  const [fade, setFade] = React.useState(false);

  React.useEffect(() => {
    if (!fadeOnScroll) return;
    const onScroll = () => setFade(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [fadeOnScroll]);

  const gradients = {
    goldblue:
      "from-gold-400/20 via-blue-500/15 to-transparent shadow-[0_2px_12px_-3px_rgba(255,215,0,0.2)]",
    gold:
      "from-gold-400/25 via-gold-300/15 to-transparent shadow-[0_2px_10px_-3px_rgba(255,215,0,0.25)]",
    blue:
      "from-blue-400/25 via-blue-500/20 to-transparent shadow-[0_2px_10px_-3px_rgba(72,130,255,0.25)]",
  };

  return (
    <div
      className={clsx(
        "absolute top-0 left-0 w-full pointer-events-none rounded-t-2xl backdrop-blur-[1px] transition-opacity duration-700 ease-smooth",
        `bg-gradient-to-r ${gradients[variant]}`,
        fade && "opacity-0",
        className
      )}
      style={{ height }}
    />
  );
}
