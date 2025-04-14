// ServiceSelection.tsx
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ServiceSelection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCard = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  useEffect(() => {
    // Inject styles into the document head
    const style = document.createElement("style");
    style.textContent = `
      /* Base styling */
      .my-section {
        background-color: #000;
        color: #fff;
        padding-top: 80px;
        padding-bottom: 80px;
        position: relative;
        z-index: 1;
        width: 100%;
        max-width: 100%;
        margin: 0;
        padding-left: 0;
        padding-right: 0;
      }

      /* Push the text content down and use sticky in desktop view */
      .text-content {
        margin-top: 0;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
      }

      @media (min-width: 992px) {
        .text-content {
          position: sticky;
          top: 300px;
          align-self: flex-start;
          max-height: 70vh;
          overflow-y: auto;
          padding-top: 1rem;
        }

        .cards {
          position: relative;
          z-index: 1;
        }

        .cards::after {
          content: "";
          display: block;
          height: 0;
          visibility: hidden;
        }
      }

      /* Text content styles */
      .heading-text {
        font-size: 32px;
        line-height: 1.3;
      }

      .desc-text {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 1rem;
      }

      /* Button style */
      .custom-btn {
        border-radius: 100px;
        padding: 10px 24px;
        font-weight: 500;
        background-color: #00D28C;
        color: #000;
        border: none;
        transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
        outline: 2px solid transparent;
      }

      .custom-btn:hover {
        background-color: #00B87A;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.12);
        outline: 2px solid #00D28C;
        transform: translateY(-2px);
      }

      .custom-btn:active {
        transform: translateY(0);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
      }

      /* Referenciák gomb */
      .ref-btn {
        background-color: #fff !important;
        color: #000 !important;
        border: 1px solid #ccc;
      }

      .ref-btn:hover {
        background-color: #f7f7f7 !important;
        color: #000 !important;
      }

      /* Árajánlat gomb */
      .quote-btn {
        background-color: #fff !important;
        color: #000 !important;
        border: 1px solid #ccc;
        position: relative;
        overflow: hidden;
        box-shadow: 
          0 4px 6px rgba(0, 0, 0, 0.1),
          0 0 10px rgba(0, 123, 255, 0.4),
          0 0 20px rgba(0, 255, 136, 0.2);
        animation: buttonGlow 3s infinite alternate;
        align-self: flex-start;
        margin-top: auto;
      }

      .quote-btn:hover {
        background-color: #f7f7f7 !important;
        color: #000 !important;
        box-shadow: 
          0 6px 12px rgba(0, 0, 0, 0.15),
          0 0 20px rgba(0, 123, 255, 0.6),
          0 0 30px rgba(0, 255, 136, 0.4);
        transform: translateY(-2px);
      }

      @keyframes buttonGlow {
        0% {
          box-shadow: 
            0 4px 6px rgba(0, 0, 0, 0.1),
            0 0 10px rgba(0, 123, 255, 0.4),
            0 0 20px rgba(0, 255, 136, 0.2);
        }
        100% {
          box-shadow: 
            0 4px 6px rgba(0, 0, 0, 0.1),
            0 0 20px rgba(0, 123, 255, 0.6),
            0 0 30px rgba(0, 255, 136, 0.4);
        }
      }

      /* Card styles */
.card-item {
      border-radius: 24px;
      overflow: hidden;
      background: linear-gradient(to bottom, #002c23 0%, #005945 50%, #002C23 100%);
      z-index: 1;
      width: 100%;
      margin-left: 0;
      margin-right: 0;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
      height: auto;
      margin-bottom: 20px;
      border: 1px solid rgba(255, 255, 255, 0.15);
    }

      .card-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 30px rgba(0, 179, 143, 0.3);
      }

      .card-img {
        background-size: cover;
        background-position: center;
        border-radius: 8px 8px 0 0;
        transition: height 0.3s ease;
      }

      /* Card content: balra igazítás */
.card-content {
  padding: 0.1rem 1rem 1rem 1rem; /* Például így hagytad a paddingot */
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  justify-content: flex-start;
  min-height: 100px; /* Ezt távolítsd el vagy csökkentsd */
}


      .card-title {
        font-size: 20px;
        margin-bottom: 0.5rem;
        color: #fff;
        text-align: left;
        font-weight: bold;
        padding: 0;
      }

      .card-desc {
        opacity: 0.75;
        font-size: 14px;
        color: #fff;
        text-align: left;
        height: 0;
        overflow: hidden;
        transition: height 0.5s ease, opacity 0.3s ease, margin 0.3s ease;
        margin: 0;
      }

      .card-expanded .card-desc {
        height: auto;
        opacity: 1;
        margin-bottom: 1rem;
      }

      /* Adjusted card height for desktop/laptop */
      @media (min-width: 768px) {
        .card-img {
          height: 120px;
        }
        .card-item {
          padding-bottom: 0;
          min-height: auto;
          max-height: none;
        }
        .card-content {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          min-height: 100px;
        }
        .card-expanded .card-content {
          min-height: 180px;
        }
      }

      /* Responsive adjustments */
      @media (max-width: 809px) {
        .heading-text {
          font-size: 28px;
        }
        .desc-text {
          font-size: 12px;
          line-height: 20px;
        }
        .card-title {
          font-size: 18px;
        }
        .card-desc {
          font-size: 13px;
        }
      }

      /* Base styles for text content */
      .text-content {
        padding-left: 1rem;
        padding-right: 1rem;
      }

      /* Desktop styles */
      @media (min-width: 768px) {
        .text-content {
          padding-left: 5rem;
          padding-right: 2rem;
        }
      }

      /* Mobile styles */
      @media (max-width: 767px) {
        .my-section {
          padding-left: 0;
          padding-right: 0;
          width: 100vw;
          overflow: hidden;
        }
        
        .row {
          margin-left: 0;
          margin-right: 0;
          width: 100%;
        }
        
        .cards {
          padding-left: 0;
          padding-right: 0;
          width: 100%;
        }
        
        .text-content {
          padding-left: 1rem;
          padding-right: 1rem;
          width: 100%;
        }
        
        .card-item {
          border-radius: 20px;
          margin-bottom: 15px;
        }
        
        .card-content {
          padding: 0.75rem;
        }
      }

      @media (max-width: 768px) {
        .card-img {
          height: 120px;
        }
        .card-content {
          min-height: 80px;
        }
        .card-expanded .card-content {
          min-height: 140px;
        }
      }

      /* Smaller screens */
      @media (max-width: 576px) {
        .card-img {
          height: 100px;
        }
      }
    `;
    document.head.appendChild(style);

    // Cleanup on component unmount
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Services data
  const services = [
    {
      title: "Teljeskörű tartalomgyártás a tervezéstől a posztolásig",
      description:
        "Figyelemfelkeltő rövid videós tartalmak, amelyek hatékonyan vonzzák be a közönséget, miközben stílusosan képviselik márkádat. Érzelmeket váltanak ki és hatékonyan közvetítik az üzenetedet. Ezek a videók ideálisak arra, hogy elérd közönségedet ott, ahol a legtöbb időt töltik: a közösségi médián.",
    },
    {
      title: "Reklám és Image videók készítése",
      description:
        "Magával ragadó, minőségi reklámfilmek, amelyek hatékonyan mesélik el márkád üzenetét és történetét.",
    },
    {
      title: "Fotózás",
      description:
        "Minőségi és karakteres fotók, amelyek valóban kiemelik márkád egyediségét, valamint megmutatják termékeid/szolgáltatásaid értékét. Célunk, hogy a legtöbbet hozzuk ki a márkából.",
      image: "https://via.placeholder.com/400x300?text=Card+3",
    },
    {
      title: "Social media management",
      description:
        "Mi gondoskodunk a közösségi médiád sikeréről! Facebook, Instagram, TikTok és YouTube profiljaidat aktívan frissítjük, vonzó tartalommal töltjük meg.",
      image: "https://via.placeholder.com/400x300?text=Card+4",
    },
    {
      title: "Weboldal tervezés és fejlesztés",
      description:
        "Professzionális, modern, esztétikus, felhasználóbarát weboldalak, amelyek megfelelnek céged igényeinek és céljainak.",
      image: "https://via.placeholder.com/400x300?text=Card+5",
    },
  ];

  return (
    <div className="my-section container py-5">
      <div className="row">
        {/* Left-side text (sticky) */}
        <div className="text-content col-md-6 mb-4 mb-md-0">
          <div className="heading mb-3">
            <h2 className="heading-text">Szolgáltatások</h2>
          </div>
          <div className="description">
            <p className="desc-text">
              A mai világban elengedhetetlenné vált az online jelenlét, hiszen
              ha NEM LÁTSZOL = NEM JÁTSZOL. Kreatív csapatunk küldetése, hogy
              ebben segítséget nyújtson Neked és a márkád/céged számára.
            </p>
          </div>
          <div className="button-container mt-3">
            <a
              href="#referenciak"
              tabIndex={0}
              className="btn btn-light custom-btn ref-btn"
            >
              Referenciák
            </a>
          </div>
        </div>

        {/* Right-side cards */}
        <div className="cards col-md-6">
          {services.map((service, index) => (
            <div
              key={`service-${index}`}
              className={`card-item ${
                activeCard === index ? "card-expanded" : ""
              }`}
              onClick={() => toggleCard(index)}
            >
              <div
                className="card-img"
                style={{
                  backgroundImage: `url(${service.image})`,
                  height: "20px",
                }}
              ></div>
              <div className="card-content">
                <h3 className="card-title">{service.title}</h3>
                <div className="card-desc">{service.description}</div>
                <a
                  href="#"
                  className="btn btn-light custom-btn quote-btn glow-button"
                >
                  Árajánlat <span className="btn-subtext">(24H)</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSelection;
