import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ServiceSelection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Handle resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add scroll target element for navbar navigation
  useEffect(() => {
    // Create a scroll target element that's positioned correctly
    const scrollTarget = document.createElement("div");
    scrollTarget.id = "scroll-target-services";
    scrollTarget.style.position = "absolute";
    scrollTarget.style.top = "120px"; // Position below navbar
    scrollTarget.style.width = "100%";
    scrollTarget.style.height = "1px";
    scrollTarget.style.visibility = "hidden";
    
    // Append to the section
    if (sectionRef.current) {
      sectionRef.current.style.position = "relative";
      sectionRef.current.appendChild(scrollTarget);
    }

    return () => {
      if (sectionRef.current && document.getElementById("scroll-target-services")) {
        sectionRef.current.removeChild(document.getElementById("scroll-target-services")!);
      }
    };
  }, []);

  const toggleCard = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
      const offset = 80;

      window.scrollTo({
        top: sectionTop - offset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
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
      .custom-btn, .ref-btn, .quote-btn {
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

      .custom-btn:hover, .ref-btn:hover, .quote-btn:hover {
        box-shadow:
          0 0 20px rgba(255, 255, 255, 0.55),
          0 0 35px rgba(0, 123, 255, 0.35),
          0 0 45px rgba(0, 255, 136, 0.25);
        transform: translateY(-2px);
      }

      .custom-btn:active, .ref-btn:active, .quote-btn:active {
        transform: translateY(0);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
      }

      .quote-btn {
        align-self: flex-start;
        margin-top: auto;
      }

      .card-item {
        border-radius: 24px;
        overflow: hidden;
        background: linear-gradient(135deg, rgba(0, 54, 42, 0.85), rgba(0, 26, 21, 0.85));
        z-index: 1;
        width: 100%;
        margin-left: 0;
        margin-right: 0;
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, border 0.3s ease;
        height: auto;
        margin-bottom: 20px;
        border: 1px solid rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(5px);
      }

      .card-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 30px rgba(0, 179, 143, 0.3);
      }

      .card-item.card-expanded {
        background: linear-gradient(135deg, rgba(0, 89, 69, 0.95), rgba(0, 44, 35, 0.95));
        box-shadow: 0 15px 40px rgba(0, 179, 143, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        backdrop-filter: blur(5px);
        transition: all 0.5s ease;
        cursor: pointer;
        z-index: 10;
        animation: floatCard 6s infinite ease-in-out;
      }

      @keyframes floatCard {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }

      .card-content {
        padding: 0.1rem 1rem 1rem 1rem;
        text-align: left;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100px;
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

      .card-details {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.6);
        margin-bottom: 0.5rem;
        transition: opacity 0.3s ease, height 0.3s ease;
        height: auto;
        opacity: 1;
      }

      .card-expanded .card-details {
        height: 0;
        opacity: 0;
        overflow: hidden;
        margin: 0;
      }

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

      .text-content {
        padding-left: 1rem;
        padding-right: 1rem;
      }

      @media (min-width: 768px) {
        .text-content {
          padding-left: 5rem;
          padding-right: 2rem;
        }
      }

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
          padding-left: 1.5rem;
          padding-right: 1.5rem;
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
          padding-left: 1rem;
          padding-right: 1rem;
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

      @media (max-width: 576px) {
        .card-img {
          height: 100px;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

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
        "Minőségi és karakteres fotók, amelyek valóban kiemelik márkád egyediségét, valamint megmutatják termékeid/szolgáltatásaid értékét. Célunk, hogy a legtöbbet hozzuk ki a márkádból.",
      image: "https://via.placeholder.com/400x300?text=Card+3",
    },
    {
      title: "Social media management és hirdetéskezelés",
      description:
        "Mi gondoskodunk a közösségi médiád sikeréről! Kiemeljük márkádat a digitális tömegből egy ütős közösségi média stratégiával és professzionális oldalkezeléssel.",
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
    <div className="my-section container py-5" ref={sectionRef} id="services">
      <div className="row">
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
            <button
              type="button"
              onClick={() => scrollToSection("REF")}
              className="btn btn-light custom-btn ref-btn"
            >
              Referenciák
            </button>
          </div>
        </div>

        <div className="cards col-md-6" ref={cardsRef}>
          {services.map((service, index) => (
            <div
              key={`service-${index}`}
              className={`card-item ${activeCard === index ? "card-expanded" : ""}`}
              onClick={() => toggleCard(index)}
              id={index === 0 ? "first-service-card" : ""}
            >
              <div className="card-content">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-details">Kattints a részletekért!</p>
                <div className="card-desc">{service.description}</div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card toggle
                    scrollToSection("contact");
                  }}
                  className="btn btn-light custom-btn quote-btn"
                >
                  Árajánlat (24h)
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSelection;