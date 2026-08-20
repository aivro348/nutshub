"use client";

export default function Badge({ children, variant = "gold", className = "", style = {} }) {
  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "4px 12px",
    borderRadius: "999px",
    fontSize: "0.75rem",
    fontWeight: "700",
    letterSpacing: "1px",
    textTransform: "uppercase"
  };

  const variantStyles = {
    gold: {
      background: "rgba(223, 183, 108, 0.15)",
      border: "1px solid rgba(223, 183, 108, 0.4)",
      color: "#dfb76c"
    },
    dark: {
      background: "rgba(13, 9, 5, 0.75)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      color: "#fff"
    },
    green: {
      background: "rgba(34, 197, 94, 0.15)",
      border: "1px solid rgba(34, 197, 94, 0.4)",
      color: "#4ade80"
    }
  };

  const selectedVariant = variantStyles[variant] || variantStyles.gold;

  return (
    <span
      className={`ui-badge ${className}`}
      style={{ ...baseStyle, ...selectedVariant, ...style }}
    >
      {children}
    </span>
  );
}
