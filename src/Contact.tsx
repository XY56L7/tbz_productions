import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Definiáljuk a formData típusát
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  projectDiscussion: string;
  services: string[];
}

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

  // ---------- State for form data ----------
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    projectDiscussion: "",
    services: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // ---------- Handle input changes ----------
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // ---------- Handle checkbox changes ----------
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const services = checked
        ? [...prev.services, value]
        : prev.services.filter((service) => service !== value);
      return { ...prev, services };
    });
  };

  // ---------- Handle form submission ----------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Basic validation
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.projectDiscussion ||
      formData.services.length === 0
    ) {
      setSubmitMessage("Kérjük, töltse ki az összes kötelező mezőt!");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        process.env.REACT_APP_WORKER_URL || "https://email-with-resend.palmartin99.workers.dev",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmitMessage("Árajánlat kérelem sikeresen elküldve!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          projectDiscussion: "",
          services: [],
        });
      } else {
        setSubmitMessage("Hiba történt az űrlap elküldése során.");
      }
    } catch (error) {
      setSubmitMessage("Hiba történt az űrlap elküldése során.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ---------- Styles ----------
  const outerWrapperStyle: React.CSSProperties = {
    backgroundColor: "#000",
    padding: "60px 20px",
    color: "#fff",
  };

  const mainContainerStyle: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  };

  const leftContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  };

  const leftHeadingStyle: React.CSSProperties = {
    fontSize: "1.8rem",
    fontWeight: 600,
    margin: 0,
    position: "relative",
    display: "inline-block",
  };

  const leftParagraphStyle: React.CSSProperties = {
    fontSize: "1rem",
    lineHeight: 1.6,
    margin: "30px 0 0 0",
    color: "#ccc",
  };

  const contactCardsWrapperStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    flexWrap: "wrap",
  };

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

  const cardTitleStyle: React.CSSProperties = {
    fontSize: "1rem",
    fontWeight: 500,
    margin: 0,
    color: "#fff",
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

  const rightParagraphStyle: React.CSSProperties = {
    fontSize: "0.9rem",
    color: "#bbb",
    margin: 0,
  };

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

  const submitMessageStyle: React.CSSProperties = {
    fontSize: "0.95rem",
    color: submitMessage.includes("Hiba") ? "#ff5555" : "#00D28C",
    textAlign: "center",
  };

  return (
    <section style={outerWrapperStyle} id="contact">
      <div style={mainContainerStyle} className="contact-main-container">
        {/* Bal oldali rész: Elérhetőségi kártyák */}
        <div style={leftContainerStyle}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "32px",
              padding: "40px 20px",
            }}
          >
            <h2 style={leftHeadingStyle} className="contact-section-title">
              Kapcsolatfelvétel
            </h2>
            <p style={leftParagraphStyle}>
              Készen állsz a növekedésre? Beszélj velünk, hogy együtt emeljük új
              szintre a márkádat!
            </p>
          </div>
          <div
            style={{ ...contactCardsWrapperStyle, justifyContent: "flex-start" }}
          >
            <div style={cardStyle}>
              <div style={cardIconWrapperStyle}>
                <span
                  role="img"
                  aria-label="Mail"
                  style={{ fontSize: "1.2rem" }}
                >
                  ✉️
                </span>
              </div>
              <h4 style={cardTitleStyle}>E-mail cím</h4>
              <p style={cardSubtitleStyle}>info@tbzproductions.com</p>
            </div>
            <div style={cardStyle}>
              <div style={cardIconWrapperStyle}>
                <span
                  role="img"
                  aria-label="Phone"
                  style={{ fontSize: "1.2rem" }}
                >
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
            Dolgozzunk együtt és emeljük új szintre az online jelenléted! Vedd fel
            velünk a kapcsolatot és kérj egyedi ajánlatot.
          </p>
          <p style={requiredNoteStyle}>
            *-gal jelölt mezők kitöltése kötelező!
          </p>
          <form onSubmit={handleSubmit}>
            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="fullName">
                Teljes név *
              </label>
              <input
                id="fullName"
                type="text"
                style={inputStyle}
                placeholder="Teljes név"
                value={formData.fullName}
                onChange={handleInputChange}
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
                value={formData.email}
                onChange={handleInputChange}
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
                value={formData.phone}
                onChange={handleInputChange}
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
                value={formData.projectDiscussion}
                onChange={handleInputChange}
                onFocus={(e) => (e.currentTarget.placeholder = "")}
                onBlur={(e) =>
                  (e.currentTarget.placeholder = "Beszélgessünk a projektedről")
                }
              />
            </div>
            <div style={formGroupStyle}>
              <label style={labelStyle}>
                Milyen szolgáltatások érdekelnek? (Egyszerre több lehetőség is
                kiválasztható) *
              </label>
              <div style={checkboxGroupStyle}>
                {[
                  "Teljeskörű tartalomgyártás",
                  "Reklám és Image videók készítése",
                  "Fotózás",
                  "Social media management",
                  "Weboldal tervezés és fejlesztés",
                ].map((service) => (
                  <label key={service} style={checkboxLabelStyle}>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      value={service}
                      checked={formData.services.includes(service)}
                      onChange={handleCheckboxChange}
                    />
                    {service}
                  </label>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="quote-btn submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Küldés..." : "Elküldés"}
            </button>
            {submitMessage && (
              <p style={submitMessageStyle}>{submitMessage}</p>
            )}
          </form>
          <p style={bottomNoteStyle}>
            Árajánlat várható érkezése:{" "}
            <span style={dateStyle}>{formattedExpectedDate}</span>
          </p>
        </div>
      </div>
      <style>
        {`
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
          .quote-btn {
            border-radius: 100px;
            padding: 8px 16px;
            font-weight: 500;
            background-color: #fff !important;
            color: #000 !important;
            border: 1px solid #ccc;
            transition: box-shadow 0.3s ease, transform 0.3s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
            font-size: 14px;
            cursor: pointer;
          }
          .quote-btn:hover {
            box-shadow:
              0 0 20px rgba(255, 255, 255, 0.55),
              0 0 35px rgba(0, 123, 255, 0.35),
              0 0 45px rgba(0, 255, 136, 0.25);
            transform: translateY(-2px);
          }
          .quote-btn:active {
            transform: translateY(0);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
          }
          .submit-btn {
            width: calc(100% - 16px);
            margin: 0 auto;
            display: block;
          }
          .contact-section-title::after {
            content: '';
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            width: 230px;
            height: 4px;
            background: linear-gradient(135deg, rgba(0, 89, 69, 0.95), rgba(0, 44, 35, 0.95));
            border-radius: 2px;
            box-shadow: 0 0 10px rgba(0, 210, 140, 0.5), 0 0 20px rgba(0, 210, 140, 0.3);
          }
          @media (max-width: 720px) {
            .contact-section-title::after {
              width: 230px;
              max-width: 230px;
            }
          }
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