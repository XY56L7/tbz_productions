import React from "react";
import bence from './images/bence_uj.jpg';
import { PopupButton } from "react-calendly";

const CallToActionCard: React.FC = () => {
  // ---------- Styles ----------
  const outerContainerStyle: React.CSSProperties = {
    padding: "40px 16px",
    display: "flex",
    justifyContent: "center",
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: "#FFFFFF", // Changed to solid white
    borderRadius: "24px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    padding: "32px",
    maxWidth: "1200px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "32px",
    backdropFilter: "blur(10px)", // Optional: Remove this if you want no blur effect
    border: "1px solid rgba(255, 255, 255, 0.3)",
  };

  const avatarWrapperStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
  };

  const avatarImageStyle: React.CSSProperties = {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #00D28C",
    boxShadow: "0 4px 12px rgba(0, 210, 140, 0.3)",
    imageRendering: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Match card background
  };

  const userInfoStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
  };

  const userNameStyle: React.CSSProperties = {
    fontSize: "1.2rem",
    fontWeight: 700,
    margin: "0",
    color: "#333",
  };

  const greenDotStyle: React.CSSProperties = {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "#00D28C",
    boxShadow: "0 0 8px rgba(0, 210, 140, 0.5)",
    animation: "vibrate 1s infinite",
  };

  const userTitleStyle: React.CSSProperties = {
    fontSize: "1rem",
    color: "#666",
    margin: "0",
    fontStyle: "italic",
  };

  const textWrapperStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    flex: 1,
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "1.6rem",
    fontWeight: 700,
    margin: "0",
    color: "#222",
    lineHeight: 1.3,
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: "1rem",
    lineHeight: 1.6,
    margin: "0",
    color: "#555",
  };

  const actionsRowStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    alignItems: "center",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#00D28C",
    color: "#000",
    padding: "14px 24px",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: 600,
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const linkStyle: React.CSSProperties = {
    fontSize: "0.95rem",
    color: "#002c23",
    textDecoration: "none",
    fontWeight: 600,
    borderBottom: "2px solid transparent",
    transition: "border-color 0.3s ease",
  };

  return (
    <div style={outerContainerStyle}>
      <div style={cardStyle} className="cta-card">
        <div style={avatarWrapperStyle} className="cta-avatar">
          <img style={avatarImageStyle} src={bence} alt="Tököli Bence" />
          <div style={userInfoStyle}>
            <h4 style={userNameStyle}>Tököli Bence</h4>
            <p style={userTitleStyle}>Alapító, tulajdonos</p>
          </div>
        </div>
        <div style={textWrapperStyle} className="cta-text">
          <h3 style={headingStyle}>Kérdésed van? Foglalj egy konzultációt!</h3>
          <p style={paragraphStyle}>
            Foglalj egy INGYENES és KÖTELEZETTSÉGMENTES konzultációt csapatunkkal, hogy
            megismerjük vállalkozásod és elképzeléseid, átbeszéljük a részleteket és
            megválaszoljuk minden felmerülő kérdésed. A kötetlen beszélgetés során
            átbeszéljük, hogyan segíthetünk online jelenléted növelésében és célközönséged
            elérésében. Gyere, vágjunk bele!
          </p>
          <div style={actionsRowStyle}>
            <PopupButton
              url="https://calendly.com/tbzproductions" // Replace with your Calendly event link
              rootElement={document.getElementById("root")!}
              text="30 perces online konzultáció"
              styles={buttonStyle}
              className="calendly-popup-button"
            />
            <a
              href="#!"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "#002c23")}
              onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "transparent")}
            >
              Díjmentes és kötelezettségmentes
            </a>
          </div>
        </div>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .cta-card {
              flex-direction: column;
              text-align: center;
            }
            .cta-avatar {
              order: 2;
            }
            .cta-text {
              order: 1;
              width: 100%;
            }
            .cta-text > div:last-child {
              justify-content: center;
              width: 100%;
            }
          }
          @keyframes vibrate {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
          }
          .calendly-popup-button:hover {
            background-color: #00B87A !important;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15), 0 0 20px rgba(0, 210, 140, 0.6), 0 0 30px rgba(0, 210, 140, 0.4) !important;
            transform: translateY(-2px) !important;
          }
        `}
      </style>
    </div>
  );
};

export default CallToActionCard;


