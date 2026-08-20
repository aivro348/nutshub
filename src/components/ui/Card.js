"use client";

export default function Card({ children, className = "", style = {}, hoverEffect = true }) {
  const cardStyle = {
    background: "rgba(18, 12, 6, 0.85)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(223, 183, 108, 0.35)",
    borderRadius: "var(--radius-lg, 16px)",
    padding: "24px",
    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)",
    transition: hoverEffect ? "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease" : "none",
    ...style
  };

  return (
    <div
      className={`ui-card ${className}`}
      style={cardStyle}
      onMouseEnter={(e) => {
        if (hoverEffect) {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.borderColor = "rgba(223, 183, 108, 0.6)";
          e.currentTarget.style.boxShadow = "0 20px 45px rgba(0,0,0,0.6), 0 0 20px rgba(223, 183, 108, 0.15)";
        }
      }}
      onMouseLeave={(e) => {
        if (hoverEffect) {
          e.currentTarget.style.transform = "none";
          e.currentTarget.style.borderColor = "rgba(223, 183, 108, 0.35)";
          e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.4)";
        }
      }}
    >
      {children}
    </div>
  );
}
