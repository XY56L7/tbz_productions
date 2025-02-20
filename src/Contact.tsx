import React from "react";

const Contact: React.FC = () => {
  // ---------- Dátum kiszámítása ----------
  const today = new Date();
  const expectedDate = new Date(today);
  expectedDate.setDate(expectedDate.getDate() + 2);
  const formattedExpectedDate = expectedDate.toLocaleDateString("hu-HU", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  // ---------- Styles ----------

  // Outer wrapper: black background, padding
  const outerWrapperStyle: React.CSSProperties = {
    backgroundColor: "#000",
    padding: "60px 20px",
    color: "#fff",
  };

  // Main container: centers content, sets max width, uses a 2-column grid on desktop
  const mainContainerStyle: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gap: "40px",
  };

  // Left side container
  const leftContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  };

  const leftHeadingStyle: React.CSSProperties = {
    fontSize: "1.8rem",
    fontWeight: 600,
    margin: 0,
  };

  const leftParagraphStyle: React.CSSProperties = {
    fontSize: "1rem",
    lineHeight: 1.6,
    margin: 0,
    color: "#ccc",
  };

  // Container for the "cards" with contact info
  const contactCardsWrapperStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    flexWrap: "wrap", // wrap on smaller screens
  };

  // A single card style
  const cardStyle: React.CSSProperties = {
    backgroundColor: "#111",
    borderRadius: "12px",
    padding: "20px",
    flex: "1 0 220px", // min width ~220px
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  };

  const cardTitleStyle: React.CSSProperties = {
    fontSize: "1rem",
    fontWeight: 500,
    margin: 0,
  };

  const cardSubtitleStyle: React.CSSProperties = {
    fontSize: "0.95rem",
    color: "#bbb",
    margin: 0,
  };

  const cardIconWrapperStyle: React.CSSProperties = {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: "#333",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "8px",
  };

  // Right side container
  const rightContainerStyle: React.CSSProperties = {
    backgroundColor: "#111",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const rightHeadingStyle: React.CSSProperties = {
    fontSize: "1.4rem",
    fontWeight: 600,
    margin: 0,
  };

  const formGroupStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginBottom: "12px",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "0.95rem",
    fontWeight: 500,
  };

  const inputStyle: React.CSSProperties = {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #333",
    backgroundColor: "#222",
    color: "#fff",
    fontSize: "0.95rem",
  };

  // Checkboxes with igényes dizájnnal
  const checkboxGroupStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  };

  const checkboxLabelStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontSize: "0.95rem",
    cursor: "pointer",
  };

  // Submit button style
  const submitButtonStyle: React.CSSProperties = {
    padding: "14px 20px",
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: 500,
    marginTop: "8px",
  };

  // Modern, letisztult bottom note stílus
  const bottomNoteStyle: React.CSSProperties = {
    fontSize: "0.85rem",
    color: "#aaa",
    textAlign: "right",
    marginTop: "20px",
    borderTop: "1px solid #333",
    paddingTop: "10px",
    fontStyle: "italic",
  };

  return (
    <section style={outerWrapperStyle} id="contact">
      <div style={mainContainerStyle} className="contact-main-container">
        {/* Left side */}
        <div style={leftContainerStyle}>
          <h2 style={leftHeadingStyle}>Kapcsolatfelvétel</h2>
          <p style={leftParagraphStyle}>
            Készen állsz, hogy új szintre emeld a márkádat? Mi segítünk abban,
            hogy kitűnj a tömegből! Vedd fel velünk a kapcsolatot, és beszéljük
            együtt át terveidet. Az első lépés egyszerű: lépj velünk kapcsolatba,
            és kezdjük el a közös munkát!
          </p>

          <div style={contactCardsWrapperStyle}>
            {/* Card 1: E-mail */}
            <div style={cardStyle}>
              <div style={cardIconWrapperStyle}>
                <span role="img" aria-label="Mail" style={{ fontSize: "1.2rem" }}>
                  ✉️
                </span>
              </div>
              <h4 style={cardTitleStyle}>E-mail cím elérhetőségünk</h4>
              <p style={cardSubtitleStyle}>info@seccontent.hu</p>
            </div>

            {/* Card 2: Telefon */}
            <div style={cardStyle}>
              <div style={cardIconWrapperStyle}>
                <span role="img" aria-label="Phone" style={{ fontSize: "1.2rem" }}>
                  📞
                </span>
              </div>
              <h4 style={cardTitleStyle}>Telefonszám elérhetőségünk</h4>
              <p style={cardSubtitleStyle}>+36 (70) 220-4634</p>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div style={rightContainerStyle}>
          <h3 style={rightHeadingStyle}>Árajánlat kérelem</h3>
          <p style={{ fontSize: "0.9rem", color: "#bbb", margin: 0 }}>
            Vedd fel velünk a kapcsolatot, gyors és pontos árajánlatot kérhetsz!
            Általában 24-48 órán belül válaszolunk.
          </p>

          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="videoTema">
              Videó téma / Rövid leírás *
            </label>
            <textarea
              id="videoTema"
              style={{ ...inputStyle, height: "80px", resize: "vertical" }}
              placeholder="Írd le röviden a videó témáját..."
            />
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="email">
              E-mail cím *
            </label>
            <input
              id="email"
              type="email"
              style={inputStyle}
              placeholder="pelda@email.hu"
            />
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="phone">
              Telefonszám *
            </label>
            <input
              id="phone"
              type="tel"
              style={inputStyle}
              placeholder="+36..."
            />
          </div>

          {/* Checkboxes with custom styling */}
          <div style={checkboxGroupStyle}>
            <label style={checkboxLabelStyle}>
              <input type="checkbox" className="custom-checkbox" />
              Teljeskörű TikTok tartalomgyártás
            </label>
            <label style={checkboxLabelStyle}>
              <input type="checkbox" className="custom-checkbox" />
              Social media image- és hirdetéskezelés
            </label>
            <label style={checkboxLabelStyle}>
              <input type="checkbox" className="custom-checkbox" />
              Weboldal szövegmásolás és hirdetések kezelése
            </label>
            <label style={checkboxLabelStyle}>
              <input type="checkbox" className="custom-checkbox" />
              Extra csomag
            </label>
            <label style={checkboxLabelStyle}>
              <input type="checkbox" className="custom-checkbox" />
              Adatvédelmi Nyilatkozat elfogadása
            </label>
          </div>

          {/* Submit button */}
          <button style={submitButtonStyle}>Elküldés</button>

          {/* Bottom note */}
          <p style={bottomNoteStyle}>
            Kalkulált válasz várható érkezése: {formattedExpectedDate}
          </p>
        </div>
      </div>

      {/* Media query: mobil nézetben egymás alatt jelenjenek meg a részek */}
      <style>
        {`
          /* Custom checkbox styles */
.custom-checkbox {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease;
  flex-shrink: 0; /* Biztosítja, hogy a méret ne változzon */
}

.custom-checkbox:checked {
  background-color: #00D28C;
  border-color: #00D28C;
}

.custom-checkbox:checked::after {
  content: "";
  position: absolute;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

/* Checkbox label stílus */
.checkbox-label {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.95rem;
  cursor: pointer;
}
        `}
      </style>
    </section>
  );
};

export default Contact;