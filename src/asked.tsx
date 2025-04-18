import React, { useRef, useEffect, useState, CSSProperties } from 'react';

// Define types for data structures
interface ProcessStep {
  subtitle: string;
  answer: string | React.ReactNode;
}

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

// Data for process steps (from FAQ)
const processSteps: ProcessStep[] = [
  {
    subtitle: 'Hogy néz ki a közös munka?',
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
    ),
  },
  { subtitle: 'Kapcsolatfelvétel', answer: 'Töltsd ki az űrlapot vagy foglalj konzultációt, és 24 órán belül jelentkezünk.' },
  { subtitle: 'Ismerkedés, Start meeting', answer: 'Megismerjük vállalkozásod és céljaid egy online vagy személyes találkozón.' },
  { subtitle: 'Megegyezés, szerződéskötés', answer: 'Szerződést kötünk, majd elkezdjük a közös munkát.' },
  // { subtitle: 'Stratégiai tervezés', answer: 'Kidolgozzuk a projekted stratégiáját a céljaid alapján.' },
  { subtitle: 'Stratégiai tervezés és forgatókönyvek kidolgozása', answer: 'Professzionális forgatókönyveket készítünk a tartalomhoz. Kidolgozzuk a projekted stratégiáját a céljaid alapján.' },
  {
    subtitle: 'Forgatási időpont, helyszín és szereplők egyeztetése',
    answer: 'Egyeztetjük a forgatás időpontját, helyszínét és a szereplőket.',
  },
  { subtitle: 'Helyszíni forgatás', answer: 'Professzionális csapattal lebonyolítjuk a forgatást.' },
  { subtitle: 'Vágás és utómunka', answer: 'A nyers anyagokat szerkesztjük, effektekkel tökéletesítjük.' },
  { subtitle: 'Kreatívok átadása, véleményezés', answer: 'Átadjuk a kész anyagokat, és várjuk visszajelzésed.' },
  { subtitle: 'Social media management', answer: 'Kezeljük közösségi média felületeid, ha kéred.' },
];

// Data for accordion FAQs (from FAQ2)
const faqItems: FAQItem[] = [
  {
    question: 'Mennyibe kerül?',
    answer: 'Minden projekt egyedi, személyre szabott árajánlatot készítünk. Kérj ajánlatot!',
  },
  {
    question: 'Miért éri ez meg nekem?',
    answer: 'Leveszünk rólad minden terhet: profi csapatunk mindent egy kézben tart, neked csak jóváhagynod kell a kész anyagokat.',
  },
  {
    question: 'Ki fog szerepelni?',
    answer: 'Te vagy céged emberei, de ha kéred, mi is biztosítunk szereplőt.',
  },
];

