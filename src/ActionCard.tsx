import React from "react";

const CallToActionCard: React.FC = () => {
  // ---------- Styles ----------
  const outerContainerStyle: React.CSSProperties = {
    padding: "40px 16px",
    display: "flex",
    justifyContent: "center",
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Átlátszó fehér háttér
    borderRadius: "24px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)", // Mélyebb árnyék
    padding: "32px",
    maxWidth: "1200px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "32px",
    backdropFilter: "blur(10px)", // Homályos háttérhatás
    border: "1px solid rgba(255, 255, 255, 0.3)", // Finom keret
  };

  // Árajánlat kérés rész (desktopon bal oldalon)
  const avatarWrapperStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };

  const avatarImageStyle: React.CSSProperties = {
    width: "80px", // Nagyobb avatar
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #00D28C", // Színes keret
    boxShadow: "0 4px 12px rgba(0, 210, 140, 0.3)", // Finom árnyék
  };

  const userInfoStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "8px", // Nagyobb rés
  };

  const userNameRowStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const userNameStyle: React.CSSProperties = {
    fontSize: "1.2rem", // Nagyobb betűméret
    fontWeight: 700, // Vastagabb betű
    margin: 0,
    color: "#333", // Sötétebb szöveg
  };

  const greenDotStyle: React.CSSProperties = {
    width: "12px", // Nagyobb pont
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "#00D28C",
    boxShadow: "0 0 8px rgba(0, 210, 140, 0.5)", // Fényes hatás
  };

  const userTitleStyle: React.CSSProperties = {
    fontSize: "1rem",
    color: "#666", // Világosabb szöveg
    margin: 0,
    fontStyle: "italic", // Dőlt betű
  };

  // Kapcsolatfelvétel rész (desktopon jobb oldalon)
  const textWrapperStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "20px", // Nagyobb rés
    flex: 1,
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "1.6rem", // Nagyobb címsor
    fontWeight: 700,
    margin: 0,
    color: "#222", // Sötétebb szöveg
    lineHeight: 1.3,
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: "1rem", // Nagyobb betűméret
    lineHeight: 1.6,
    margin: 0,
    color: "#555", // Világosabb szöveg
  };

  const actionsRowStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    alignItems: "center",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#00D28C", // Zöld szín
    color: "#fff",
    padding: "14px 24px", // Nagyobb gomb
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: 600, // Vastagabb betű
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s ease", // Sima átmenet
  };

  const linkStyle: React.CSSProperties = {
    fontSize: "0.95rem",
    color: "#00D28C",
    textDecoration: "none",
    fontWeight: 600,
    borderBottom: "2px solid transparent", // Aláhúzás hover hatáshoz
    transition: "border-color 0.3s ease", // Sima átmenet
  };

  return (
    <div style={outerContainerStyle}>
      <div style={cardStyle} className="cta-card">
        {/* Desktop: bal oldalon árajánlat kérés (avatar) */}
        <div style={avatarWrapperStyle} className="cta-avatar">
          <img
            style={avatarImageStyle}
            src="https://via.placeholder.com/80"
            alt="Tököli Bence"
          />
          <div style={userInfoStyle}>
            <div style={userNameRowStyle}>
              <h4 style={userNameStyle}>Tököli Bence</h4>
              <div style={greenDotStyle} />
            </div>
            <p style={userTitleStyle}>Tulajdonos</p>
          </div>
        </div>
        {/* Desktop: jobb oldalon kapcsolatfelvétel */}
        <div style={textWrapperStyle} className="cta-text">
          <h3 style={headingStyle}>
            Foglalj egy hívást, ha bármilyen kérdésed van
          </h3>
          <p style={paragraphStyle}>
            Ne habozz! Ha kérdésed van, vagy szeretnéd megbeszélni, hogyan
            tudnánk együtt dolgozni, egy 30 perces online meetingen mindent
            tisztázhatunk. Legyen szó áttervezésről, egyedi igényekről, vagy a
            folyamat pontos részleteiről – örömmel válaszolok mindenre.
          </p>
          <div style={actionsRowStyle}>
            <button
              style={buttonStyle}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#00B87A")} // Hover hatás
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#00D28C")}
            >
              30 perces online hívás
            </button>
            <a
              href="#!"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "#00D28C")} // Hover hatás
              onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "transparent")}
            >
              Díjmentes és kötelezettségmentes
            </a>
          </div>
        </div>
      </div>
      {/* Mobil nézet: az elemek egymás alatt jelennek meg, a kapcsolatfelvétel legyen elöl */}
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
            }
          }
        `}
      </style>
    </div>
  );
};

export default CallToActionCard;