import React, { useState } from "react";
import Impressum from "./Impressum";
import AdatvedelmiNyilatkozat from "./AdatvedelmiNyilatkozat";

const Footer: React.FC = () => {
  const [showImpressum, setShowImpressum] = useState(false);
  const [showAdatvedelmi, setShowAdatvedelmi] = useState(false);

  // ---------- Styles ----------

  // Footer wrapper: sötét háttér, elegáns szöveg és padding
  const footerStyle: React.CSSProperties = {
    padding: "30px 20px",
    color: "#ccc",
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
        <div style={leftSideStyle} className="footer-designer">
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
        {/* Középső rész: Gombok */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }} className="footer-buttons">
          <button
            onClick={() => setShowImpressum(true)}
            style={{
              background: 'none',
              border: 'none',
              color: '#00D28C',
              cursor: 'pointer',
              padding: 0,
              textDecoration: 'none',
              transition: 'color 0.2s ease'
            }}
            className="footer-link"
          >
            Impresszum
          </button>
          <button
            onClick={() => setShowAdatvedelmi(true)}
            style={{
              background: 'none',
              border: 'none',
              color: '#00D28C',
              cursor: 'pointer',
              padding: 0,
              textDecoration: 'none',
              transition: 'color 0.2s ease'
            }}
            className="footer-link"
          >
            Adatvédelmi nyilatkozat
          </button>
        </div>
        {/* Jobb oldal: jogi információ */}
        <div style={rightTextStyle} className="footer-copyright">
          © 2025 TBZ. Productions – Minden jog fenntartva.
        </div>
      </div>

      <Impressum show={showImpressum} onHide={() => setShowImpressum(false)} />
      <AdatvedelmiNyilatkozat show={showAdatvedelmi} onHide={() => setShowAdatvedelmi(false)} />

      {/* Responsive stílusok */}
      <style>
        {`
          .footer-container {
            flex-direction: row;
            justify-content: space-between;
            gap: 20px;
          }
          .footer-container > div {
            flex: 1;
            text-align: center;
          }
          @media (max-width: 768px) {
            .footer-container {
              flex-direction: column;
              text-align: center;
              gap: 10px;
            }
            .footer-buttons {
              flex-direction: column;
              gap: 10px;
              order: 1;
            }
            .footer-buttons > button:first-child {
              order: -1; /* Impresszum felülre kerül */
            }
            .footer-designer {
              order: 2;
              margin-bottom: 10px;
            }
            .footer-copyright {
              order: 3;
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