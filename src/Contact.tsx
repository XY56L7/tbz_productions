import React from "react";

const Contact: React.FC = () => {
  // ---------- Dátum kiszámítása (a következő nap) ----------
  const today = new Date();
  const expectedDate = new Date(today);
  expectedDate.setDate(expectedDate.getDate() + 1);
  const formattedExpectedDate = expectedDate.toLocaleDateString("hu-HU", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  // ---------- Styles ----------

  // Outer wrapper: fekete háttér, padding
  const outerWrapperStyle: React.CSSProperties = {
    backgroundColor: "#000",
    padding: "60px 20px",
    color: "#fff",
  };

  // Main container: középre igazított tartalom, egymás alatti elrendezés
  const mainContainerStyle: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  };

  // Bal oldali container (elérhetőségi kártyák)
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

  // Container a kártyákhoz
  const contactCardsWrapperStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    flexWrap: "wrap",
  };

  // Egyetlen kártya stílusa
  const cardStyle: React.CSSProperties = {
    backgroundColor: "#111",
    borderRadius: "12px",
    padding: "20px",
    flex: "1 0 220px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  };

  // Kártya cím: fehér színű
  const cardTitleStyle: React.CSSProperties = {
    fontSize: "1rem",
    fontWeight: 500,
    margin: 0,
    color: "#fff",
  };

  // Kártya alcím: szürkés
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

  // Jobb oldali container (űrlap)
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

  // Az űrlap fő szövege, a cím alatti rész
  const rightParagraphStyle: React.CSSProperties = {
    fontSize: "0.9rem",
    color: "#bbb",
    margin: 0,
  };

  // Kötelező mezők figyelmeztetése
  const requiredNoteStyle: React.CSSProperties = {
    fontSize: "0.85rem",
    color: "#bbb",
    fontStyle: "italic",
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

  const textareaStyle: React.CSSProperties = {
    ...inputStyle,
    height: "80px",
    resize: "vertical",
  };

  // Checkbox csoport stílusa
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

  // "Elküldés" gomb stílusa (alap: fehér háttér, fekete szöveg)
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
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  // Bottom note stílusa, ahol a dátum zöld (#00D28C)
  const bottomNoteStyle: React.CSSProperties = {
    fontSize: "0.85rem",
    color: "#aaa",
    textAlign: "right",
    marginTop: "20px",
    borderTop: "1px solid #333",
    paddingTop: "10px",
    fontStyle: "italic",
  };

  const dateStyle: React.CSSProperties = {
    color: "#00D28C",
  };

  return (
    <section style={outerWrapperStyle} id="contact">
      <div style={mainContainerStyle} className="contact-main-container">
        {/* Bal oldali rész: Elérhetőségi kártyák */}
        <div style={leftContainerStyle}>
          <h2 style={leftHeadingStyle}>Kapcsolatfelvétel</h2>
          <p style={leftParagraphStyle}>
            Készen állsz a növekedésre? Beszélj velünk, hogy együtt emeljük új szintre a márkádat!
          </p>
          <div style={contactCardsWrapperStyle}>
            {/* E-mail kártya */}
            <div style={cardStyle}>
              <div style={cardIconWrapperStyle}>
                <span role="img" aria-label="Mail" style={{ fontSize: "1.2rem" }}>
                  ✉️
                </span>
              </div>
              <h4 style={cardTitleStyle}>E-mail cím</h4>
              <p style={cardSubtitleStyle}>info@tbzproductions.com</p>
            </div>
            {/* Telefon kártya */}
            <div style={cardStyle}>
              <div style={cardIconWrapperStyle}>
                <span role="img" aria-label="Phone" style={{ fontSize: "1.2rem" }}>
                  📞
                </span>
              </div>
              <h4 style={cardTitleStyle}>Telefonszám</h4>
              <p style={cardSubtitleStyle}>+36 70 622 2157</p>
            </div>
          </div>
        </div>
        {/* Jobb oldali rész: Árajánlat kérelem űrlap */}
        <div style={rightContainerStyle}>
          <h3 style={rightHeadingStyle}>Árajánlat kérelem</h3>
          <p style={rightParagraphStyle}>
            Dolgozzunk együtt és emeljük új szintre az online jelenléted! Vedd fel velünk a kapcsolatot és kérj egyedi ajánlatot.
          </p>
          <p style={requiredNoteStyle}>
            *-gal jelölt mezők kitöltése kötelező!
          </p>
          {/* Űrlap mezők */}
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="fullName">
              Teljes név *
            </label>
            <input
              id="fullName"
              type="text"
              style={inputStyle}
              placeholder="Teljes név"
              onFocus={(e) => (e.currentTarget.placeholder = "")}
              onBlur={(e) => (e.currentTarget.placeholder = "Teljes név")}
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
              placeholder="E-mail cím"
              onFocus={(e) => (e.currentTarget.placeholder = "")}
              onBlur={(e) => (e.currentTarget.placeholder = "E-mail cím")}
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
              placeholder="Telefonszám"
              onFocus={(e) => (e.currentTarget.placeholder = "")}
              onBlur={(e) => (e.currentTarget.placeholder = "Telefonszám")}
            />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="projectDiscussion">
              Beszélgessünk a projektedről *
            </label>
            <textarea
              id="projectDiscussion"
              style={textareaStyle}
              placeholder="Beszélgessünk a projektedről"
              onFocus={(e) => (e.currentTarget.placeholder = "")}
              onBlur={(e) =>
                (e.currentTarget.placeholder = "Beszélgessünk a projektedről")
              }
            />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>
              Milyen szolgáltatások érdekelnek? (Egyszerre több lehetőség is kiválasztható) *
            </label>
            <div style={checkboxGroupStyle}>
              <label style={checkboxLabelStyle}>
                <input type="checkbox" className="custom-checkbox" />
                Teljeskörű tartalomgyártás
              </label>
              <label style={checkboxLabelStyle}>
                <input type="checkbox" className="custom-checkbox" />
                Reklám és Image videók készítése
              </label>
              <label style={checkboxLabelStyle}>
                <input type="checkbox" className="custom-checkbox" />
                Fotózás
              </label>
              <label style={checkboxLabelStyle}>
                <input type="checkbox" className="custom-checkbox" />
                Social media management
              </label>
              <label style={checkboxLabelStyle}>
                <input type="checkbox" className="custom-checkbox" />
                Weboldal tervezés és fejlesztés
              </label>
            </div>
          </div>
          {/* Submit gomb, hover hatással */}
          <button
            style={submitButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#00D28C";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.color = "#000";
            }}
          >
            Elküldés
          </button>
          {/* Alsó jegyzet: Árajánlat várható érkezése, dátum zöld színnel */}
          <p style={bottomNoteStyle}>
            Árajánlat várható érkezése:{" "}
            <span style={dateStyle}>{formattedExpectedDate}</span>
          </p>
        </div>
      </div>
      <style>
        {`
          /* Egyedi checkbox stílusok */
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
            flex-shrink: 0;
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
          /* Mobil nézet: egymás alatti elrendezés */
          @media (max-width: 768px) {
            .contact-main-container {
              flex-direction: column;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
