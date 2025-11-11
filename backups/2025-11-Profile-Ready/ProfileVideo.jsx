import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function ProfileVideo() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.5 });
  const [isPlaying, setIsPlaying] = useState(false);

  // --- Pause automatisch, wenn Video nicht sichtbar ---
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!isInView && !video.paused) {
      video.pause();
      setIsPlaying(false);
    }
  }, [isInView]);

  const handlePlayToggle = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative aspect-[9/16] overflow-hidden rounded-lg border border-gold-400/30 shadow-[0_0_20px_rgba(209,169,84,0.12)] hover:shadow-[0_0_28px_rgba(209,169,84,0.25)] transition-all duration-500"
      style={{ maxHeight: "376px" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* --- Glow-Layer --- */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-xl bg-gradient-to-br from-gold-400/10 via-amber-500/5 to-yellow-300/5 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gold-400/20"
      />

      {/* --- Video --- */}
      <video
        ref={videoRef}
        src="/videos/digital-identity-intro.mp4"
        poster="/videos/video-poster.jpg"
        controlsList="nodownload"
        preload="metadata"
        className="w-full h-full object-cover rounded-lg"
        onClick={handlePlayToggle}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* --- Play-Overlay --- */}
      {!isPlaying && (
        <button
          type="button"
          onClick={handlePlayToggle}
          aria-label="Video abspielen"
          className="absolute inset-0 flex items-center justify-center group focus:outline-none"
        >
          <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gold-400"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}

      {/* --- Soft Gradient oben --- */}
      <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-b from-gold-400/10 via-transparent to-transparent" />
    </motion.div>
  );
}
