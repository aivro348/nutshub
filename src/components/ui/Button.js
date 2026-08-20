"use client";

import Link from "next/link";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  style = {},
  target,
  rel,
  disabled = false,
  ...props
}) {
  const sizePadding = {
    sm: "8px 16px",
    md: "12px 24px",
    lg: "16px 36px"
  };

  const fontSizeMap = {
    sm: "0.8rem",
    md: "0.9rem",
    lg: "1rem"
  };

  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    borderRadius: "999px",
    padding: sizePadding[size] || sizePadding.md,
    fontSize: fontSizeMap[size] || fontSizeMap.md,
    fontWeight: "700",
    cursor: disabled ? "not-allowed" : "pointer",
    textDecoration: "none",
    transition: "all 0.3s ease",
    border: "none",
    outline: "none",
    opacity: disabled ? 0.6 : 1
  };

  const variants = {
    primary: {
      background: "linear-gradient(135deg, #dfb76c, #b88d3b)",
      color: "#000",
      boxShadow: "0 8px 20px rgba(223, 183, 108, 0.3)"
    },
    secondary: {
      background: "rgba(255, 255, 255, 0.08)",
      border: "1px solid rgba(223, 183, 108, 0.4)",
      color: "#fff"
    },
    whatsapp: {
      background: "linear-gradient(135deg, #25D366, #128C7E)",
      color: "#fff",
      boxShadow: "0 8px 20px rgba(37, 211, 102, 0.3)"
    }
  };

  const selectedVariant = variants[variant] || variants.primary;

  const combinedStyle = { ...baseStyle, ...selectedVariant, ...style };

  if (href) {
    if (href.startsWith("http") || href.startsWith("https") || href.startsWith("wa.me")) {
      return (
        <a
          href={href}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
          className={`ui-button ${className}`}
          style={combinedStyle}
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={`ui-button ${className}`} style={combinedStyle} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`ui-button ${className}`}
      style={combinedStyle}
      {...props}
    >
      {children}
    </button>
  );
}
