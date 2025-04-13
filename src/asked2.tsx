import React, { useState, useEffect, CSSProperties } from "react";

// Define the type for FAQ items
interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

const faqData: FAQItem[] = [
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

const FAQ2: React.FC = () => {
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
    padding: "20px 20px 0 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#000",
    margin: 0,
  };

  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? "20px" : "40px",
    justifyContent: "center",
    width: "100%",
    maxWidth: "1400px",
    padding: "0 20px",
    margin: 0,
  };

  const itemStyle = (index: number): CSSProperties => {
    const isActive = activeIndex === index;
    const offsetX = (mousePosition.x - window.innerWidth / 2) * 0.01;
    const offsetY = (mousePosition.y - window.innerHeight / 2) * 0.01;

    return {
      position: "relative",
      width: isMobile ? "100%" : "350px",
      height: isActive ? "auto" : "180px",
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
      margin: 0,
    };
  };

  const headerStyle: CSSProperties = {
    padding: "1rem",
    color: "#fff",
    fontSize: isMobile ? "1rem" : "1.2rem",
    fontWeight: 600,
    textAlign: "center",
    textShadow: "0 0 5px rgba(255, 255, 255, 0.3)",
    margin: 0,
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
    margin: 0,
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
    <section style={sectionStyle}>
      <style>
        {`
          @keyframes float0 { 0%, 100% { transform: translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) translateY(0); } 50% { transform: translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) translateY(-10px); } }
          @keyframes float1 { 0%, 100% { transform: translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) translateY(0); } 50% { transform: translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) translateY(-12px); } }
          @keyframes float2 { 0%, 100% { transform: translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) translateY(0); } 50% { transform: translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) translateY(-8px); } }
        `}
      </style>
      <div style={containerStyle}>{renderFAQItems()}</div>
    </section>
  );
};

export default FAQ2;