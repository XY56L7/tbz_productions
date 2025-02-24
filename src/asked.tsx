import React, { useState, useEffect, CSSProperties } from "react";

const faqData = [
  {
    question: "Hogy néz ki a közös munka?",
    answer: (
      <div>
        <p><strong>Kapcsolatfelvétel</strong></p>
        <p>Töltsd ki az űrlapot vagy foglalj egy teljesen díjmentes és kötelezettségmentes konzultációt a naptárban (ha a Calendly megoldható), és 24 órán belül felvesszük veled a kapcsolatot a részletek átbeszéléséhez.</p>
        <p><strong>Ismerkedés, Start meeting</strong></p>
        <p>Személyes vagy online konzultáció keretében megismerjük részletesen vállalkozásod, igényeid és elképzeléseid. Mi pedig bemutatjuk, hogyan tudjuk ezeket megvalósítani.</p>
        <p><strong>Megegyezés, szerződéskötés</strong></p>
        <p>Amennyiben elképzeléseink összhangban állnak, és szimpatikusnak találod csapatunk munkamódszerét, egy hivatalos szerződés megkötésével megkezdhetjük az együttműködést.</p>
        <p><strong>Együttműködés kezdetének meghatározása</strong></p>
        <p>Lefixáljuk a közös munka kezdetét.</p>
        <p><strong>Stratégiai tervezés</strong></p>
        <p>A szerződéskötést követően azonnal elkezdjük a stratégiai tervezést. Ezeket ismertetjük, majd közösen véglegesítjük a koncepciót, hogy az a lehető legjobban illeszkedjen a céljaidhoz. A jóváhagyásod után részletesen kidolgozzuk a havi tartalmakat.</p>
        <p><strong>Forgatási időpont, helyszín és szereplők egyeztetése</strong></p>
        <p>Leszervezzük a forgatás időpontját, helyszínét és szereplőit.</p>
        <p><strong>Forgatókönyvek kidolgozása</strong></p>
        <p>Professzionális forgatókönyveket készítünk, amelyek bemutatják a videók scriptjeit, vizuális koncepcióját, illetve a fényképek üzenetét.</p>
        <p><strong>Helyszíni forgatás</strong></p>
        <p>Csapatunk, amely a legmodernebb technológiával és szakmai tapasztalattal dolgozik, a forgatás minden szakaszában a legmagasabb színvonalat képviseli. Az elképzeléseid figyelembe véve, prémium minőségű tartalmakat készítünk, amelyek hatékonyan támogatják márkád/céged kommunikációját.</p>
        <p><strong>Vágás és utómunka</strong></p>
        <p>Az elkészült nyers videókat feliratozzuk, animáljuk, színezzük és effektekkel látjuk el. A vágás során a legújabb trendeket és dizájnokat követjük, hogy modern, kreatív végeredményt kapjunk. Az elkészült nyers fotókat megszerkesztjük és vizuálisan optimalizáljuk.</p>
        <p><strong>Kreatívok átadása, véleményezés</strong></p>
        <p>A kész anyagokat átadjuk jóváhagyásra, amennyiben bármi észrevétel felmerül, korrigáljuk.</p>
        <p><strong>Social media management</strong></p>
        <p>Lehetőség van Social media managementre is, amely magában foglalja a közösségi média oldalak kezelését. Tapasztalatok alapján bevált módszereinkkel garantáltan jobb teljesítményt tudunk elérni, de természetesen a kész anyagokat Te is kezelheted. A posztolást követően minden tartalmat részletesen elemzünk a statisztikai adatok alapján, így pontos képet kapunk célközönséged igényeiről és preferenciáiról.</p>
      </div>
    )
  },
  {
    question: "Mennyibe kerül?",
    answer: "Minden projekt egyedi, ezért teljesen személyre szabott árajánlatot készítünk. Kérj bátran ajánlatot, és egyeztetjük a részleteket!"
  },
  {
    question: "Miért éri ez meg nekem?",
    answer: "Fő célunk, hogy teljes mértékben levegyük a tartalomgyártás terhét a válladról. Ugye milyen jól hangzik? A professzionális, minőségi tartalomgyártás drága eszközöket és egy teljes csapatot igényel – stratégiai tervezőt, szövegírót, operatőrt, vágót, fotóst és projektmenedzsert. Ha mindezt saját magadnak akarnád összeállítani, az jelentős idő- és költségráfordítást igényelne. Nálunk viszont mindent egy kézben kapsz meg, gördülékenyen és hatékonyan. Ha Te szerepelsz a videókban és a képeken, a forgatások időtartama a videók és képek mennyiségétől függően alakulnak, de általában havi egy alkalommal 6-8 órát vesznek igénybe. Ezen felül csak annyi a dolgod, hogy véleményezd és jóváhagyd a kész anyagokat."
  },
  {
    question: "Ki fog szerepelni?",
    answer: "2 opció van: a céged belsős embere szerepel vagy amennyiben szeretnéd, mi is tudunk biztosítani szereplőt."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Reszponzív viselkedéshez, ha később további módosítást szeretnél
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ---------- Inline stílusok ----------

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
    textAlign: "center",
    marginBottom: "1rem"
  };

  const subHeadingStyle: CSSProperties = {
    color: "#ccc",
    fontSize: "1rem",
    textAlign: "center",
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
    textAlign: "center",
    marginBottom: "3rem"
  };

  // A boxokat egy egysoros elrendezésben jelenítjük meg (1 oszlop)
  const gridContainerStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr"
  };

  // Az egyes FAQ box alapstílusa: gradient háttérrel, lekerekített sarkokkal és árnyékkal
  const accordionItemBaseStyle: CSSProperties = {
    background: "linear-gradient(to bottom, #002c23 0%, #005945 50%, #002C23 100%)",
    color: "#fff",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
    position: "relative"
  };

  const accordionHeaderStyle: CSSProperties = {
    padding: "1.5rem 2rem",
    cursor: "pointer",
    fontWeight: 500,
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
    borderTop: "1px solid rgba(255, 255, 255, 0.3)",
    display: isActive ? "block" : "none"
  });

  const toggleAccordion = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderFAQItems = () => {
    return faqData.map((item, index) => {
      const isActive = activeIndex === index;
      // Az első elemnél nincs átfedés, a többi esetén -20px margin-top, így részben "elfedik" egymást
      const itemStyle: CSSProperties = {
        ...accordionItemBaseStyle,
        marginTop: index === 0 ? "0" : "-20px",
        marginBottom: index === 0 ? "20px" : "0", // Az első elem után margin-bottom
        zIndex: faqData.length - index
      };
      return (
        <div key={index} style={itemStyle}>
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
    <section style={sectionStyle} id="FAQ">
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