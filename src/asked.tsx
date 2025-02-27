import React, { useState, useEffect, CSSProperties } from "react";

// Define the type for FAQ items
interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "Hogy néz ki a közös munka?",
    answer: (
      <div>
        <p><strong>Kapcsolatfelvétel</strong></p>
        <p>Töltsd ki az űrlapot vagy foglalj egy teljesen díjmentes konzultációt, és 24 órán belül felvesszük veled a kapcsolatot.</p>
        <p><strong>Ismerkedés</strong></p>
        <p>Online vagy személyes meetingen megismerjük vállalkozásod és céljaid.</p>
        <p><strong>Megegyezés</strong></p>
        <p>Szerződéskötés után elkezdjük a közös munkát.</p>
        <p><strong>Tervezés és forgatás</strong></p>
        <p>Stratégiát készítünk, forgatókönyvet írunk, majd professzionális tartalmat forgatunk.</p>
        <p><strong>Utómunka és átadás</strong></p>
        <p>A kész anyagokat szerkesztjük, átadjuk jóváhagyásra, majd kezeljük a közösségi médiádat, ha kéred.</p>
      </div>
    )
  },
  {
    question: "Mennyibe kerül?",
    answer: "Minden projekt egyedi, személyre szabott árajánlatot készítünk. Kérj ajánlatot!"
  },
  {
    question: "Miért éri ez meg nekem?",
    answer: "Leveszünk rólad minden terhet: profi csapatunk mindent egy kézben tart, neked csak jóváhagynod kell a kész anyagokat."
  },
  {
    question: "Ki fog szerepelni?",
    answer: "Te vagy céged emberei, de ha kéred, mi is biztosítunk szereplőt."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const sectionStyle: CSSProperties = {
    background: "radial-gradient(circle at center, #0a1f1a 0%, #000000 70%)",
    padding: "60px 20px",
    position: "relative",
    overflow: "hidden",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  };

  const containerStyle: CSSProperties = {
    maxWidth: "1400px",
    width: "100%",
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  };

  const starryBackgroundStyle: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 800\"%3E%3Ccircle fill=\"%23ffffff33\" cx=\"100\" cy=\"100\" r=\"2\"/%3E%3Ccircle fill=\"%23ffffff33\" cx=\"700\" cy=\"200\" r=\"1.5\"/%3E%3Ccircle fill=\"%23ffffff33\" cx=\"400\" cy=\"600\" r=\"2\"/%3E%3Ccircle fill=\"%23ffffff33\" cx=\"200\" cy=\"300\" r=\"1\"/%3E%3Ccircle fill=\"%23ffffff33\" cx=\"600\" cy=\"700\" r=\"1.5\"/%3E%3C/svg%3E')",
    opacity: 0.3,
    animation: "twinkle 10s infinite",
  };

  const mainHeadingStyle: CSSProperties = {
    color: "#fff",
    fontSize: isMobile ? "1.8rem" : "2.5rem",
    textAlign: "center",
    marginBottom: "1rem",
    textTransform: "uppercase",
    letterSpacing: "3px",
    fontWeight: 700,
    textShadow: "0 0 20px rgba(0, 179, 143, 0.5)",
  };

  const subHeadingStyle: CSSProperties = {
    color: "#b0e0d5",
    fontSize: isMobile ? "0.9rem" : "1.1rem",
    textAlign: "center",
    maxWidth: "700px",
    margin: "0 auto 3rem",
    fontStyle: "italic",
    opacity: 0.9,
  };

  const contactLinkStyle: CSSProperties = {
    display: "inline-flex",
    background: "linear-gradient(135deg, #00b38f, #005945)",
    color: "#fff",
    padding: "0.7rem 1.8rem",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: 700,
    boxShadow: "0 5px 20px rgba(0, 179, 143, 0.4)",
    transition: "all 0.3s ease",
  };

  const contactLinkWrapperStyle: CSSProperties = {
    textAlign: "center",
    marginBottom: "4rem",
  };

  const galaxyContainerStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
    gap: isMobile ? "20px" : "40px",
    padding: "0 20px",
    justifyItems: "center",
  };

  const itemStyle = (index: number): CSSProperties => {
    const isActive = activeIndex === index;
    const offsetX = (mousePosition.x - window.innerWidth / 2) * 0.01;
    const offsetY = (mousePosition.y - window.innerHeight / 2) * 0.01;

    return {
      position: "relative",
      width: isMobile ? "100%" : "90%",
      maxWidth: "400px",
      height: isActive ? (isMobile ? "auto" : "auto") : "180px",
      transform: `translate(${offsetX}px, ${offsetY}px)`,
      transition: "all 0.5s ease",
      background: isActive
        ? "linear-gradient(135deg, rgba(0, 89, 69, 0.95), rgba(0, 44, 35, 0.95))"
        : "linear-gradient(135deg, rgba(0, 54, 42, 0.85), rgba(0, 26, 21, 0.85))",
      borderRadius: "20px",
      boxShadow: isActive
        ? "0 15px 40px rgba(0, 179, 143, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.2)"
        : "0 10px 30px rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(5px)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      cursor: "pointer",
      zIndex: isActive ? 10 : 1,
      animation: `float${index} 6s infinite ease-in-out`,
      overflow: "hidden",
    };
  };

  const headerStyle: CSSProperties = {
    padding: "1rem",
    color: "#fff",
    fontSize: isMobile ? "1rem" : "1.2rem",
    fontWeight: 600,
    textAlign: "center",
    textShadow: "0 0 5px rgba(255, 255, 255, 0.3)",
  };

  const contentStyle = (isActive: boolean): CSSProperties => ({
    padding: isActive ? "1rem" : "0 1rem",
    color: "#e6f0ed",
    fontSize: isMobile ? "0.85rem" : "0.95rem",
    lineHeight: "1.6",
    opacity: isActive ? 1 : 0,
    height: isActive ? "auto" : "0",
    overflow: "hidden",
    transition: "opacity 0.3s ease, height 0.3s ease",
  });

  const toggleAccordion = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderFAQItems = () => {
    return faqData.map((item, index) => {
      const isActive = activeIndex === index;
      return (
        <div
          key={index}
          style={itemStyle(index)}
          onClick={() => toggleAccordion(index)}
          onMouseEnter={(e) => {
            if (!isActive) e.currentTarget.style.boxShadow = "0 12px 35px rgba(0, 179, 143, 0.4)";
          }}
          onMouseLeave={(e) => {
            if (!isActive) e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.5)";
          }}
        >
          <div style={headerStyle}>{item.question}</div>
          <div style={contentStyle(isActive)}>{item.answer}</div>
        </div>
      );
    });
  };

  return (
    <section style={sectionStyle} id="FAQ">
      <div style={starryBackgroundStyle} />
      <style>
        {`
          @keyframes float0 { 0%, 100% { transform: translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) translateY(0); } 50% { transform: translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) translateY(-10px); } }
          @keyframes float1 { 0%, 100% { transform: translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) translateY(0); } 50% { transform: translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) translateY(-12px); } }
          @keyframes float2 { 0%, 100% { transform: translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) translateY(0); } 50% { transform: translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) translateY(-8px); } }
          @keyframes float3 { 0%, 100% { transform: translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) translateY(0); } 50% { transform: translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) translateY(-10px); } }
          @keyframes twinkle { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.6; } }
        `}
      </style>
      <div style={containerStyle}>
        <h2 style={mainHeadingStyle}>Kérdések Univerzuma</h2>
        <p style={subHeadingStyle}>
          Fedezd fel a válaszokat egy varázslatos, interaktív utazáson keresztül!
        </p>
        <div style={contactLinkWrapperStyle}>
          <a
            href="mailto:info@tbzproductions.hu"
            style={contactLinkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05) translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 179, 143, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 5px 20px rgba(0, 179, 143, 0.4)";
            }}
          >
            Kapcsolat: info@tbzproductions.hu
          </a>
        </div>
        <div style={galaxyContainerStyle}>{renderFAQItems()}</div>
      </div>
    </section>
  );
};

export default FAQ;