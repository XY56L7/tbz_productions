import React, { useRef, useEffect, useState } from 'react';
import { CSSProperties } from 'react';

const processSteps = [
  { subtitle: "Hogyan néz ki a közös munka velünk?", description: "" },
  { subtitle: "Ismerkedés", description: "Online vagy személyes meetingen megismerjük vállalkozásod és céljaid." },
  { subtitle: "Megegyezés", description: "Szerződéskötés után elkezdjük a közös munkát." },
  { subtitle: "Tervezés és forgatás", description: "Stratégiát készítünk, forgatókönyvet írunk, majd professzionális tartalmat forgatunk." },
  { subtitle: "Utómunka és átadás", description: "A kész anyagokat szerkesztjük, átadjuk jóváhagyásra, majd kezeljük a közösségi médiádat, ha kéred." },
  { subtitle: "", description: "" }, // Dummy sixth card (content will be invisible)
];

const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftCardsRef = useRef<(HTMLLIElement | null)[]>([]);
  const rightContainerRef = useRef<HTMLUListElement>(null);
  const [rightCardsVisible, setRightCardsVisible] = useState(true);
  const [headerSticky, setHeaderSticky] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Mobile breakpoint at 768px

  const navbarHeight = '80px'; // Adjust based on your navbar's actual height

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const faqSectionStyle: CSSProperties = {
    background: 'radial-gradient(circle at center, #0a1f1a 0%, #000000 70%)',
    padding: isMobile ? `120px 10px 40px 10px` : `120px 20px 40px 20px`,
    position: 'relative',
    minHeight: isMobile ? 'auto' : 'calc(6 * 40vh + (6 * 7.5em))',
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

  const twinkleKeyframes = `@keyframes twinkle {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.6; }
  }`;

  const headerStyle: CSSProperties = {
    position: isMobile ? 'relative' : (headerSticky ? 'sticky' : 'relative'),
    top: isMobile ? 'auto' : (headerSticky ? navbarHeight : 'auto'),
    zIndex: 3,
    fontSize: isMobile ? '2rem' : '2.5rem',
    fontWeight: 700,
    color: '#fff',
    textAlign: 'center',
    margin: '0 0 120px 0',
    textShadow: '0 0 5px rgba(255, 255, 255, 0.3)',
    width: '100%',
    background: 'transparent',
  };

  const columnsContainerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: isMobile ? 'flex-start' : 'center',
    gap: isMobile ? '0' : '80px', // Added gap for mobile to separate columns
    width: '100%',
    maxWidth: isMobile ? 'none' : '1200px',
  };

  const cardsContainerStyle: CSSProperties = {
    width: isMobile ? '100%' : '45%',
    position: 'relative',
    zIndex: 2,
  };

  const cardsStyleLeft: CSSProperties = {
    ...({
      '--cards': 6,
      '--cardHeight': '20vh',
      '--cardTopPadding': '0',
      '--cardMargin': isMobile ? '2vw' : '4vw',
      listStyle: 'none',
      paddingLeft: 0,
      marginTop: 0,
      marginBottom: isMobile ? '2vw' : '4vw',
      paddingBottom: isMobile ? '0' : 'calc(6 * 7.5em)',
      display: isMobile ? 'flex' : 'grid', // Use flex for mobile to stack naturally
      flexDirection: isMobile ? 'column' : 'unset',
      gridTemplateColumns: isMobile ? 'none' : '1fr',
      gridTemplateRows: isMobile ? 'none' : `repeat(6, 40vh)`,
      gap: isMobile ? '20px' : '4vw', // Consistent gap for mobile stacking
    } as any),
  };

  const cardsStyleRight: CSSProperties = {
    listStyle: 'none',
    paddingLeft: 0,
    marginTop: isMobile ? '0' : '2vw',
    marginBottom: isMobile ? '0' : '2vw',
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '20px' : '2vw', // Match mobile gap for consistency
    position: isMobile ? 'relative' : 'sticky',
    top: isMobile ? 'auto' : `calc(${navbarHeight} + 120px)`,
    opacity: rightCardsVisible ? 1 : 0,
    transition: 'opacity 0.5s ease-in-out',
  };

  const cardStyleLeft: CSSProperties = {
    position: isMobile ? 'static' : 'sticky', // Use static for mobile to stack naturally
    top: isMobile ? 'auto' : `calc(${navbarHeight} + 120px + (var(--index) * 70px))`,
    backgroundColor: 'transparent',
  };

  const cardStyleRight: CSSProperties = {
    backgroundColor: 'transparent',
  };

  const cardBodyStyle = (index: number): CSSProperties => ({
    boxSizing: 'border-box',
    padding: '1rem',
    borderRadius: '20px',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 179, 143, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    height: isMobile ? 'auto' : '20vh',
    minHeight: isMobile ? 'auto' : 'none', // Allow natural height in mobile
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    transition: 'all 0.5s',
    position: 'relative',
    background: '#00362A',
    opacity: index === 5 ? 0 : 1,
  });

  const layerSubtitleStyle: CSSProperties = {
    fontSize: isMobile ? '1.3rem' : '1.5rem',
    fontWeight: 600,
    color: '#fff',
    margin: '0 0 0.5rem 0',
    textShadow: '0 0 5px rgba(255, 255, 255, 0.3)',
    textAlign: 'center',
    background: 'transparent',
    width: '100%',
    padding: '10px 0',
    boxSizing: 'border-box',
  };

  const layerDescriptionStyle: CSSProperties = {
    fontSize: isMobile ? '0.9rem' : '1rem',
    color: '#e6f0ed',
    margin: '0',
    lineHeight: 1.6,
    textAlign: 'center',
    flexGrow: 1,
  };

  const leftColumnTitleStyle: CSSProperties = {
    display: 'none', // Hide the title completely
  };

  const cardIndexStylesLeft = [
    { '--index': 0 } as CSSProperties,
    { '--index': 1 } as CSSProperties,
    { '--index': 2 } as CSSProperties,
    { '--index': 3 } as CSSProperties,
    { '--index': 4 } as CSSProperties,
    { '--index': 5 } as CSSProperties,
  ];

  useEffect(() => {
    const cards = leftCardsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const fifthCard = cards[4];
        const sixthCard = cards[5];

        if (fifthCard && sixthCard) {
          const fifthRect = fifthCard.getBoundingClientRect();
          const sixthRect = sixthCard.getBoundingClientRect();

          if (sixthRect.top <= fifthRect.top) {
            setRightCardsVisible(false);
            setHeaderSticky(false);
          } else {
            setRightCardsVisible(true);
            setHeaderSticky(true);
          }
        }
      },
      {
        root: null,
        threshold: [0, 0.1, 0.5, 1],
      }
    );

    if (cards[4]) observer.observe(cards[4]);
    if (cards[5]) observer.observe(cards[5]);

    return () => {
      if (cards[4]) observer.unobserve(cards[4]);
      if (cards[5]) observer.unobserve(cards[5]);
    };
  }, []);

  return (
    <section style={faqSectionStyle} id="FAQ" ref={sectionRef}>
      <style>{twinkleKeyframes}</style>
      <div style={starryBackgroundStyle} />
      <h1 style={headerStyle}>Gyakran Ismételt Kérdések</h1>
      <div style={columnsContainerStyle}>
        <div style={cardsContainerStyle}>
          <h2 style={leftColumnTitleStyle}>Így építjük fel a sikeredet lépésről lépésre</h2>
          <ul style={cardsStyleLeft}>
            {processSteps.map((step, index) => (
              <li
                key={`left-${index}`}
                style={{ ...cardStyleLeft, ...cardIndexStylesLeft[index] }}
                ref={(el) => {
                  leftCardsRef.current[index] = el;
                }}
              >
                <div style={cardBodyStyle(index)}>
                  <h2 style={layerSubtitleStyle}>{step.subtitle}</h2>
                  <p style={layerDescriptionStyle}>{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div style={cardsContainerStyle}>
          <ul style={cardsStyleRight} ref={rightContainerRef}>
            {processSteps.slice(0, 3).map((step, index) => (
              <li key={`right-${index}`} style={cardStyleRight}>
                <div style={cardBodyStyle(index)}>
                  <h2 style={layerSubtitleStyle}>{step.subtitle}</h2>
                  <p style={layerDescriptionStyle}>{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQ;