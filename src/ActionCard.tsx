import React from "react";

const CallToActionCard: React.FC = () => {
  // ---------- Styles ----------
  const outerContainerStyle: React.CSSProperties = {
    // Center the card horizontally, add top/bottom spacing
    padding: "40px 16px",
    display: "flex",
    justifyContent: "center",
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: "#fff",
    borderRadius: "24px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    padding: "24px",
    maxWidth: "1200px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "24px"
  };

  // Left side: user avatar & name
  const avatarWrapperStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "16px"
  };

  const avatarImageStyle: React.CSSProperties = {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    objectFit: "cover"
  };

  const userInfoStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "4px"
  };

  const userNameRowStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "8px"
  };

  const userNameStyle: React.CSSProperties = {
    fontSize: "1rem",
    fontWeight: 600,
    margin: 0
  };

  // That small green dot
  const greenDotStyle: React.CSSProperties = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#00D28C"
  };

  const userTitleStyle: React.CSSProperties = {
    fontSize: "0.9rem",
    color: "#777",
    margin: 0
  };

  // Right side: heading, paragraph, button, link
  const textWrapperStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    // Make text area expand as needed
    flex: 1
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "1.4rem",
    fontWeight: 600,
    margin: 0
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: "0.95rem",
    lineHeight: 1.5,
    margin: 0,
    color: "#444"
  };

  // Button + link row
  const actionsRowStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    alignItems: "center"
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: 500,
    border: "none",
    cursor: "pointer",
    fontSize: "0.95rem"
  };

  const linkStyle: React.CSSProperties = {
    fontSize: "0.9rem",
    color: "#00D28C",
    textDecoration: "none",
    fontWeight: 500
  };

  return (
    <div style={outerContainerStyle}>
      <div style={cardStyle}>
        {/* Left side: Avatar + Name */}
        <div style={avatarWrapperStyle}>
          {/* <img
            style={avatarImageStyle}
            src="https://via.placeholder.com/64" // Replace with actual avatar URL
            alt="Sőji Dominik"
          /> */}
          <div style={userInfoStyle}>
            <div style={userNameRowStyle}>
              <h4 style={userNameStyle}>Tököli Bence</h4>
              <div style={greenDotStyle} />
            </div>
            <p style={userTitleStyle}>Tulajdonos</p>
          </div>
        </div>

        {/* Right side: heading, paragraph, button, link */}
        <div style={textWrapperStyle}>
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
            <button style={buttonStyle}>30 perces online hívás</button>
            <a href="#!" style={linkStyle}>
              Díjmentes és kötelezettségmentes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionCard;
