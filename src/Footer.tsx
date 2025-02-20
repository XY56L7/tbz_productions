import React from "react";

const Footer: React.FC = () => {
  // ---------- Styles ----------

  // Footer wrapper: sötét háttér, elegáns szöveg és padding
  const footerStyle: React.CSSProperties = {
    padding: "30px 20px",
    color: "#ccc", // világosabb szöveg
    fontSize: "0.9rem",
    lineHeight: "1.5"
  };

  // Egy vékony, finom vonal a tetején
  const topLineStyle: React.CSSProperties = {
    borderTop: "1px solid #333",
    marginBottom: "20px"
  };

  // Tartalom konténer: középre igazított, max szélesség és rugalmas elrendezés
  const containerStyle: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center"
  };

  // Bal oldali rész: ikon + szöveg
  const leftSideStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flexWrap: "wrap"
  };

  // Ikon: kerek fehér háttéren, nagyobb betűmérettel
  const iconCircleStyle: React.CSSProperties = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#111",
    fontWeight: "bold",
    fontSize: "1.3rem"
  };

  // Bal oldali szöveg
  const leftTextStyle: React.CSSProperties = {
    whiteSpace: "nowrap"
  };

  // Jobb oldali szöveg
  const rightTextStyle: React.CSSProperties = {
    whiteSpace: "nowrap"
  };

  // Link stílus: egyedi szín és finom transition a hover hatáshoz
  const linkStyle: React.CSSProperties = {
    color: "#00D28C",
    textDecoration: "none",
    transition: "color 0.2s ease"
  };

  return (
    <footer style={footerStyle}>
      <div style={topLineStyle}></div>
      <div style={containerStyle} className="footer-container">
        {/* Bal oldal: ikon + szöveg */}
        <div style={leftSideStyle}>
          {/* <div style={iconCircleStyle}>
            <span>F</span>
          </div> */}
          <span style={leftTextStyle}>
            Tervezte és készítette |{" "}
            <a
              href="https://pal-martin-portfolio.vercel.app/"
              style={linkStyle}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Pál Martin
            </a>
          </span>
        </div>
        {/* Jobb oldal: jogi információ */}
        <div style={rightTextStyle}>
          © 2025 TBZ Productions Kft. – Minden jog fenntartva.
        </div>
      </div>

      {/* Responsive stílusok */}
      <style>
        {`
          .footer-container {
            flex-direction: row;
          }
          @media (max-width: 768px) {
            .footer-container {
              flex-direction: column;
              text-align: center;
            }
            .footer-container > div {
              margin-bottom: 10px;
            }
          }
          .footer-link:hover {
            color: #00a07a !important;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
