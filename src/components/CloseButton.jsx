import React from "react";

const CloseButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Close"
      className="text-neutral-400 hover:text-neutral-100 transition-transform duration-500 hover:scale-110 hover:opacity-90"
    >
      ✕
    </button>
  );
};

export default CloseButton;
