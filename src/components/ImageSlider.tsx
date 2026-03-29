"use client";

import { useState } from "react";

export default function ImageSlider({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div style={{ position: "relative", width: "100%", borderRadius: "8px", overflow: "hidden", border: "1px solid var(--card-border)", background: "var(--card-bg)", marginTop: "1rem" }}>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} style={{ width: "100%", maxHeight: "500px", objectFit: "contain", display: "block" }} />
      
      {images.length > 1 && (
        <>
          <button onClick={handlePrev} style={{ position: "absolute", left: "15px", top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.7)", color: "white", border: "1px solid rgba(255,255,255,0.2)", width: "45px", height: "45px", borderRadius: "50%", cursor: "pointer", fontSize: "1.2rem", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10, transition: "background 0.2s" }} onMouseOver={(e) => e.currentTarget.style.background = "rgba(0,0,0,0.9)"} onMouseOut={(e) => e.currentTarget.style.background = "rgba(0,0,0,0.7)"}>&#10094;</button>
          
          <button onClick={handleNext} style={{ position: "absolute", right: "15px", top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.7)", color: "white", border: "1px solid rgba(255,255,255,0.2)", width: "45px", height: "45px", borderRadius: "50%", cursor: "pointer", fontSize: "1.2rem", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10, transition: "background 0.2s" }} onMouseOver={(e) => e.currentTarget.style.background = "rgba(0,0,0,0.9)"} onMouseOut={(e) => e.currentTarget.style.background = "rgba(0,0,0,0.7)"}>&#10095;</button>
          
          <div style={{ position: "absolute", bottom: "15px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "10px", zIndex: 10, background: "rgba(0,0,0,0.4)", padding: "8px 12px", borderRadius: "20px" }}>
            {images.map((_, idx) => (
              <span key={idx} onClick={() => setCurrentIndex(idx)} style={{ width: "10px", height: "10px", borderRadius: "50%", background: currentIndex === idx ? "white" : "rgba(255,255,255,0.4)", cursor: "pointer", transition: "background 0.2s" }} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