const FAQ: React.FC = () => {
  // State for process steps section
  const sectionRef = useRef<HTMLElement>(null);
  const accordionSectionRef = useRef<HTMLElement>(null); // Új ref az accordion szekcióhoz
  const cardsRef = useRef<(HTMLLIElement | null)[]>([]);
  const [headerSticky, setHeaderSticky] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // State for accordion FAQs section
  const [activeFAQIndex, setActiveFAQIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const navbarHeight = '80px';

  // Handle resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setActiveCard(null);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle mouse movement for FAQ accordion animations
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection observer for sticky header based on accordion section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!isMobile) {
          // Csak desktopon figyeljük az accordion szekciót
          setHeaderSticky(!entry.isIntersecting); // Ha az accordion szekció látható, nem sticky a header
        }
      },
      {
        root: null,
        threshold: 0.1, // Az accordion szekció 10%-ának láthatósága váltja ki
      }
    );

    if (accordionSectionRef.current) {
      observer.observe(accordionSectionRef.current);
    }

    return () => {
      if (accordionSectionRef.current) {
        observer.unobserve(accordionSectionRef.current);
      }
    };
  }, [isMobile]);

  // Toggle card for mobile in process steps
  const toggleCard = () => {
    if (isMobile) {
      setActiveCard(activeCard === 0 ? null : 0);
    }
  };

  // Toggle accordion for FAQs
  const toggleFAQ = (index: number) => {
    setActiveFAQIndex(activeFAQIndex === index ? null : index);
  };

  // Styles for process steps section
  const faqSectionStyle: CSSProperties = {
    background: 'radial-gradient(circle at center, #0a1f1a 0%, #000000 70%)',
    padding: isMobile ? '120px 10px 40px 10px' : '120px 20px 40px 20px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const starryBackgroundStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"%3E%3Ccircle fill="%23ffffff33" cx="100" cy="100" r="2"/%3E%3Ccircle fill="%23ffffff33" cx="700" cy="200" r="1.5"/%3E%3Ccircle fill="%23ffffff33" cx="400" cy="600" r="2"/%3E%3Ccircle fill="%23ffffff33" cx="200" cy="300" r="1"/%3E%3Ccircle fill="%23ffffff33" cx="600" cy="700" r="1.5"/%3E%3C/svg%3E')`,
    animation: 'twinkle 10s infinite',
    zIndex: 1,
  };

  const headerStyle: CSSProperties = {
    position: isMobile ? 'relative' : headerSticky ? 'sticky' : 'relative',
    top: isMobile ? 'auto' : headerSticky ? navbarHeight : 'auto',
    zIndex: 3,
    fontSize: isMobile ? '2rem' : '2.5rem',
    fontWeight: 700,
    color: '#fff',
    textAlign: 'center',
    margin: '0 0 40px 0',
    textShadow: '0 0 5px rgba(255, 255, 255, 0.3)',
    width: '100%',
    background: 'transparent',
  };

  const cardsContainerStyle: CSSProperties = {
    width: isMobile ? '90%' : '70%',
    maxWidth: isMobile ? '90%' : '800px',
    position: 'relative',
    zIndex: 2,
    margin: '0 auto',
  };

  const cardsStyle: CSSProperties = {
    ...({
      '--cards': 12,
      '--cardHeight': '11vh',
      '--cardTopPadding': '0',
      '--cardMargin': isMobile ? '0' : '4vw',
      listStyle: 'none',
      paddingLeft: 0,
      margin: 0,
      display: isMobile ? 'flex' : 'grid',
      flexDirection: isMobile ? 'column' : 'unset',
      gridTemplateColumns: isMobile ? 'none' : '1fr',
      gridTemplateRows: isMobile ? 'none' : `repeat(11, 11vh)`,
      gap: isMobile ? '0' : '4vw',
    } as any),
  };

  const cardStyle: CSSProperties = {
    position: isMobile ? 'static' : 'sticky',
    top: isMobile ? 'auto' : `calc(${navbarHeight} + 120px + (var(--index) * 50px))`,
    backgroundColor: 'transparent',
  };

  const cardBodyStyle = (index: number): CSSProperties => ({
    boxSizing: 'border-box',
    padding: isMobile && activeCard === index ? '0.5rem 1rem' : '0.5rem 1rem 1rem 1rem',
    borderRadius: '20px',
    boxShadow:
      index === 0
        ? '0 15px 40px rgba(0, 179, 143, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.2)'
        : '0 15px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 179, 143, 0.2)',
    border: index === 0 ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0.15)',
    height: isMobile && activeCard === index ? 'auto' : '11vh',
    minHeight: isMobile && activeCard === index ? '11vh' : 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    transition: 'all 0.3s ease',
    position: 'relative',
    background:
      index === 0
        ? 'linear-gradient(135deg, rgba(0, 89, 69, 0.95), rgba(0, 44, 35, 0.95))'
        : '#00362A',
    backdropFilter: index === 0 ? 'blur(5px)' : 'none',
    WebkitBackdropFilter: index === 0 ? 'blur(5px)' : 'none',
    cursor: isMobile ? 'pointer' : 'default',
  });

  const layerSubtitleStyle: CSSProperties = {
    fontSize: isMobile ? '1.1rem' : '1.5rem',
    fontWeight: 600,
    color: '#fff',
    margin: '0',
    textShadow: '0 0 5px rgba(255, 255, 255, 0.3)',
    textAlign: 'center',
    background: 'transparent',
    width: '100%',
    padding: '5px 0 10px 0',
    boxSizing: 'border-box',
    whiteSpace: 'normal',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  const answerStyle: CSSProperties = {
    fontSize: isMobile ? '0.9rem' : '1rem',
    color: '#e6f0ed',
    textAlign: 'center',
    padding: '0 1rem 1rem 1rem',
    margin: '0',
    width: '100%',
    boxSizing: 'border-box',
    display: isMobile ? 'block' : 'none',
  };

  const cardIndexStyles = Array.from({ length: 11 }, (_, i) => ({
    '--index': i,
  } as CSSProperties));

  // Styles for accordion FAQs section
  const accordionSectionStyle: CSSProperties = {
    padding: '40px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#000',
    margin: 0,
  };

  const accordionContainerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '20px' : '40px',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '1400px',
    padding: '0 20px',
    margin: 0,
  };

  const faqItemStyle = (index: number): CSSProperties => {
    const isActive = activeFAQIndex === index;
    const offsetX = (mousePosition.x - window.innerWidth / 2) * 0.01;
    const offsetY = (mousePosition.y - window.innerHeight / 2) * 0.01;

    return {
      position: 'relative',
      width: isMobile ? '100%' : '350px',
      height: isActive ? 'auto' : '180px',
      transform: `translate(${offsetX}px, ${offsetY}px)`,
      transition: 'all 0.5s ease',
      background: isActive
        ? 'linear-gradient(135deg, rgba(0, 89, 69, 0.95), rgba(0, 44, 35, 0.95))'
        : 'linear-gradient(135deg, rgba(0, 54, 42, 0.85), rgba(0, 26, 21, 0.85))',
      borderRadius: '20px',
      boxShadow: isActive
        ? '0 15px 40px rgba(0, 179, 143, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.2)'
        : '0 10px 30px rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(5px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      cursor: 'pointer',
      zIndex: isActive ? 10 : 1,
      animation: `float${index} 6s infinite ease-in-out`,
      overflow: 'hidden',
      margin: 0,
    };
  };

  const faqHeaderStyle: CSSProperties = {
    padding: '1rem',
    color: '#fff',
    fontSize: isMobile ? '1rem' : '1.2rem',
    fontWeight: 600,
    textAlign: 'center',
    textShadow: '0 0 5px rgba(255, 255, 255, 0.3)',
    margin: 0,
  };

  const faqContentStyle = (isActive: boolean): CSSProperties => {
    return {
      padding: isActive ? '1rem' : '0 1rem',
      color: '#e6f0ed',
      fontSize: isMobile ? '0.85rem' : '0.95rem',
      lineHeight: '1.6',
      opacity: isActive ? 1 : 0,
      height: isActive ? 'auto' : '0',
      overflow: 'hidden',
      transition: 'opacity 0.3s ease, height 0.3s ease',
      margin: 0,
    };
  };

  return (
    <>
      {/* Process Steps Section */}
      <section style={faqSectionStyle} id="ProcessSteps" ref={sectionRef}>
  <style>
    {`
      @keyframes twinkle {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 0.6; }
      }
    `}
  </style>
  <div style={starryBackgroundStyle} id="FAQ" />
  <h1 style={headerStyle}>Gyakran Ismételt Kérdések</h1>
  <div style={cardsContainerStyle}>
    <ul style={cardsStyle}>
      {isMobile ? (
        <li
          key="card-0"
          style={{ ...cardStyle, ...cardIndexStyles[0] }}
          onClick={toggleCard}
          ref={(el) => {
            cardsRef.current[0] = el;
          }}
        >
          <div style={cardBodyStyle(0)}>
            <h2 style={layerSubtitleStyle}>{processSteps[0].subtitle}</h2>
            {isMobile && activeCard === 0 && (
              <div style={answerStyle}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {processSteps.slice(1).map((step, index) => (
                    <li
                      key={`step-${index}`}
                      style={{
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        color: '#e6f0ed',
                        textAlign: 'center',
                        margin: '10px 0',
                      }}
                    >
                      {`${index + 1}. ${step.subtitle}`}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </li>
      ) : (
        processSteps.map((step, index) => (
          <li
            key={`card-${index}`}
            style={{ ...cardStyle, ...cardIndexStyles[index] }}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
          >
            <div style={cardBodyStyle(index)}>
              <h2 style={layerSubtitleStyle}>{step.subtitle}</h2>
            </div>
          </li>
        ))
      )}
    </ul>
  </div>
</section>

      {/* Accordion FAQs Section */}
      <section style={accordionSectionStyle}  ref={accordionSectionRef}>
        <style>
          {`
            @keyframes float0 { 0%, 100% { transform: translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) translateY(0); } 50% { transform: translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) translateY(-10px); } }
            @keyframes float1 { 0%, 100% { transform: translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) translateY(0); } 50% { transform: translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) translateY(-12px); } }
            @keyframes float2 { 0%, 100% { transform: translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) translateY(0); } 50% { transform: translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) translateY(-8px); } }
          `}
        </style>
        <div style={accordionContainerStyle}>
          {faqItems.map((item, index) => {
            const isActive = activeFAQIndex === index;
            return (
              <div
                key={index}
                style={faqItemStyle(index)}
                onClick={() => toggleFAQ(index)}
                onMouseEnter={(e) => {
                  if (!isActive)
                    e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 179, 143, 0.4)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
                }}
              >
                <div style={faqHeaderStyle}>{item.question}</div>
                <div style={faqContentStyle(isActive)}>{item.answer}</div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default FAQ;