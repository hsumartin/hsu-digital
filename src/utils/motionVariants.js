// src/utils/motionVariants.js
export const fadeIn = (delay = 0, distance = 30) => ({
  hidden: {
    opacity: 0,
    y: distance,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: delay,
      duration: 0.8,
      ease: "easeOut",
    },
  },
});
