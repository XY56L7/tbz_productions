import React, { useState, useEffect, CSSProperties } from "react";

const faqData = [
  {
    question: "Hogyan zajlik le a közös munka veletek?",
    answer:
      "A közös munka során megbeszéljük az igényeket, a célokat és a konkrét lépéseket. Ez magában foglalja az előkészítést, a forgatást és az utómunkát."
  },
  {
    question: "Milyen költségekkel számolhatok?",
    answer:
      "A költségek függnek a projekt komplexitásától, a forgatási napok számától, a szükséges eszközöktől és az utómunka igényeitől."
  },
  {
    question: "Mennyi időt vesz igénybe egy forgatás?",
    answer:
      "Általában egy forgatási napot vesz igénybe, de a pontos időtartam a projekt méretétől és összetettségétől függ."
  },
  {
    question: "Ki fog szerepelni a videókban?",
    answer:
      "Az előre egyeztetett koncepció alapján készítjük el a videókat. Az ügyfél vagy az általunk biztosított szereplők is részt vehetnek."
  },
  {
    question: "Hol használhatom fel a tartalmakat?",
    answer:
      "A videókat, fotókat és egyéb tartalmakat szabadon felhasználhatod weboldaladon, közösségi média felületeiden és promóciós anyagokban."
  },
  {
    question: "Tudok többnyelvű tartalmakat is készíteni?",
    answer:
      "Igen, lehetőség van többnyelvű tartalmak készítésére. Ezt előzetesen egyeztetjük, és az utómunka során készítjük el a különböző nyelvi verziókat."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // We still listen for resize in case you want to add more responsive behavior later.
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ---------- Styles ----------
  const sectionStyle: CSSProperties = {
    backgroundColor: "#000",
    padding: "60px 20px"
  };

  const containerStyle: CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto"
  };

  const mainHeadingStyle: CSSProperties = {
    color: "#fff",
    fontSize: "2.2rem",
    textAlign: "center" as const,
    marginBottom: "1rem"
  };

  const subHeadingStyle: CSSProperties = {
    color: "#ccc",
    fontSize: "1rem",
    textAlign: "center" as const,
    maxWidth: "700px",
    margin: "0 auto 2rem"
  };

  const contactLinkStyle: CSSProperties = {
    display: "inline-block",
    backgroundColor: "#fff",
    color: "#000",
    padding: "0.75rem 1.5rem",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: 500
  };

  const contactLinkWrapperStyle: CSSProperties = {
    textAlign: "center" as const,
    marginBottom: "3rem"
  };

  // In desktop view, we want a single column grid.
  const gridContainerStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "30px"
  };

  const accordionItemStyle: CSSProperties = {
    backgroundColor: "#111",
    color: "#fff",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)"
  };

  const accordionHeaderStyle: CSSProperties = {
    padding: "1.5rem 2rem",
    cursor: "pointer",
    fontWeight: 500,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };

  const headerTextStyle: CSSProperties = {
    flex: 1,
    marginRight: "10px"
  };

  const plusCircleStyle: CSSProperties = {
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: "50%",
    width: "24px",
    height: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold"
  };

  const accordionBodyStyle = (isActive: boolean): CSSProperties => ({
    padding: "1.5rem 2rem",
    borderTop: "1px solid #333",
    display: isActive ? "block" : "none"
  });

  const toggleAccordion = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Render FAQ items once
  const renderFAQItems = () => {
    return faqData.map((item, index) => {
      const isActive = activeIndex === index;
      return (
        <div key={index} style={accordionItemStyle}>
          <div style={accordionHeaderStyle} onClick={() => toggleAccordion(index)}>
            <span style={headerTextStyle}>{item.question}</span>
            <span style={plusCircleStyle}>{isActive ? "-" : "+"}</span>
          </div>
          <div style={accordionBodyStyle(isActive)}>{item.answer}</div>
        </div>
      );
    });
  };

  return (
    <section style={sectionStyle} id='FAQ'>
      <div style={containerStyle}>
        <h2 style={mainHeadingStyle}>Kérdésed van? Itt megtalálod!</h2>
        <p style={subHeadingStyle}>
          Találd meg a leggyakrabban felmerülő kérdésekre adott válaszokat, amelyek segítenek a döntésed meghozatalában.
        </p>
        <div style={contactLinkWrapperStyle}>
          <a href="mailto:info@tbzproductions.hu" style={contactLinkStyle}>
            Egyéb kérdés: info@tbzproductions.hu
          </a>
        </div>
        <div style={gridContainerStyle}>{renderFAQItems()}</div>
      </div>
    </section>
  );
};

export default FAQ;
