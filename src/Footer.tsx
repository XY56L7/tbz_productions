import React from "react";

const Footer: React.FC = () => {
  // ---------- Styles ----------

  // Entire footer wrapper: black background, padding
  const footerStyle: React.CSSProperties = {
    backgroundColor: "#000",
    padding: "20px 0",
    color: "#fff",
    fontSize: "0.9rem"
  };

  // A thin horizontal line at the top of the footer
  const topLineStyle: React.CSSProperties = {
    borderTop: "1px solid #444", // slightly lighter than pure black
    marginBottom: "12px"
  };

  // Container that centers the content and sets max width
  const containerStyle: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };

  // Left side container (icon + text)
  const leftSideStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "12px"
  };

  // Small white circle icon
  const iconCircleStyle: React.CSSProperties = {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#000",
    fontWeight: "bold"
  };

  // The text on the left
  const leftTextStyle: React.CSSProperties = {
    whiteSpace: "nowrap"
  };

  // The text on the right
  const rightTextStyle: React.CSSProperties = {
    whiteSpace: "nowrap"
  };

  return (
    <footer style={footerStyle}>
      {/* Horizontal line at top */}
      <div style={topLineStyle}></div>

      <div style={containerStyle}>
        {/* Left side: Icon + "Teremtés..." text */}
        <div style={leftSideStyle}>
          <div style={iconCircleStyle}>
            {/* Replace this with an actual icon or brand letter if desired */}
            <span style={{ fontSize: "1.2rem" }}>F</span>
          </div>
          <span style={leftTextStyle}>
            Teremtés és destruktív import | www.tomhont.com
          </span>
        </div>

        {/* Right side: "© 2025 EBS Content Kft. – ..." text */}
        <div style={rightTextStyle}>
          © 2025 EBS Content Kft. – Minden jog fenntartva.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
